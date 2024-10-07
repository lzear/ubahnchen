import path from 'node:path'
import url from 'node:url'
import { Worker } from 'node:worker_threads'

import type { InsertOptions } from '../type'

import type { End1Action, End2Action, WorkerData } from './02-worker-types'
import { End1, Insert, Messages } from './02-worker-types'

const CHUNK_SIZE = 10_000

const endWorker = (worker: Worker, count: number) =>
  new Promise<void>((resolve, reject) => {
    worker.on('message', (data: End1Action | End2Action) => {
      if (data.type === Messages.END2) resolve()
      else reject(new Error('Unexpected message'))
    })
    worker.postMessage(End1(count))
  })

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const workerInsertsBulk = async <R, T extends Record<string, any>>({
  databasePath,
  prepare,
  run,
  foreignKeys,
}: InsertOptions<R, T>) => {
  const d = path.dirname(url.fileURLToPath(import.meta.url))
  const workerData: WorkerData = { databasePath, prepare, foreignKeys }
  const worker = new Worker(`${d}/02-worker.ts`, { workerData })

  let count = 0

  let chunk: T[] = []
  const pusher = (row: T) => {
    count++
    chunk.push(row)
    if (chunk.length === CHUNK_SIZE) {
      worker.postMessage(Insert(chunk))
      chunk = []
    }
  }
  const r = await run(pusher)

  if (chunk.length > 0) worker.postMessage(Insert(chunk))

  await endWorker(worker, count)

  return r
}
