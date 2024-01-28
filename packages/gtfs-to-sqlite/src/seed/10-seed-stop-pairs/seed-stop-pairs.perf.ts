#!/usr/bin/env -S node --no-warnings --loader ts-node/esm --es-module-specifier-resolution=node

import { drizzleTables, getDatabase } from '@ubahnchen/database'
import { GtfsIterator } from '@ubahnchen/gtfs-helpers'

import { preparedInsertsBulk } from '../../inserts'

import { seedStopPairs } from './index'
import {paths} from "@ubahnchen/cities/node";

const city = 'berlin'

const p = paths(city)

const databasePath = p.SQLITE_BIG
const gtfsDirectory = p.GTFS_CSV_DIR
const database = getDatabase(p.SQLITE_BIG)

const { stopPairs } = drizzleTables

await database.drizzled.delete(stopPairs)

await seedStopPairs({
  ...database,
  databasePath,
  gtfsDirectory,
  gtfsIterator: new GtfsIterator(gtfsDirectory),
  inserter: preparedInsertsBulk,
})
