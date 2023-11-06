import { createWithDrizzle, getDatabase } from '@ubahnchen/database'

import { filterRoutes } from './01-filter-routes.js'
import { filterTrips } from './02-filter-trips.js'
import { filterCalendar } from './03-filter-calendar.js'
import { filterCalendarDates } from './04-filter-calendar-dates.js'
import { filterStopTimes } from './05-filter-stops-times.js'
import { filterStops } from './06-filter-stops.js'
import { filterStopPairs } from './07-filter-stop-pairs.js'

export type Options = {
  sourceDatabasePath: string
  targetDatabasePath: string
}

export const filterGtfsSqlite = async (options: Options) => {
  const targetDb = await createWithDrizzle({
    filePath: options.targetDatabasePath,
  })

  const database = getDatabase(options.sourceDatabasePath)

  const p = {
    source: database,
    target: { database: targetDb.database, drizzled: targetDb.drizzleDatabase },
  }

  filterRoutes(p)
  filterTrips(p)
  filterCalendar(p)
  filterCalendarDates(p)
  filterStopTimes(p)
  filterStops(p)
  filterStopPairs(p)
}
