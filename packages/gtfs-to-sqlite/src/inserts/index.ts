/* eslint-disable unicorn/prefer-export-from */

import { preparedInserts } from './implementations/01-prepared-inserts'
import { workerInserts } from './implementations/02-insert-with-worker'
import { workerInsertsBulk } from './implementations/03-insert-with-worker-bulk'
import { preparedInsertsBulk } from './implementations/04-prepared-inserts-bulk'

export {
  preparedInserts,
  preparedInsertsBulk,
  workerInserts,
  workerInsertsBulk,
}

export const inserter = preparedInsertsBulk
