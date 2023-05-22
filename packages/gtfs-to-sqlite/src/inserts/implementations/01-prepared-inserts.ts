import { getDatabase } from '@ubahnchen/database'

import type { InsertOptions } from '../type'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const preparedInserts = <R, T extends Record<string, any>>({
  databasePath,
  prepare,
  run,
}: InsertOptions<R, T>) => {
  const { database } = getDatabase(databasePath)
  const statement = database.prepare(prepare)
  const pusher = (row: T) => statement.run(row)
  return run(pusher)
}
