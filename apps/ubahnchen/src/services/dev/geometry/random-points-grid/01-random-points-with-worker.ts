import type { Point } from '@ubahnchen/utils'

type WorkerData = {
  count: number
  width: number
  height: number
}

const randomPointsWithWorker = async (
  workerData: WorkerData,
): Promise<Point[]> =>
  new Promise((resolve) => {
    const worker = new Worker(new URL('01-worker.ts', import.meta.url))
    worker.addEventListener('message', (event) =>
      resolve(event.data as Point[]),
    )
    worker.addEventListener('error', (event) => {
      console.error(event)
    })
    worker.postMessage(workerData)
  })

export const makeRandomPoints = async (
  count: number,
  width: number,
  height: number,
): Promise<Point[]> => randomPointsWithWorker({ width, height, count })
