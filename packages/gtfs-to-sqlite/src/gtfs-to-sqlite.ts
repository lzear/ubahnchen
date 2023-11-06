import type BetterSqlite3 from 'better-sqlite3'
import { type BetterSQLite3Database } from 'drizzle-orm/better-sqlite3'

import { createWithDrizzle, createWithSql } from '@ubahnchen/database'

import { seedDatabase } from './seed/00-seed.js'

export type GtfsToSqliteOptions = {
  gtfsDirectoryPath: string
  sqliteDatabasePath: string
}

export type GtfsToSqliteReturn = { database: BetterSqlite3.Database }

export type GtfsToSqliteDrizzleReturn = {
  database: BetterSqlite3.Database
  drizzleDatabase: BetterSQLite3Database
}

export const gtfsToSqlite = async <T extends boolean>(
  options: GtfsToSqliteOptions,
  useDrizzle: T,
) => {
  const create = useDrizzle ? createWithDrizzle : createWithSql

  // @ts-expect-error TS doesn't infer correctly
  const database: T extends true
    ? GtfsToSqliteDrizzleReturn
    : GtfsToSqliteReturn = await create({
    filePath: options.sqliteDatabasePath,
  })

  await seedDatabase({
    databasePath: options.sqliteDatabasePath,
    gtfsDirectory: options.gtfsDirectoryPath,
  })

  return database
}
