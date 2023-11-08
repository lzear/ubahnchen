import type { DBSingleton } from '@ubahnchen/database'
import { getDatabase } from '@ubahnchen/database'
import { GtfsIterator } from '@ubahnchen/gtfs-helpers'

import { inserter } from '../inserts/index.js'
import type { Inserter } from '../inserts/type.js'

import { seedStopPairs } from './10-seed-stop-pairs/index.js'
import { seedStops } from './02-seed-stops.js'
import { seedRoutes } from './03-seed-routes.js'
import { seedCalendar } from './04-seed-calendar.js'
import { seedCalendarDates } from './05-seed-calendar-dates.js'
import { seedShapes } from './06-seed-shapes-fast.js'
import { seedTrips } from './07-seed-trips.js'
import { seedStopTimes } from './08-seed-stop-times.js'
import { updateTrips } from './09-update-trips.js'
import { makeIndexes } from './11-make-indexes.js'
// import { seedStopPairs } from './10-seed-stop-pairs.js'

export type SeedDatabaseOptions = {
  gtfsDirectory: string
  databasePath: string
}
export type DefaultOptions = SeedDatabaseOptions &
  DBSingleton & {
    gtfsIterator: GtfsIterator
    inserter: Inserter
  }

export const seedDatabase = async (
  options: SeedDatabaseOptions,
): Promise<DBSingleton> => {
  const database = getDatabase(options.databasePath)
  const defaultOptions: DefaultOptions = {
    ...options,
    ...database,
    gtfsIterator: new GtfsIterator(options.gtfsDirectory),
    inserter,
  }

  await seedStops(defaultOptions)
  await seedRoutes(defaultOptions)
  await seedCalendar(defaultOptions)
  await seedCalendarDates(defaultOptions)
  const hasShapes = await seedShapes(defaultOptions)
  await seedTrips({ ...defaultOptions, hasShapes })
  const { tripStartEnd } = await seedStopTimes(defaultOptions)
  await updateTrips({ ...defaultOptions, tripStartEnd })
  await seedStopPairs(defaultOptions)

  makeIndexes(defaultOptions)

  return database
}
