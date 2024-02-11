#!/usr/bin/env -S node --prof --no-warnings --loader ts-node/esm

import { P } from '@ubahnchen/cities/node'
import { drizzleTables, getDatabase } from '@ubahnchen/database'
import { GtfsIterator } from '@ubahnchen/gtfs'

import { preparedInsertsBulk } from '../../inserts'
import { seedStopPairs } from '../10-seed-stop-pairs'

const city = 'berlin'

const p = P(city)

const databasePath = p.SQLITE.BIG
const gtfsDirectory = p.GTFS.CSV.DIR
const database = getDatabase(databasePath)

const { stopPairs } = drizzleTables

await database.drizzled.delete(stopPairs)

await seedStopPairs({
  ...database,
  databasePath,
  gtfsDirectory,
  gtfsIterator: new GtfsIterator(gtfsDirectory),
  inserter: preparedInsertsBulk,
})
