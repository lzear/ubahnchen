import extract from 'extract-zip'

import type { City } from '@ubahnchen/cities'
import { gtfsConfig, paths } from '@ubahnchen/cities/node'
import { downloadOnceOra } from '@ubahnchen/node'

import { gtfsToSqlite } from './gtfs-to-sqlite'

type Options = {
  force?: boolean
  city: City
}

const useDrizzle = false

export const downloadCity = async ({ force, city }: Options) => {
  const p = paths(city)
  const config = await gtfsConfig(city)
  await downloadOnceOra(city, config.gtfs.url, p.GTFS_ZIP, force, () =>
    extract(p.GTFS_ZIP, { dir: p.GTFS_CSV_DIR }),
  )
}

export const gtfsUrlToSqlite = async ({ force, city }: Options) => {
  await downloadCity({ force, city })
  await gtfsToSqlite({ city }, useDrizzle)
}
