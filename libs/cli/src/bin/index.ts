#!/usr/bin/env -S node --no-warnings --loader ts-node/esm --es-module-specifier-resolution=node

import * as process from 'node:process'

import { Command } from '@commander-js/extra-typings'

import { citiesList, isCity } from '@ubahnchen/cities'
import { cityStats, logCityStats } from '@ubahnchen/cities/node'
import { downloadCity, gtfsToSqlite } from '@ubahnchen/gtfs-to-sqlite'

import { annotate } from '../annotate'
import { copyPublicAssets } from '../copy-assets'

const pckg = await import('../../package.json', { assert: { type: 'json' } })

const program = new Command()

const getCities = (city: string | undefined) => {
  if (!city) return [...citiesList]
  if (isCity(city)) return [city]
  throw new Error(`City ${city} is not supported`)
}

program
  .name('ubahnchen')
  .description('Internal CLI for the ubahnchen project')
  .version(pckg.version)

program
  .command('cities')
  .description('list all cities')
  .action(() => console.log(citiesList.join('\t')))

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
  .command('status')
  .description('show the status of the ubahnchen assets')
  .option('-c, --city <city>', 'City name')
  .action(async ({ city }) => {
    const cities = getCities(city)
    const stats = await Promise.all(cities.map((city) => cityStats(city)))
    for (const stat of stats) {
      console.log()
      logCityStats(stat)
    }
    console.log()

    const notOkay = stats
      .filter((stat) => !stat.isOkay)
      .map((stat) => ({
        city: stat.city,
        notOkay: (['zip', 'csv', 'db', 'maps'] as const).filter(
          (k) => !stat[k].isOkay,
        ),
      }))
    if (notOkay.length > 0) {
      console.error('❌ Some cities are not ready')
      console.table(notOkay)
      return process.exit(1)
    }
    console.log('✅ All cities are okay')
    return process.exit(0)
  })

program
  .command('annotate-svg')
  .description("add 'ubhn' data attributes to the SVGs")
  .option('-c, --city <city>', 'City name')
  .action(({ city }) => annotate(getCities(city)))

program
  .command('public-assets')
  .description('copy the public assets (SVGs) to app/ubahnchen/public')
  .option('-c, --city <city>', 'City name')
  .action(({ city }) => copyPublicAssets(getCities(city)))

program.parse()
