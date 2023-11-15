import * as path from 'node:path'
import * as url from 'node:url'

import type { City } from './index'
import { isCity } from './index'

export const projectRoot = path.join(
  path.dirname(url.fileURLToPath(import.meta.url)),
  '../../..',
)

export const getCurrentCity = () => {
  const currentCity = process.cwd().split('/').at(-1)
  if (!isCity(currentCity)) throw new Error('not a city?' + currentCity)
  return currentCity
}

// eslint-disable-next-line unicorn/prevent-abbreviations
export const cityDistPath = (city: string) =>
  path.join(projectRoot, 'cities', city, 'dist')

export const cityCsvPath = (city: string) =>
  path.join(cityDistPath(city), 'gtfs/csv')

const buildPaths = {
  GTFS_CSV_DIR: 'gtfs/csv',
  GTFS_ZIP: 'gtfs/zip/gtfs.zip',
  SQLITE_BIG: 'gtfs/gtfs.big.sqlite',
  SQLITE_SMALL: 'gtfs/gtfs.small.sqlite',
} as const

export type BuildArtifact = keyof typeof buildPaths

export const paths = (city: City) => {
  const buildDir = path.join(projectRoot, 'build', city)
  const r = {} as Record<BuildArtifact, string>
  for (const key of Object.keys(buildPaths) as BuildArtifact[])
    r[key] = path.join(buildDir, buildPaths[key])
  return r
}
