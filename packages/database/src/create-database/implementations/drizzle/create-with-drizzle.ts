import * as path from 'node:path'
import * as url from 'node:url'

import BetterSqlite3 from 'better-sqlite3'
import { drizzle } from 'drizzle-orm/better-sqlite3'
import { type BetterSQLite3Database } from 'drizzle-orm/better-sqlite3'
import { migrate } from 'drizzle-orm/better-sqlite3/migrator'

import { initializeFile } from '@ubahnchen/node-utils'

type CreateWithSqlOptions = {
  filePath: string
}

export const createWithDrizzle = async ({
  filePath,
}: CreateWithSqlOptions): Promise<{
  database: BetterSqlite3.Database
  drizzleDatabase: BetterSQLite3Database
}> => {
  await initializeFile(filePath)
  const database = new BetterSqlite3(filePath)
  const drizzleDatabase = drizzle(database)
  const migrationsFolder = path.resolve(
    path.dirname(url.fileURLToPath(import.meta.url)),
    '../../../../migrations-folder',
  )
  migrate(drizzleDatabase, { migrationsFolder })
  return { database, drizzleDatabase }
}
