/* eslint-disable unicorn/prefer-export-from */

import { seedStopPairsBasic } from './10-01-seed-stop-pairs-basic'
import { seedStopPairsWithWorker } from './10-02-seed-stop-pairs-worker'

export { seedStopPairsBasic, seedStopPairsWithWorker }

export const seedStopPairs = seedStopPairsWithWorker
