import * as fs from 'node:fs'
import BetterSqlite3, { Database } from 'better-sqlite3'
import { DB_PATH } from '../data'
import path from 'node:path'
import { schema } from './schema'

export const makeDatabase = async (): Promise<Database> => {
  const d = path.dirname(DB_PATH)
  if (!fs.existsSync(d)) await fs.promises.mkdir(d, { recursive: true })
  try {
    await fs.promises.unlink(DB_PATH)
  } catch {
    // pass
  }
  const database: Database = new BetterSqlite3(
    DB_PATH,
    // { verbose: console.log }
  )

  await database.exec(schema)

  return database
}

/**
 *
 * CREATE INDEX idx_trip_id
 *   ON stop_times (trip_id);
 *
 * CREATE INDEX idx_arrival_time
 *   ON stop_times (arrival_time);
 *
 * CREATE INDEX idx_departure_time
 *   ON stop_times (departure_time);
 */
