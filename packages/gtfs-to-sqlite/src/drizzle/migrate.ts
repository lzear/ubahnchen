import * as path from 'node:path'
import * as url from 'node:url'

import type * as BetterSqlite3 from 'better-sqlite3'
import { drizzle } from 'drizzle-orm/better-sqlite3'
import { migrate } from 'drizzle-orm/better-sqlite3/migrator'

export const drizzleMigrate = (database: BetterSqlite3.Database) => {
  const drizzleDatabase = drizzle(database)
  const migrationsFolder = path.resolve(
    path.dirname(url.fileURLToPath(import.meta.url)),
    '../../migrations-folder',
  )
  migrate(drizzleDatabase, { migrationsFolder })
}
