#!/usr/bin/env -S node --no-warnings --loader ts-node/esm --es-module-specifier-resolution=node

import * as process from 'node:process'

import { Command } from '@commander-js/extra-typings'

import { citiesList } from '@ubahnchen/cities'
import { downloadCity, gtfsToSqlite } from '@ubahnchen/gtfs-to-sqlite'

import { annotate } from '../annotate'
import { buildAllPathfinding } from '../build-pathfindings'
import { copyPublicAssets } from '../copy-assets'
import { filterLines } from '../filter-lines'
import { getCities } from '../get-cities'
import { mergeLines } from '../merge-lines'
import { getStatus } from '../status'

const pckg = await import('../../package.json', { assert: { type: 'json' } })

const program = new Command('ubhn')

program
  .name('ubhn')
  .description('Internal CLI for the ubahnchen project')
  .version(pckg.version)

program
  .command('cities')
  .description('list all cities')
  .action(() => console.log(citiesList.join('\t')))

program
  .command('status')
  .description('show the status of the ubahnchen assets')
  .option('-c, --city <city>', 'City name')
  .action(async ({ city }) => {
    const code = await getStatus(city)
    return process.exit(code)
  })

program
  .command('download')
  .description(
    'download and extract the GTFS data for a city. Skipping if the files are already up to date',
  )
  .option('-c, --city <city>', 'City name')
  .option('-f, --force', 'Rewrite existing file')
  .action(async ({ city, force }) => {
    const cities = getCities(city)
    for (const c of cities) await downloadCity({ city: c, force: !!force })
  })

program
  .command('to-sqlite')
  .description('store the GTFS CSV data into a SQLite database')
  .option('-c, --city <city>', 'City name')
  .action(async ({ city }) => {
    const cities = getCities(city)
    for (const c of cities) await gtfsToSqlite({ city: c }, false)
  })

program
  .command('find-paths')
  .description('builds the pathfinding data for a city')
  .option('-c, --city <city>', 'City name')
  .option('-m, --map <map>', 'Map name')
  .action(async ({ city, map }) => {
    await buildAllPathfinding(getCities(city), map)
  })

const svgCommands = program.command('svg').description('manage svg files')

svgCommands
  .command('annotate')
  .description("add 'ubhn' data attributes to the SVGs")
  .option('-c, --city <city>', 'City name')
  .action(({ city }) => annotate(getCities(city)))

svgCommands
  .command('filter-lines')
  .description('filter the SVGs to keep only the lines')
  .option('-c, --city <city>', 'City name')
  .action(({ city }) => filterLines(getCities(city)))

svgCommands
  .command('merge-lines')
  .description('merge the SVG lines by color')
  .option('-c, --city <city>', 'City name')
  .action(({ city }) => mergeLines(getCities(city)))

svgCommands
  .command('copy')
  .description('copy the public assets (SVGs) to app/ubahnchen/public')
  .option('-c, --city <city>', 'City name')
  .action(({ city }) => copyPublicAssets(getCities(city)))

program.parse()
