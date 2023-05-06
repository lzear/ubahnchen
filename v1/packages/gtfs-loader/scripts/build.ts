#!/usr/bin/env node

import { downloadGtfs } from '../src/scripts/download-gtfs'
import { filterGtfs } from '../src/scripts/filter-gtfs'
import { gtfsToSqlite } from '../src/scripts/gtfs-to-sqlite'

await downloadGtfs()
await filterGtfs()
await gtfsToSqlite()

process.exit(0)
