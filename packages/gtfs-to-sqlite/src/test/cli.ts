#!/usr/bin/env node --loader ts-node/esm --es-module-specifier-resolution=node --no-warnings

import path from 'node:path'
import url from 'node:url'

import { gtfsToSqlite } from '../gtfs-to-sqlite.js'

await gtfsToSqlite(
  {
    gtfsDirectoryPath: path.resolve(
      url.fileURLToPath(import.meta.url),
      '../../../../../tests/gtfs/berlin-su',
      // '../../../../../tests/gtfs/berlin-u-smaller',
    ),
    sqliteDatabasePath: 'tmptmp.sqlite',
  },
  false,
)
