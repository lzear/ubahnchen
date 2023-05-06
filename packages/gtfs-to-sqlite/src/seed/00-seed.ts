import type { DBSingleton } from '@ubahnchen/db'
import { getDatabase } from '@ubahnchen/db'
import { GtfsIterator } from '@ubahnchen/gtfs-helpers'

import { inserter } from '../inserts'
import type { Inserter } from '../inserts/type'

import { seedStops } from './02-seed-stops'
import { seedRoutes } from './03-seed-routes'
import { seedCalendar } from './04-seed-calendar'
import { seedCalendarDates } from './05-seed-calendar-dates'
import { seedShapes } from './06-seed-shapes-fast'
import { seedTrips } from './07-seed-trips'
import { seedStopTimes } from './08-seed-stop-times'
import { updateTrips } from './09-update-trips'
import { seedStopPairs } from './10-seed-stop-pairs'
import { makeIndexes } from './11-make-indexes'
// import { seedStopPairs } from './10-seed-stop-pairs'

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

  await makeIndexes(defaultOptions)

  return database
}
