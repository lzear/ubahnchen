import BetterSqlite3 from 'better-sqlite3'
import type { BetterSQLite3Database } from 'drizzle-orm/better-sqlite3'
import { drizzle } from 'drizzle-orm/better-sqlite3'

import { Singletons } from '@ubahnchen/utils'

export type DBSingleton = {
  database: BetterSqlite3.Database
  drizzled: BetterSQLite3Database
}

const databaseSingleton = new Singletons(
  (filePath: string, readonly: boolean): DBSingleton => {
    const newDatabase = new BetterSqlite3(filePath, {
      readonly,
      fileMustExist: true,
    })
    const drizzled = drizzle(newDatabase)
    return { database: newDatabase, drizzled }
  },
  (city, readonly) => JSON.stringify({ city, readonly }),
)

export const getDatabase: (
  filePath: string,
  readonly?: boolean,
) => DBSingleton = (filePath, readonly = false) =>
  databaseSingleton.run(filePath, readonly)
