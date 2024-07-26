#!/usr/bin/env -S node --no-warnings --loader ts-node/esm --es-module-specifier-resolution=node

import * as process from 'node:process'

import { Command } from '@commander-js/extra-typings'

import type { City } from '@ubahnchen/cities'
import { cities, citiesList } from '@ubahnchen/cities'
import { downloadCity, gtfsToSqlite } from '@ubahnchen/gtfs-to-sqlite'

import { annotate } from '../annotate'
import { buildAllPathfinding } from '../build-pathfindings'
import { copyPublicAssets } from '../copy-assets'
import { filterLines } from '../filter-lines'
import { getCities } from '../get-cities'
import { mergeLines } from '../merge-lines'
import { splitPaths } from '../split-paths'
import { makeGeoJSON } from '../sqlite-to-geojson'
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
    for (const c of getCities(city))
      await downloadCity({ city: c, force: !!force })
  })

program
  .command('to-sqlite')
  .description('store the GTFS CSV data into a SQLite database')
  .option('-c, --city <city>', 'City name')
  .action(async ({ city }) => {
    for (const c of getCities(city)) await gtfsToSqlite({ city: c }, false)
  })

program
  .command('find-paths')
  .description('builds the pathfinding data for a city')
  .option('-c, --city <city>', 'City name')
  .option('-m, --map <map>', 'Map name')
  .action(async ({ city, map }) => {
    await buildAllPathfinding(getCities(city), map)
  })

program
  .command('all')
  .description('run all commands')
  .option('-c, --city <city>', 'City name')
  .action(async ({ city }) => {
    const cities = getCities(city)
    for (const c of cities) await downloadCity({ city: c })
    for (const c of cities) await gtfsToSqlite({ city: c }, false)
    await buildAllPathfinding(cities)
    await svgAll(cities)
  })

program
  .command('to-geojson')
  .description(
    'generate GeoJSON from GTFS data with straight lines (to visualize at https://geojson.io/)',
  )
  .option('-c, --city <city>', 'City name')
  .option('-m, --map <map>', 'Map name')
  .action(async ({ city, map }) => {
    for (const c of getCities(city))
      for (const m of map ? [map] : Object.keys(cities[c].maps))
        await makeGeoJSON(c, m)
  })

const svgCommands = program.command('svg').description('manage svg files')

svgCommands
  .command('split')
  .description("split svg paths so there are no 'jumps'")
  .option('-c, --city <city>', 'City name')
  .action(({ city }) => splitPaths(getCities(city)))

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
  .option('-m, --map <map>', 'Map name')
  .action(({ city, map }) => mergeLines(getCities(city), map))

svgCommands
  .command('copy')
  .description('copy the public assets (SVGs) to app/ubahnchen/public')
  .option('-c, --city <city>', 'City name')
  .action(({ city }) => copyPublicAssets(getCities(city)))

svgCommands
  .command('all')
  .description('run all svg commands')
  .option('-c, --city <city>', 'City name')
  .action(({ city }) => svgAll(getCities(city)))

const svgAll = async (c: City[]) => {
  await annotate(c)
  await splitPaths(c)
  await filterLines(c)
  await mergeLines(c)
  await copyPublicAssets(c)
}

program.parse()
