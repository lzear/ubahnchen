import type BetterSqlite3 from 'better-sqlite3'
import { type BetterSQLite3Database } from 'drizzle-orm/better-sqlite3'

import { createWithDrizzle } from '@ubahnchen/db'

import { seedDatabase } from './seed/00-seed'
import type { GtfsToSqliteOptions } from './gtfs-to-sqlite'

export type GtfsToSqliteDrizzleReturn = {
  database: BetterSqlite3.Database
  drizzleDatabase: BetterSQLite3Database
}

export const gtfsToSqliteDrizzle = async (
  options: GtfsToSqliteOptions,
): Promise<GtfsToSqliteDrizzleReturn> => {
  const database = await createWithDrizzle({
    filePath: options.sqliteDatabasePath,
  })

  await seedDatabase({
    databasePath: options.sqliteDatabasePath,
    gtfsDirectory: options.gtfsDirectoryPath,
  })

  return database
}
