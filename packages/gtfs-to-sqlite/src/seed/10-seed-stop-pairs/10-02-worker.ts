import { parentPort, workerData as _wd } from 'node:worker_threads'

import { getDatabase } from '@ubahnchen/database'
import { GtfsIterator } from '@ubahnchen/gtfs-helpers'

import { inserter } from '../../inserts.js'
import type { DefaultOptions } from '../00-seed.js'

import { seedStopPairsBasicInner } from './10-01-seed-stop-pairs-basic.js'
import type { WorkerData } from './10-02-messages.js'
import { End1, Log } from './10-02-messages.js'

const workerData = _wd as WorkerData

if (!workerData) throw new Error('No workerData')
if (!parentPort) throw new Error('No parentPort')

const database = getDatabase(workerData.databasePath)

const defaultOptions: DefaultOptions = {
  ...workerData,
  ...database,
  gtfsIterator: new GtfsIterator(workerData.gtfsDirectory),
  inserter,
}

seedStopPairsBasicInner(
  defaultOptions,
  (message) => parentPort?.postMessage(Log(message)),
  () => null,
)

parentPort.postMessage(End1())
