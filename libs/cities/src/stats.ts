import fs from 'node:fs'
import path from 'node:path'

import type BetterSqlite3 from 'better-sqlite3'
import chalk from 'chalk'
import _ from 'lodash'
import prettyBytes from 'pretty-bytes'

import { getDatabase } from '@ubahnchen/database'
import { countLines, fileSize, isAlreadyUpToDate } from '@ubahnchen/node'
import { log2DArray, logStrings, prettyNumber } from '@ubahnchen/utils'

import { MapQueries } from './maps/map-queries'
import type { City } from './index'
import { cities } from './index'
import { MapAssetName, MapAssets } from './maps-assets'
import { P, svgArray, svgFilesDone, svgs } from './paths'

export const isZipUpToDate = async (city: City) => {
  const { gtfs } = cities[city]
  const p = P(city)
  return await isAlreadyUpToDate(gtfs.url, p.GTFS.ZIP)
}

export const zipStats = async (city: City) => {
  const [[isUpToDate, headers], sizes] = await Promise.all([
    isZipUpToDate(city),
    fileSize(P(city).GTFS.ZIP),
  ])
  return {
    isOkay: isUpToDate,
    isUpToDate,
    ...headers,
    ...sizes,
    oldDate: headers.oldHeaders?.['last-modified'],
    newDate: headers.newHeaders['last-modified'],
  }
}

const csvStats = async (city: City) => {
  const p = P(city)
  const csvFiles = await fs.promises.readdir(p.GTFS.CSV.DIR)
  const files = await Promise.all(
    csvFiles.map(async (file) => {
      const fpath = path.join(p.GTFS.CSV.DIR, file)
      const { size, prettySize } = await fileSize(fpath)
      const lines = countLines(fpath)
      return { file, size, prettySize, lines } as const
    }),
  )
  const lines = _.sum(files.map(({ lines }) => lines))
  const size = _.sum(files.map(({ size }) => size))
  const prettySize = prettyBytes(size)
  return { isOkay: true, files, total: { lines, size, prettySize } }
}

const cityDbStats = async (city: City) => {
  const p = P(city)
  const [big, small] = await Promise.all([
    dbStats(p.SQLITE.BIG),
    dbStats(p.SQLITE.SMALL),
  ])
  return { isOkay: Boolean(big && small), big, small }
}

const mapsStats = async (city: City) => {
  const maps = await Promise.all(
    Object.keys(cities[city].maps).map(async (map) => {
      const stats = await mapStats(city, map)
      return {
        isOkay: !!stats?.isOkay,
        city,
        map,
        stats,
      }
    }),
  )

  return {
    isOkay: maps.every((v) => v.isOkay),
    maps,
  }
}

const mapStats = async (city: City, map: string) => {
  const mapStopsPlacements = new MapAssets(city, map, MapAssetName.PLACE_STOPS)
  const placeStops = await mapStopsPlacements.read({})

  try {
    const mapQueries = new MapQueries(city)
    const usedStops = mapQueries.usedStops(map, true)

    const stops = usedStops.stops.length
    const placedStops = Object.keys(placeStops).length
    const svgs = svgFilesDone(city, map)
    return {
      isOkay: stops === placedStops && Object.values(svgs).every(Boolean),
      map,
      stops,
      placedStops,
      svgs,
    }
  } catch (error) {
    console.error(error)
    return null
  }
}

const dbStats = async (dbPath: string) => {
  try {
    const db = getDatabase(dbPath, true).database
    const tables = listTables(db).map((table) => ({
      table,
      count: countRows(table, db),
    }))
    const { prettySize } = await fileSize(dbPath)
    return { prettySize, tables, total: _.sumBy(tables, 'count') }
  } catch (error) {
    console.error(error)
    return null
  }
}

export const cityStats = async (city: City) => {
  const r = await Promise.all([
    zipStats(city),
    csvStats(city),
    cityDbStats(city),
    mapsStats(city),
  ] as const)
  const [zip, csv, db, maps] = r
  return { city, zip, csv, db, maps, isOkay: r.every((v) => v.isOkay) }
}

export const logCityStats = (s: Awaited<ReturnType<typeof cityStats>>) => {
  console.log(chalk.bold.whiteBright(`Status for ${s.city}:`))
  if (s.zip.isUpToDate)
    console.log(chalk.green.bold(`📦 ZIP up to date (${s.zip.newDate})`))
  else if (s.zip.oldDate)
    console.log(chalk.yellow.bold(`⚠️ ZIP not up to date`))
  else
    console.log(chalk.red.bold(`⚠️ ZIP missing (available: ${s.zip.newDate})`))
  logStrings(
    log2DArray(
      [
        ['', 'date', 'size (header)', 'size (file)'],
        [
          'old',
          s.zip.oldDate,
          s.zip.oldHeaders?.['content-length']
            ? prettyBytes(s.zip.oldHeaders?.['content-length'])
            : '-',
          s.zip.prettySize,
        ],
        [
          'new',
          s.zip.newDate,
          s.zip.newHeaders?.['content-length']
            ? prettyBytes(s.zip.newHeaders?.['content-length'])
            : '-',
          '-',
        ],
      ],
      '  ',
    ),
    '\t',
  )
  console.log(chalk.green.bold(`📜 CSV (${s.csv.files.length} files) `))
  logStrings(
    log2DArray(
      [
        ['file', 'lines', 'size'],
        ...s.csv.files.map(({ file, lines, prettySize }) => [
          file,
          prettyNumber(lines),
          prettySize,
        ]),
        ['total', prettyNumber(s.csv.total.lines), s.csv.total.prettySize],
      ],
      '  ',
    ),
    '\t',
  )
  if (s.db.big) {
    console.log(chalk.green.bold(`🗄️DB big (${s.db.big?.prettySize})`))
    const expectedLines = (table: string) => {
      const csv = s.csv.files.find(({ file }) => file === `${table}.txt`)
      if (!csv || table === 'shapes') return null
      const value = csv.lines - 1
      return { value, pretty: prettyNumber(value) }
    }
    logStrings(
      log2DArray(
        [
          ['table', 'count', 'expected', 'ok?'],
          ...s.db.big.tables.map(({ table, count }) => {
            const expected = expectedLines(table)

            return [
              table,
              prettyNumber(count),
              expected?.pretty ?? '-',
              expected ? (count === expected?.value ? '✅ ' : '❌ ') : '',
            ]
          }),
          ['total', prettyNumber(s.db.big.total)],
        ],
        '  ',
      ),
      '\t',
    )
  } else console.log(chalk.red.bold(`⚠️ DB big missing`))

  if (s.db.small) {
    console.log(chalk.green.bold(`🗄️DB small (${s.db.small.prettySize})`))
    logStrings(
      log2DArray(
        [
          ['table', 'count', '%'],
          ...s.db.small.tables.map(({ table, count }) => [
            table,
            prettyNumber(count),
            s.db.big
              ? `${(
                  (count /
                    s.db.big?.tables.find((t) => t.table === table)!.count) *
                  100
                ).toFixed(2)}%`
              : '',
          ]),
          [
            'total',
            prettyNumber(s.db.small.total),
            s.db.big
              ? `${((s.db.small.total / s.db.big.total) * 100).toFixed(2)}%`
              : '',
          ],
        ],
        '  ',
      ),
      '\t',
    )
  } else console.log(chalk.red.bold(`⚠️ DB small missing`))

  console.log(chalk.bold(`🎨 Colors`))
  console.log(
    ...Object.entries(cities[s.city].gtfs.lineColors).map(([name, colors]) =>
      chalk.bold.hex(colors.text).bgHex(colors.bg)(`\u00A0${name}\u00A0`),
    ),
  )
  console.log()

  if (s.maps.maps.length > 0) console.log(chalk.green.bold(`🗺️ Maps`))
  else console.log(chalk.red.bold(`⚠️ Maps missing`))

  logStrings(
    log2DArray(
      [
        ['', ...s.maps.maps.map((v) => v.map)],
        [
          'placed stops',
          ...s.maps.maps.map((v) => {
            if (!v.stats) return chalk.red('❌ ')
            const { stops, placedStops } = v.stats
            const color = stops === placedStops ? chalk.green : chalk.red
            return color(`${placedStops}/${stops}`)
          }),
        ],
        ...svgArray.map((key) => [
          svgs[key],
          ...s.maps.maps.map((v) =>
            v.stats?.svgs[key] ? chalk.green('✅ ') : chalk.red('❌ '),
          ),
        ]),
      ],
      '  ',
    ),
    '\t',
  )
}

const countRows = (tableName: string, db: BetterSqlite3.Database) => {
  const results = db
    .prepare(`SELECT COUNT(*) AS count FROM ${tableName}`)
    .all() as [{ count: number }]

  return results[0].count
}

const listTables = (db: BetterSqlite3.Database) => {
  const tables = db
    .prepare(`SELECT name FROM sqlite_master WHERE type='table'`)
    .all() as { name: string }[]
  return tables.map(({ name }) => name)
}
