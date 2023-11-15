import type BetterSqlite3 from 'better-sqlite3'
import { type BetterSQLite3Database } from 'drizzle-orm/better-sqlite3'

import type { City } from '@ubahnchen/cities'
import { paths } from '@ubahnchen/cities/node'
import { createWithDrizzle, createWithSql } from '@ubahnchen/database'

import { seedDatabase } from './seed/00-seed'
import { minify } from './seed/minify/index'

export type GtfsToSqliteOptions = {
  city: City
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

  const p = paths(options.city)
  // @ts-expect-error TS doesn't infer correctly
  const database: T extends true
    ? GtfsToSqliteDrizzleReturn
    : GtfsToSqliteReturn = await create({
    filePath: p.SQLITE_BIG,
  })

  await seedDatabase({
    databasePath: p.SQLITE_BIG,
    gtfsDirectory: p.GTFS_CSV_DIR,
  })

  await minify(p.SQLITE_BIG, p.SQLITE_SMALL)

  return database
}
