import type BetterSqlite3 from 'better-sqlite3'

import { createWithSql } from '@ubahnchen/database'

import { seedDatabase } from './seed/00-seed'

export type GtfsToSqliteOptions = {
  gtfsDirectoryPath: string
  sqliteDatabasePath: string
}

export type GtfsToSqliteReturn = { database: BetterSqlite3.Database }

export const gtfsToSqlite = async (
  options: GtfsToSqliteOptions,
): Promise<GtfsToSqliteReturn> => {
  const database = await createWithSql({
    filePath: options.sqliteDatabasePath,
  })

  await seedDatabase({
    databasePath: options.sqliteDatabasePath,
    gtfsDirectory: options.gtfsDirectoryPath,
  })

  return database
}
