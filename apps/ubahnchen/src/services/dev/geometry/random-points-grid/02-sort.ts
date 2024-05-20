import _ from 'lodash'

import type { Point } from '@ubahnchen/utils'

import { randomPoint } from '../utils'

export const makeRandomPoints = (
  count: number,
  width: number,
  height: number,
): Point[] => {
  const randomPoints = Array.from({ length: count ** 2 })
    .map(() => randomPoint([width, height]))
    .sort((a, b) => a[0] - b[0])
  return _.chunk(randomPoints, count).flatMap((row) =>
    row.sort((a, b) => a[1] - b[1]),
  )
}
