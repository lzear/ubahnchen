#!/usr/bin/env -S node --no-warnings --loader ts-node/esm --es-module-specifier-resolution=node

import * as fs from 'node:fs'
import path from 'node:path'
import url from 'node:url'

import { writeCode } from '../eslint-fix'

const srcPath = path.resolve(
  path.dirname(url.fileURLToPath(import.meta.url)),
  '..',
)

const makeCitiesList = async () => {
  const files = await fs.promises.readdir(path.resolve(srcPath, 'data'), {
    withFileTypes: true,
  })
  const cities = files.filter((f) => f.isDirectory()).map((f) => f.name)
  const code = `export const citiesList = ${JSON.stringify(cities)} as const`
  const target = path.resolve(srcPath, './generated/cities-list.ts')
  await writeCode(code, target)
  return cities
}

const makeCity = async (city: string) => {
  const files = await fs.promises.readdir(path.resolve(srcPath, 'data', city), {
    withFileTypes: true,
  })
  const maps = files.filter((f) => f.isDirectory()).map((f) => f.name)
  const importMaps = maps.map(
    (m) => `import { config as ${m} } from '../../../data/${city}/${m}.js'`,
  )
  const importGtfs = `import { gtfs } from '../../../data/${city}/gtfs.js'`
  const exportConfig = `export const config = {
    name: '${city}',
    gtfs,
    maps: { ${maps.join(',')} }
  }`
  const code = [...importMaps, importGtfs, exportConfig].join('\n')
  const target = path.resolve(srcPath, `./generated/cities/${city}/index.ts`)
  await writeCode(code, target)
  return maps
}

const makeIndex = async (
  cities: string[],
  _cityMaps: Record<string, string[]>,
) => {
  const citiesListImport = `import { citiesList } from './cities-list'`
  const citiesListExport = `export { citiesList }`
  const citiesImport = cities.map(
    (city) => `import { config as ${city} } from './cities/${city}'`,
  )
  const citiesExport = `export const cities = { ${cities.join(',')} }`

  // const DATA_PATH_HACK = `../../../../../../libs/cities/src/data`
  // const citiesMapImport = cities.map((city) => {
  //   const imp = cityMaps[city].map(
  //     (map) =>
  //       `${map}: () => import('${DATA_PATH_HACK}/${city}/${map}/source.svg')`,
  //   )
  //   return `${city}: { ${imp.join(',')}  }`
  // })
  // const mapsImportsCode = `export const nextAppMapImports = { ${citiesMapImport.join(
  //   ',',
  // )} }`

  await writeCode(
    [
      citiesListImport,
      citiesListExport,
      citiesImport,
      citiesExport,
      // mapsImportsCode,
    ].join('\n'),
    path.resolve(srcPath, `./generated/index.ts`),
  )
}

const main = async () => {
  const cities = await makeCitiesList()
  const cityMaps: Record<string, string[]> = {}
  for (const city of cities) cityMaps[city] = await makeCity(city)
  await makeIndex(cities, cityMaps)
}

await main()
