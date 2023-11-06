/* eslint-disable unicorn/prefer-export-from */

import { preparedInserts } from './implementations/01-prepared-inserts.js'
import { workerInserts } from './implementations/02-insert-with-worker.js'
import { workerInsertsBulk } from './implementations/03-insert-with-worker-bulk.js'
import { preparedInsertsBulk } from './implementations/04-prepared-inserts-bulk.js'

export {
  preparedInserts,
  preparedInsertsBulk,
  workerInserts,
  workerInsertsBulk,
}

export const inserter = preparedInsertsBulk
