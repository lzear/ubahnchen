import { getDatabase } from '@ubahnchen/database'

import type { InsertOptions } from '../type.js'

const CHUNK_SIZE = 2000

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const preparedInsertsBulk = async <R, T extends Record<string, any>>({
  databasePath,
  prepare,
  run,
}: InsertOptions<R, T>) => {
  const { database } = getDatabase(databasePath)
  const statement = database.prepare(prepare)

  const insertMany = database.transaction((records) => {
    for (const r of records) statement.run(r)
  })

  let chunk: T[] = []

  const pusher = (row: T) => {
    chunk.push(row)
    if (chunk.length === CHUNK_SIZE) {
      insertMany(chunk)
      chunk = []
    }
  }
  const r = await run(pusher)

  if (chunk.length > 0) insertMany(chunk)

  return r
}
