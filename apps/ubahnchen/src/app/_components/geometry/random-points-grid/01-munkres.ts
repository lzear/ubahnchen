// @ts-ignore
// import munkres from 'munkres-js'
//
import munkres from 'hungarian-on3'

import type { Point } from '../utils.js'
import { distance } from '../utils.js'

const munkresTs = (matrix: number[][]) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  return munkres(matrix) as [number, number][]
}

export const makePairs = (pointsA: Point[], pointsB: Point[]) => {
  const matrix = pointsA.map((pointA) =>
    pointsB.map((pointB) => distance(pointA, pointB)),
  )
  return munkresTs(matrix)
}
