import { svgPathProperties } from 'svg-path-properties'

import type { Point } from '@ubahnchen/utils'

import { simplify } from './simplify'

const PRECISION = 1
const SIMPLIFY_PRECISION = 0.5
const SIMPLIFY_TOLERANCE = 0.5

export const truncate = (
  d: string,
  from: number,
  to: number,
  precision = PRECISION,
) => {
  const properties = new svgPathProperties(d)
  const points: Point[] = []
  const sign = Math.sign(to - from)
  for (let i = 0; i < Math.abs(to - from); i += precision) {
    const { x, y } = properties.getPointAtLength(from + i * sign)
    points.push([x, y])
  }
  const end = properties.getPointAtLength(to)
  points.push([end.x, end.y])

  if (points.length < 2) return ''

  return simplify(points, {
    tolerance: SIMPLIFY_TOLERANCE,
    precision: SIMPLIFY_PRECISION,
  })
}
