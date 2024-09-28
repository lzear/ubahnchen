// From https://bl.ocks.org/mbostock/8027637
import { svgPathProperties } from 'svg-path-properties'

import type { Point } from '@ubahnchen/utils'

import { toTuple } from '../v2/util'

export const svgPathUtils = (d: string) => {
  const path = new svgPathProperties(d)
  return {
    getPointAtLength: (l: number) => toTuple(path.getPointAtLength(l)),
    getTotalLength: path.getTotalLength,
  }
}

const distance = (p1: Point) => (p2: Point) =>
  Math.hypot(p2[0] - p1[0], p2[1] - p1[1])

export type ClosestPathPoint = {
  point: Point
  length: number
  distance: number
}

export const getClosestPathPoint = (
  pathD: string,
  point: Point,
  precisionGoal = 0.5,
  precisionInitial = precisionGoal * 16,
): ClosestPathPoint | null => {
  if (precisionGoal <= 0) throw new Error('Precision must be greater than 0')
  const distanceFromPoint = distance(point)
  const svgPath = svgPathUtils(pathD)
  const pathLength = svgPath.getTotalLength()

  let bestLength = -1
  let bestPoint: Point | null = null
  let bestDistance = Infinity

  let currentPrecision = precisionInitial

  const checkScanLength = (scanLength: number) => {
    if (scanLength < 0 || scanLength > pathLength) return false

    const pathPoint = svgPath.getPointAtLength(scanLength)
    const scanDistance = distanceFromPoint(pathPoint)

    if (scanDistance < bestDistance) {
      bestLength = scanLength
      bestPoint = pathPoint
      bestDistance = scanDistance
      return true
    }
    return false
  }

  for (
    let scanLength = 0;
    scanLength <= pathLength;
    scanLength += currentPrecision
  )
    checkScanLength(scanLength)

  if (bestLength === -1) return null

  currentPrecision /= 2
  while (currentPrecision > precisionGoal) {
    const beforeLength = bestLength - currentPrecision
    const afterLength = bestLength + currentPrecision

    if (beforeLength >= 0 && checkScanLength(beforeLength)) continue
    if (afterLength <= pathLength && checkScanLength(afterLength)) continue
    currentPrecision /= 2
  }

  if (!bestPoint) return null

  return { point: bestPoint, length: bestLength, distance: bestDistance }
}
