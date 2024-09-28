import type { Point } from '@ubahnchen/utils'

export const toTuple = (point: { x: number; y: number }): Point => [
  point.x,
  point.y,
]
