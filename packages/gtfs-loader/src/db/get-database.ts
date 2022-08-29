import SQLite, { Database } from 'better-sqlite3'
import { DB_PATH } from '../data'

let database: Database

export const getDatabase = (readonly = false): Database => {
  if (!database)
    database = new SQLite(DB_PATH, {
      readonly,
      fileMustExist: true,
    })
  return database
}
