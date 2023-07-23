#!/usr/bin/env -S node --no-warnings --loader ts-node/esm --es-module-specifier-resolution=node

import path from 'node:path'

import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'
import { z } from 'zod'

import { gtfsUrlToSqlite } from '@ubahnchen/gtfs-to-sqlite'
import { cityCsvPath, citySqlitePath, cityZipPath } from '@ubahnchen/paths'

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

if (!city) throw new Error('no city?')

export const City = z.object({ gtfs: z.object({ url: z.string() }) })

export type CityExports = z.infer<typeof City>

export const gtfsConfig: CityExports = City.parse(
  await import(path.resolve(`./src/${city}/gtfs.ts`)),
)

await gtfsUrlToSqlite({
  name: city,
  force: false,
  zipPath: cityZipPath(city),
  sqliteDatabasePath: citySqlitePath(city),
  useDrizzle: false,
  gtfsDirectoryPath: cityCsvPath(city),
  gtfsUrl: gtfsConfig.gtfs.url,
})
