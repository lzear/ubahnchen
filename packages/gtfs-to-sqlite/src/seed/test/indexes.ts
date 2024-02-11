#!/usr/bin/env -S node --prof --no-warnings --loader ts-node/esm

import { P } from '@ubahnchen/cities/node'
import { getDatabase } from '@ubahnchen/database'
import { GtfsIterator } from '@ubahnchen/gtfs'

import { preparedInsertsBulk } from '../../inserts'
import type { DefaultOptions } from '../00-seed'
import { makeIndexes } from '../11-make-indexes'

const city = 'berlin'

const p = P(city)

const databasePath = p.SQLITE.BIG
const gtfsDirectory = p.GTFS.CSV.DIR
const database = getDatabase(p.SQLITE.BIG)

export const dropIndexes = (database: DefaultOptions['database']) => {
  database.exec(`DROP INDEX IF EXISTS idx_trip_id;`)
  database.exec(`DROP INDEX IF EXISTS idx_arrival_time;`)
  database.exec(`DROP INDEX IF EXISTS idx_departure_time;`)
}

dropIndexes(database.database)

await makeIndexes({
  ...database,
  databasePath,
  gtfsDirectory,
  gtfsIterator: new GtfsIterator(gtfsDirectory),
  inserter: preparedInsertsBulk,
})
