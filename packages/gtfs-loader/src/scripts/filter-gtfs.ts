import * as fs from 'node:fs'
import chalk from 'chalk'
import { filterCsv } from '../csv/filter-csv'
import { streamCsv3 } from '../csv/stream-csv'
import {
  GTFS_CSV_FILTERED_MODES,
  GTFS_CSV_HEADERS,
  GTFS_CSV_UNFILTERED,
  GTFS_ZIP_HEADERS,
} from '../data'
import { ignoreRoutes, ROUTE_TYPES } from '../route-types'
import { readFile, writeFile } from '../files/files'

const isOutdated = async () => {
  const zipHeaderDataJson = await readFile(GTFS_ZIP_HEADERS)
  const csvHeaderDataJson = await readFile(GTFS_CSV_HEADERS)

  const csvHeaders = csvHeaderDataJson && JSON.parse(csvHeaderDataJson)

  if (csvHeaderDataJson === zipHeaderDataJson)
    console.log(
      chalk.green(
        `The CSVs are up to date since ${csvHeaders['last-modified']}`,
      ),
    )
  else {
    if (csvHeaders)
      console.log(
        chalk.yellow(`The CSVs need an update: ${csvHeaders['last-modified']}`),
      )
    return zipHeaderDataJson
  }
  return false
}

const doFilterGtfs = async () => {
  await fs.promises.mkdir(GTFS_CSV_FILTERED_MODES, { recursive: true })

  const routeIds = new Set<string>()
  await filterCsv(
    `${GTFS_CSV_UNFILTERED}/routes.txt`,
    `${GTFS_CSV_FILTERED_MODES}/routes.txt`,
    (row) => {
      if (
        !ROUTE_TYPES.includes(Number(row.route_type)) ||
        ignoreRoutes.includes(row.route_id)
        // ||
        // row.route_short_name !== 'U1'
      )
        return false
      routeIds.add(row.route_id)
      return true
    },
    'Filter routes',
  )

  const tripIds = new Set<string>()
  const serviceIds = new Set<string>()
  await filterCsv(
    `${GTFS_CSV_UNFILTERED}/trips.txt`,
    `${GTFS_CSV_FILTERED_MODES}/trips.txt`,
    (row) => {
      if (!routeIds.has(row.route_id)) return false
      tripIds.add(row.trip_id)
      serviceIds.add(row.service_id)
      return true
    },
    'Filter trips',
  )

  const stopIds = new Set<string>()
  await filterCsv(
    `${GTFS_CSV_UNFILTERED}/stop_times.txt`,
    `${GTFS_CSV_FILTERED_MODES}/stop_times.txt`,
    (row) => {
      if (!tripIds.has(row.trip_id)) return false
      stopIds.add(row.stop_id)
      return true
    },
    'Filter stop-times',
  )

  await streamCsv3({
    filePath: `${GTFS_CSV_UNFILTERED}/stops.txt`,
    func(row) {
      if (row?.parent_station && stopIds.has(row.stop_id))
        stopIds.add(row.parent_station)
    },
    oraText: 'Prefilter stops',
  })

  await filterCsv(
    `${GTFS_CSV_UNFILTERED}/stops.txt`,
    `${GTFS_CSV_FILTERED_MODES}/stops.txt`,
    (row) => stopIds.has(row.stop_id),
    'Filter stops',
  )

  await filterCsv(
    `${GTFS_CSV_UNFILTERED}/calendar.txt`,
    `${GTFS_CSV_FILTERED_MODES}/calendar.txt`,
    (row) => serviceIds.has(row.service_id),
    'Filter calendars',
  )

  await filterCsv(
    `${GTFS_CSV_UNFILTERED}/calendar_dates.txt`,
    `${GTFS_CSV_FILTERED_MODES}/calendar_dates.txt`,
    (row) => serviceIds.has(row.service_id),
    'Filter calendar-dates',
  )
}

export const filterGtfs = async () => {
  const zipHeaderDataJson = await isOutdated()
  if (!zipHeaderDataJson) return
  await doFilterGtfs()
  await writeFile(GTFS_CSV_HEADERS, zipHeaderDataJson)
}
