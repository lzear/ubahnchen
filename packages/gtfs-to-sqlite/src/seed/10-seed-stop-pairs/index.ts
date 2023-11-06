/* eslint-disable unicorn/prefer-export-from */

import { seedStopPairsBasic } from './10-01-seed-stop-pairs-basic.js'
import { seedStopPairsWithWorker } from './10-02-seed-stop-pairs-worker.js'

export { seedStopPairsBasic, seedStopPairsWithWorker }

export const seedStopPairs = seedStopPairsWithWorker
