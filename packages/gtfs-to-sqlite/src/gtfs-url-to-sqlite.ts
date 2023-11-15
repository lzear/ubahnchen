import extract from 'extract-zip'

import type { City } from '@ubahnchen/cities'
import { paths } from '@ubahnchen/cities/node'
import { downloadOnceOra, Temporary } from '@ubahnchen/node'

import { gtfsToSqlite } from './gtfs-to-sqlite'

type Options = {
  force?: boolean
  gtfsUrl: string
  useDrizzle?: boolean
  zipPath?: string
  city: City
}

export const gtfsUrlToSqlite = async ({
  force,
  gtfsUrl,
  useDrizzle,
  zipPath,
  city,
}: Options) => {
  const zipFile = zipPath || `${new Temporary().directory()}/${city}.zip`

  const p = paths(city)
  await downloadOnceOra(city, gtfsUrl, zipFile, force, () =>
    extract(zipFile, { dir: p.GTFS_CSV_DIR }),
  )

  await gtfsToSqlite({ city }, !!useDrizzle)
}
