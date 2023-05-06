import BetterSqlite3 from 'better-sqlite3'

import { initializeFile } from '@ubahnchen/utils'

import { schema } from './schema'

type CreateWithSqlOptions = {
  filePath: string
}
export const createWithSql = async ({
  filePath,
}: CreateWithSqlOptions): Promise<{ database: BetterSqlite3.Database }> => {
  await initializeFile(filePath)
  const database = new BetterSqlite3(filePath)
  await database.exec(schema)
  return { database }
}
