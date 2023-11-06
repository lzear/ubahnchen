import BetterSqlite3 from 'better-sqlite3'

import { initializeFile } from '@ubahnchen/node-utils'

import { schema } from './schema.js'

type CreateWithSqlOptions = {
  filePath: string
}
export const createWithSql = async ({
  filePath,
}: CreateWithSqlOptions): Promise<{ database: BetterSqlite3.Database }> => {
  await initializeFile(filePath)
  const database = new BetterSqlite3(filePath)
  database.exec(schema)
  return { database }
}
