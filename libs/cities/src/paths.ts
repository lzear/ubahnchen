import fs from 'node:fs'
import path from 'node:path'
import * as url from 'node:url'

import _ from 'lodash'

import type { City } from './index'

const buildPaths = {
  GTFS_CSV_DIR: 'gtfs/csv',
  GTFS_ZIP: 'gtfs/zip/gtfs.zip',
  SQLITE_BIG: 'gtfs/gtfs.big.sqlite',
  SQLITE_SMALL: 'gtfs/gtfs.small.sqlite',
  MAPS_DATA: 'maps',
} as const

const currentDir = path.dirname(url.fileURLToPath(import.meta.url))

const PROJECT_ROOT = path.join(currentDir, '../../..')

const SRC_DATA_DIR = path.join(PROJECT_ROOT, 'libs/cities/src/data')

const SVG = {
  STEP_00_ORIGINAL: 'STEP_00_ORIGINAL',
  STEP_01_FIGMAED: 'STEP_01_FIGMAED',
  STEP_02_SVGOMGED: 'STEP_02_SVGOMGED',
  STEP_10_ANNOTATED: 'STEP_10_ANNOTATED',
  STEP_20_LINES_ONLY: 'STEP_20_LINES_ONLY',
  STEP_21_LINES_MERGED: 'STEP_21_LINES_MERGED',
} as const

export const svgs = {
  [SVG.STEP_00_ORIGINAL]: '00-original.svg',
  [SVG.STEP_01_FIGMAED]: '01-simplified-via-figma.svg',
  [SVG.STEP_02_SVGOMGED]: '02-simplified-via-svgomg.svg',
  [SVG.STEP_10_ANNOTATED]: '10-annotated.svg',
  [SVG.STEP_20_LINES_ONLY]: '20-lines-only.svg',
  [SVG.STEP_21_LINES_MERGED]: '21-lines-merged.svg',
} as const

export const svgsPublic = _.pick(svgs, [
  SVG.STEP_10_ANNOTATED,
  SVG.STEP_21_LINES_MERGED,
])

const R = {
  PROJECT_ROOT,
  BUILD_DIR: path.join(PROJECT_ROOT, 'build'),
  PUBLIC_DIR: path.join(PROJECT_ROOT, 'apps/ubahnchen/public'),
  SRC_DATA_DIR: path.join(PROJECT_ROOT, 'libs/cities/src/data'),
}

const cityPaths = <C extends City>(city: C) => ({
  GTFS: {
    CSV: {
      DIR: path.join(R.BUILD_DIR, city, buildPaths.GTFS_CSV_DIR),
    },
    ZIP: path.join(R.BUILD_DIR, city, buildPaths.GTFS_ZIP),
  },
  PUBLIC: {
    DIR: path.join(R.PUBLIC_DIR, city),
  },
  SQLITE: {
    BIG: path.join(R.BUILD_DIR, city, buildPaths.SQLITE_BIG),
    SMALL: path.join(R.BUILD_DIR, city, buildPaths.SQLITE_SMALL),
  },
  BUILD: {
    DIR: path.join(R.BUILD_DIR, city),
  },
  SRC_DATA: {
    DIR: path.join(SRC_DATA_DIR, city),
  },
})

const mapPaths = <C extends City>(city: C, map: string) => {
  const CITY_P = P(city)
  const SRC_SVG_DIR = path.join(CITY_P.SRC_DATA.DIR, map, 'svg')
  const SRC_SVG = {} as Record<Svgs, string>
  const PUBLIC_SVG_DIR = path.join(CITY_P.PUBLIC.DIR, map, 'svg')
  const PUBLIC_SVG = {} as Record<Svgs, string>
  for (const key of Object.keys(svgs) as SvgsPublic[]) {
    SRC_SVG[key] = path.join(SRC_SVG_DIR, svgs[key])
    PUBLIC_SVG[key] = path.join(CITY_P.PUBLIC.DIR, map, 'svg', svgs[key])
  }
  return {
    BUILD: {
      DIR: path.join(CITY_P.BUILD.DIR, 'maps', map),
    },
    PUBLIC: {
      SVG: {
        DIR: path.join(PUBLIC_SVG_DIR),
        ...PUBLIC_SVG,
      },
    },
    SRC: {
      SVG: {
        DIR: SRC_SVG_DIR,
        ...SRC_SVG,
      },
    },
  }
}

function pathsFunction(): typeof R
function pathsFunction(city: City): ReturnType<typeof cityPaths>
function pathsFunction(city: City, map: string): ReturnType<typeof mapPaths>
function pathsFunction(city?: City, map?: string) {
  if (!city) return R
  if (!map) return cityPaths(city)
  return mapPaths(city, map)
}

export const P = pathsFunction as typeof pathsFunction & typeof R
Object.assign(P, R)

export const svgArray = Object.keys(svgs) as (keyof typeof svgs)[]
export const svgPublicArray = Object.keys(
  svgsPublic,
) as (keyof typeof svgsPublic)[]

export type Svgs = keyof typeof svgs
export type SvgsPublic = keyof typeof svgsPublic

export const svgFilesDone = (city: City, map: string) => {
  const files = P(city, map).SRC.SVG
  const r = {} as Record<Svgs, boolean>
  for (const key of Object.keys(svgs) as Svgs[])
    r[key] = fs.existsSync(files[key])
  return r
}
