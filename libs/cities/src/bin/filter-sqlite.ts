#!/usr/bin/env -S node --no-warnings --loader ts-node/esm --es-module-specifier-resolution=node

import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'

import { filterGtfsSqlite } from '@ubahnchen/gtfs-to-sqlite'
import { citySqliteFilteredPath, citySqlitePath } from '@ubahnchen/paths'

const { city } = await yargs(hideBin(process.argv))
  .command(
    'filter-sqlite',
    'Filter a SQLite DB to only include the data needed for the app',
  )
  .option('city', {
    alias: 'c',
    demandOption: false,
    type: 'string',
    description: 'City',
  })
  .parse()

if (!city) throw new Error('no city?')

await filterGtfsSqlite({
  sourceDatabasePath: citySqlitePath(city),
  targetDatabasePath: citySqliteFilteredPath(city),
})
