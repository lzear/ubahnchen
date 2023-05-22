import { parentPort, workerData as _wd } from 'node:worker_threads'

import { getDatabase } from '@ubahnchen/database'
import { GtfsIterator } from '@ubahnchen/gtfs-helpers'

import { inserter } from '../../inserts'
import type { DefaultOptions } from '../00-seed'

import { seedStopPairsBasicInner } from './10-01-seed-stop-pairs-basic'
import type { WorkerData } from './10-02-messages'
import { End1, Log } from './10-02-messages'

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
