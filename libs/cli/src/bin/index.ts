#!/usr/bin/env -S node --no-warnings --loader ts-node/esm --es-module-specifier-resolution=node

import * as process from 'node:process'

import { Command } from '@commander-js/extra-typings'

import { cities, citiesList } from '@ubahnchen/cities'
import { downloadCity, gtfsToSqlite } from '@ubahnchen/gtfs-to-sqlite'

import { annotate } from '../annotate'
import { buildPaths } from '../build-paths'
import { copyPublicAssets } from '../copy-assets'
import { geojsonToSvg } from '../geojson-to-svg'
import { getCities } from '../get-cities'
import { mergeSvgs } from '../merge-svgs'
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

program
  .command('build-paths')
  .description('build paths for the SVGs')
  .option('-c, --city <city>', 'City name')
  .option('-m, --map <map>', 'Map name')
  .action(async ({ city, map }) => {
    console.log(`antoinelog 234`, 234)

    for (const c of getCities(city)) await buildPaths(c, map)
  })

const svgCommands = program.command('svg').description('manage svg files')

svgCommands
  .command('annotate')
  .description("add 'ubhn' data attributes to the SVGs")
  .option('-c, --city <city>', 'City name')
  .option('-m, --map <map>', 'Map name')
  .action(({ city, map }) => annotate(getCities(city), map))

svgCommands
  .command('copy')
  .description('copy the public assets (SVGs) to app/ubahnchen/public')
  .option('-c, --city <city>', 'City name')
  .action(({ city }) => copyPublicAssets(getCities(city)))

svgCommands
  .command('merge-stations-lines')
  .description('merge stations and lines SVGs into one')
  .option('-c, --city <city>', 'City name')
  .option('-m, --map <map>', 'Map name')
  .action(({ city, map }) => mergeSvgs(getCities(city), map))

svgCommands
  .command('geojson-to-svg')
  .description('convert a GeoJSON file to an SVG file')
  .option('-c, --city <city>', 'City name')
  .option('-m, --map <map>', 'Map name')
  .action(async ({ city, map }) => {
    for (const c of getCities(city))
      for (const m of map ? [map] : Object.keys(cities[c].maps))
        await geojsonToSvg(c, m)
  })

program.parse()
