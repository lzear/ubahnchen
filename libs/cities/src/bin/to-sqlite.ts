#!/usr/bin/env -S node --no-warnings --loader ts-node/esm --es-module-specifier-resolution=node

import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'

import { gtfsUrlToSqlite } from '@ubahnchen/gtfs-to-sqlite'

import { gtfsConfig } from '../configs'
import { isCity } from '../index'
import { paths } from '../paths'

const { city } = await yargs(hideBin(process.argv))
  .command(
    'ubahnchen-all',
    'Download a GTFS file from a URL and convert it to a SQLite DB',
  )
  .option('city', {
    alias: 'c',
    demandOption: false,
    type: 'string',
    description: 'City',
  })
  .parse()

if (!isCity(city)) throw new Error('no city?')

await gtfsUrlToSqlite({
  city,
  force: false,
})
