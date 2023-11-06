import path from 'node:path'
import url from 'node:url'
import { Worker } from 'node:worker_threads'

import type { Ora } from 'ora'
import { oraPromise } from 'ora'

// eslint-disable-next-line import/no-extraneous-dependencies
import { defaultTextPerf, successText } from '@ubahnchen/csv-helpers'
import { drizzleTables } from '@ubahnchen/database'
import { isNever, Perf } from '@ubahnchen/utils'

import type { DefaultOptions } from '../00-seed.js'

import type { MessagesTypes, WorkerData } from './10-02-messages.js'
import { Messages } from './10-02-messages.js'

const endWorker = (worker: Worker, perf: Perf, spinner: Ora) =>
  new Promise<void>((resolve, reject) => {
    worker.on('message', (data: MessagesTypes) => {
      switch (data.type) {
        case Messages.LOG: {
          // perf.log(data.message)

          perf.tick(1)
          const t = defaultTextPerf({
            ora: { text: 'stop_pairs'.padEnd(14) },
            perf,
          })
          spinner.text = t

          break
        }
        case Messages.END1: {
          resolve()
          break
        }
        default: {
          isNever(data)
          reject(data)
        }
      }
    })
  })

export const seedStopPairsWithWorker = async (options: DefaultOptions) => {
  const d = path.dirname(url.fileURLToPath(import.meta.url))
  const workerData: WorkerData = {
    databasePath: options.databasePath,
    gtfsDirectory: options.gtfsDirectory,
  }

  const { routes } = drizzleTables
  const perf = new Perf({
    totalCount: options.drizzled.select().from(routes).all().length,
    sampleDurationMs: 100,
  })
  const worker = new Worker(`${d}/10-02-worker.ts`, { workerData })

  return oraPromise(async (ora) => endWorker(worker, perf, ora), {
    text: 'stop_pairs'.padEnd(14),
    successText: () =>
      successText({ perf, ora: { text: 'stop_pairs'.padEnd(14), sample: 1 } }),
  })
}
