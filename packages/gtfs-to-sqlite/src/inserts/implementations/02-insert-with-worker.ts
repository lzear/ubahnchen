import path from 'node:path'
import url from 'node:url'
import { Worker } from 'node:worker_threads'

import type { InsertOptions } from '../type.js'

import type { End2Action, WorkerData } from './02-worker-types.js'
import { End1, Insert, Messages } from './02-worker-types.js'

const endWorker = (worker: Worker, count: number) =>
  new Promise<void>((resolve, reject) => {
    worker.on('message', (data: End2Action) => {
      if (data.type === Messages.END2) resolve()
      else reject(data)
    })
    worker.postMessage(End1(count))
  })

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const workerInserts = async <R, T extends Record<string, any>>({
  databasePath,
  prepare,
  run,
}: InsertOptions<R, T>) => {
  const d = path.dirname(url.fileURLToPath(import.meta.url))
  const workerData: WorkerData = { databasePath, prepare }
  const worker = new Worker(`${d}/02-worker.ts`, { workerData })

  let count = 0
  const pusher = (row: T) => {
    count++
    worker.postMessage(Insert([row]))
  }
  const r = await run(pusher)

  await endWorker(worker, count)

  return r
}
