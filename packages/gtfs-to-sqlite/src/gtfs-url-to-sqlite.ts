import extract from 'extract-zip'

import { downloadOnceOra, Temporary } from '@ubahnchen/node-utils'

import { gtfsToSqlite } from './gtfs-to-sqlite'

type Options = {
  force?: boolean
  gtfsDirectoryPath: string
  gtfsUrl: string
  name: string
  sqliteDatabasePath: string
  useDrizzle?: boolean
  zipPath?: string
}

export const gtfsUrlToSqlite = async ({
  force,
  gtfsDirectoryPath,
  gtfsUrl,
  name,
  sqliteDatabasePath,
  useDrizzle,
  zipPath,
}: Options) => {
  const zipFile = zipPath || `${new Temporary().directory()}/${name}.zip`

  await downloadOnceOra(name, gtfsUrl, zipFile, force, () =>
    extract(zipFile, { dir: gtfsDirectoryPath }),
  )

  await gtfsToSqlite({ gtfsDirectoryPath, sqliteDatabasePath }, !!useDrizzle)
}
