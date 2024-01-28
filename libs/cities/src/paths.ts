import fs from 'node:fs'
import * as path from 'node:path'
import * as url from 'node:url'

import type { City } from './index'

const projectRoot = path.join(
  path.dirname(url.fileURLToPath(import.meta.url)),
  '../../..',
)

const buildPaths = {
  GTFS_CSV_DIR: 'gtfs/csv',
  GTFS_ZIP: 'gtfs/zip/gtfs.zip',
  SQLITE_BIG: 'gtfs/gtfs.big.sqlite',
  SQLITE_SMALL: 'gtfs/gtfs.small.sqlite',
  MAPS_DATA: 'maps',
} as const

type BuildArtifact = keyof typeof buildPaths

export const mapDataDir = (city: City, map: string) =>
  path.join(projectRoot, 'libs/cities/src/data', city, map)

export const svgs = {
  INITIAL_00: '00-initial.svg',
  ANNOTED_10: '10-annoted.svg',
  MINIMAL_20: '20-minimal.svg',
}

export const svgArray = Object.keys(svgs) as (keyof typeof svgs)[]

export type Svgs = keyof typeof svgs

export const svgFiles = (city: City, map: string) => {
  const dir = mapDataDir(city, map)
  const r = {} as Record<keyof typeof svgs, string>
  for (const key of Object.keys(svgs) as (keyof typeof svgs)[])
    r[key] = path.join(dir, svgs[key])
  return r
}

export const svgFilesDone = (city: City, map: string) => {
  const files = svgFiles(city, map)
  const r = {} as Record<Svgs, boolean>
  for (const key of Object.keys(svgs) as Svgs[])
    r[key] = fs.existsSync(files[key])
  return r
}

export const buildDir = (city: City) => path.join(projectRoot, 'build', city)

export const paths = (city: City) => {
  const dir = buildDir(city)
  const r = {} as Record<BuildArtifact, string>
  for (const key of Object.keys(buildPaths) as BuildArtifact[])
    r[key] = path.join(dir, buildPaths[key])
  return r
}
