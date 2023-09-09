// import { parentPort, workerData } from 'node:worker_threads'

import type { Point } from '../utils'
import { makeRegularPoints, randomPoint } from '../utils'

import { makePairs } from './01-munkres'

type WorkerData = {
  count: number
  width: number
  height: number
}

const makeRandomPoints = ({ count, height, width }: WorkerData): Point[] => {
  const randomPoints = Array.from({ length: count ** 2 }).map(() =>
    randomPoint([width, height]),
  )

  const pairs = makePairs(makeRegularPoints(count, width, height), randomPoints)

  return pairs.map(([_a, b]) => randomPoints[b])
}

addEventListener('message', (event) => {
  console.log('🦺 antoinelog event', event)
  const payload = event.data as WorkerData
  postMessage(makeRandomPoints(payload))
})