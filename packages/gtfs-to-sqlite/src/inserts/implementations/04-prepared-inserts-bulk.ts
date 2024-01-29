import { getDatabase } from '@ubahnchen/database'
import { chunkify } from '@ubahnchen/utils'

import type { InsertOptions } from '../type'

const CHUNK_SIZE = 5000

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const preparedInsertsBulk = async <R, T extends Record<string, any>>({
  databasePath,
  prepare,
  run,
  chunkSize = CHUNK_SIZE,
}: InsertOptions<R, T>) => {
  const { database } = getDatabase(databasePath)
  const statement = database.prepare(prepare)
  const insertMany = database.transaction((records: T[]) => {
    for (const r of records) statement.run(r)
  })
  return chunkify(insertMany, run, chunkSize)
}
