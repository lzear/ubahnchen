/* eslint-disable unicorn/prefer-node-protocol */
import path from 'path'
import * as BetterSqlite3 from 'better-sqlite3'
import Database from 'better-sqlite3'
import { Singleton } from '../../lib/singleton'

const _getDatabase: () => Promise<BetterSqlite3.Database> = async () => {
  const dbp = path.resolve(process.cwd(), 'gtfs/db/ubahnchen.db')
  return new Database(dbp, {
    readonly: true,
    fileMustExist: true,
  })
}

const databaseSingleton = new Singleton(_getDatabase)

export const getDatabase = (): Promise<BetterSqlite3.Database> =>
  databaseSingleton.exec()
