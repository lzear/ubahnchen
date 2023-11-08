#!/usr/bin/env -S node --no-warnings --loader ts-node/esm --es-module-specifier-resolution=node

import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'

import { gtfsUrlToSqlite } from '@ubahnchen/gtfs-to-sqlite'

import { gtfsConfig } from '../configs.js'
import { isCity } from '../index.js'
import { paths } from '../paths.js'

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

const p = paths(city)

const config = await gtfsConfig(city)

await gtfsUrlToSqlite({
  city,
  force: false,
  zipPath: p.GTFS_ZIP,
  useDrizzle: false,
  gtfsUrl: config.gtfs.url,
})
