#!/usr/bin/env -S node --prof --no-warnings --loader ts-node/esm

import { paths } from '@ubahnchen/cities/node'
import { drizzleTables, getDatabase } from '@ubahnchen/database'
import { GtfsIterator } from '@ubahnchen/gtfs-helpers'

import { preparedInsertsBulk } from '../../inserts'
import { seedStopTimes } from '../08-seed-stop-times/08-01-seed-stop-times'

const city = 'berlin'

const p = paths(city)

const databasePath = p.SQLITE_BIG
const gtfsDirectory = p.GTFS_CSV_DIR
const database = getDatabase(p.SQLITE_BIG)

const { stopTimes } = drizzleTables

await database.drizzled.delete(stopTimes)

await seedStopTimes({
  ...database,
  databasePath,
  gtfsDirectory,
  gtfsIterator: new GtfsIterator(gtfsDirectory),
  inserter: preparedInsertsBulk,
})
