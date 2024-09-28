import type { Point } from '@ubahnchen/utils'

import type { ClosestPathPoint } from './get-closest-point'
import { getClosestPathPoint, svgPathUtils } from './get-closest-point'

export type ClosestPathPath = {
  point1: Point
  point2: Point
  length1: number
  length2: number
  distance: number
}

export const getClosestPathSingle = ({
  pathD1,
  pathD2,
  precisionGoal,
  precisionInitial,
  giveUp,
}: {
  pathD1: string
  pathD2: string
  precisionGoal: number
  precisionInitial: number
  giveUp: number
}): ClosestPathPath | null => {
  if (precisionGoal <= 0) throw new Error('Precision must be greater than 0')
  const svgPath1 = svgPathUtils(pathD1)
  const pathLength1 = svgPath1.getTotalLength()

  let bestLength = -1
  let bestDistance = Infinity
  let bestP2: ClosestPathPoint | null = null as ClosestPathPoint | null

  let currentPrecision = precisionInitial

  const checkScanLength = (scanLength: number) => {
    if (scanLength < 0 || scanLength > pathLength1) return false
    const path1Point = svgPath1.getPointAtLength(scanLength)
    const closest = getClosestPathPoint(
      pathD2,
      path1Point,
      precisionGoal,
      precisionInitial,
    )
    if (closest && closest.distance < bestDistance) {
      bestLength = scanLength
      bestP2 = closest
      bestDistance = closest.distance
      return true
    }
    return false
  }

  for (
    let scanLength = 0;
    scanLength <= pathLength1;
    scanLength += currentPrecision
  )
    checkScanLength(scanLength)

  if (bestLength === -1 || !bestP2) throw new Error('No closest point found')

  if (bestP2.distance >= giveUp) return null

  currentPrecision /= 2
  while (currentPrecision > precisionGoal) {
    const beforeLength = bestLength - currentPrecision
    const afterLength = bestLength + currentPrecision

    if (beforeLength >= 0 && checkScanLength(beforeLength)) continue
    if (afterLength <= pathLength1 && checkScanLength(afterLength)) continue
    currentPrecision /= 2
  }

  if (!bestP2) throw new Error('No closest point found')

  return {
    point1: svgPath1.getPointAtLength(bestLength),
    point2: bestP2.point,
    length1: bestLength,
    length2: bestP2.length,
    distance: bestP2.distance,
  }
}
