import extract from 'extract-zip'

import type { City } from '@ubahnchen/cities'
import { gtfsConfig, P } from '@ubahnchen/cities/node'
import { downloadOnceOra } from '@ubahnchen/node'

import { gtfsToSqlite } from './gtfs-to-sqlite'

type Options = {
  force?: boolean
  city: City
}

const useDrizzle = false

export const downloadCity = async ({ force, city }: Options) => {
  const p = P(city)
  const config = await gtfsConfig(city)
  await downloadOnceOra(city, config.gtfs.url, p.GTFS.ZIP, force, () =>
    extract(p.GTFS.ZIP, { dir: p.GTFS.CSV.DIR }),
  )
}

export const gtfsUrlToSqlite = async ({ force, city }: Options) => {
  await downloadCity({ force, city })
  await gtfsToSqlite({ city }, useDrizzle)
}
