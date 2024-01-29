#!/usr/bin/env -S node --prof --no-warnings --loader ts-node/esm

import { paths } from '@ubahnchen/cities/node'
import { getDatabase } from '@ubahnchen/database'
import { GtfsIterator } from '@ubahnchen/gtfs-helpers'

import { preparedInsertsBulk } from '../../inserts'
import type { DefaultOptions } from '../00-seed'
import { makeIndexes } from '../11-make-indexes'

const city = 'berlin'

const p = paths(city)

const databasePath = p.SQLITE_BIG
const gtfsDirectory = p.GTFS_CSV_DIR
const database = getDatabase(p.SQLITE_BIG)

export const dropIndexes = async (database: DefaultOptions['database']) => {
  database.exec(`DROP INDEX IF EXISTS idx_trip_id;`)
  database.exec(`DROP INDEX IF EXISTS idx_arrival_time;`)
  database.exec(`DROP INDEX IF EXISTS idx_departure_time;`)
}

await dropIndexes(database.database)

await makeIndexes({
  ...database,
  databasePath,
  gtfsDirectory,
  gtfsIterator: new GtfsIterator(gtfsDirectory),
  inserter: preparedInsertsBulk,
})
