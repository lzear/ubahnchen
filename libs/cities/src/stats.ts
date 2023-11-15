import fs from 'node:fs'
import path from 'node:path'

import chalk from 'chalk'
import _ from 'lodash'

import type { DBSingleton } from '@ubahnchen/database'
import { getDatabase } from '@ubahnchen/database'
import { countLines, fileSize, isAlreadyUpToDate } from '@ubahnchen/node'
import { log2DArray, logStrings, prettyNumber } from '@ubahnchen/utils'

import type { City } from './index'
import { cities } from './index'
import { paths } from './paths'

export const isZipUpToDate = async (city: City) => {
  const { gtfs } = cities[city]
  const p = paths(city)
  return await isAlreadyUpToDate(gtfs.url, p.GTFS_ZIP)
}

export const zipStats = async (city: City) => {
  const [[isUpToDate, headers], sizes] = await Promise.all([
    isZipUpToDate(city),
    fileSize(paths(city).GTFS_ZIP),
  ])
  return {
    isUpToDate,
    ...headers,
    ...sizes,
    oldDate: headers.oldHeaders?.['last-modified'],
    newDate: headers.newHeaders['last-modified'],
  }
}

const csvStats = async (city: City) => {
  const p = paths(city)
  const csvFiles = await fs.promises.readdir(p.GTFS_CSV_DIR)
  const files = await Promise.all(
    csvFiles.map(async (file) => {
      const fpath = path.join(p.GTFS_CSV_DIR, file)
      const { size, prettySize } = await fileSize(fpath)
      const lines = countLines(fpath)
      return { file, size, prettySize, lines } as const
    }),
  )
  const lines = _.sum(files.map(({ lines }) => lines))
  return { lines, files }
}

const dbStats = async (city: City) => {
  const p = paths(city)
  const db = getDatabase(p.SQLITE_BIG)
  const tables = listTables(city).map((table) => ({
    table,
    count: countRows(table, db),
  }))
  const { prettySize } = await fileSize(p.SQLITE_BIG)
  return { prettySize, tables }
}

export const cityStats = async (city: City) => {
  const [zip, csv, db] = await Promise.all([
    zipStats(city),
    csvStats(city),
    dbStats(city),
  ] as const)
  return { city, zip, csv, db }
}

export const logCityStats = (s: Awaited<ReturnType<typeof cityStats>>) => {
  console.log(chalk.bold.whiteBright(`Status for ${s.city}:`))
  if (s.zip.isUpToDate)
    console.log(chalk.green.bold(`📦 ZIP up to date (${s.zip.newDate})`))
  else if (s.zip.oldDate)
    console.log(
      chalk.yellow.bold(
        `⚠️ ZIP not up to date (${s.zip.oldDate} vs. ${s.zip.newDate})`,
      ),
    )
  else
    console.log(chalk.red.bold(`⚠️ ZIP missing (available: ${s.zip.newDate})`))
  if (s.zip.prettySize) console.log(`\tsize: ${s.zip.prettySize}`)
  console.log(
    chalk.green.bold(
      `📜 CSV (${prettyNumber(s.csv.lines)} lines in ${
        s.csv.files.length
      } files) `,
    ),
  )
  logStrings(
    log2DArray(
      s.csv.files.map(({ file, lines, prettySize }) => [
        file,
        prettyNumber(lines),
        prettySize,
      ]),
      '  ',
    ),
    '\t',
  )
  console.log(chalk.green.bold(`🗄️DB`))
  console.log(`\tsize: ${s.db.prettySize}`)
  logStrings(
    log2DArray(
      s.db.tables.map(({ table, count }) => [table, prettyNumber(count)]),
      '  ',
    ),
    '\t',
  )
  console.log(chalk.green.bold(`🗺️ Maps`))
  console.log('  ' + Object.keys(cities[s.city].maps).join('  '))
}

const countRows = (tableName: string, db: DBSingleton) => {
  const results = db.database
    .prepare(`SELECT COUNT(*) AS count FROM ${tableName}`)
    .all() as [{ count: number }]

  return results[0].count
}

const listTables = (city: City) => {
  const p = paths(city)
  const db = getDatabase(p.SQLITE_BIG)
  const tables = db.database
    .prepare(`SELECT name FROM sqlite_master WHERE type='table'`)
    .all() as { name: string }[]
  return tables.map(({ name }) => name)
}
