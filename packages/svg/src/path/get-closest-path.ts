import type { Point } from '@ubahnchen/utils'

import { getClosestPathPoint, svgPathUtils } from './get-closest-point'

export type ClosestPathPath = {
  point1: Point
  point2: Point
  length1: number
  length2: number
  distance: number
}

const filterRedundant = (
  closestPathPath: ClosestPathPath[],
  maximumProximity: number,
) => {
  const filtered: ClosestPathPath[] = []
  const sorted = [...closestPathPath].sort((a, b) => a.distance - b.distance)
  for (const pathLink of sorted) {
    // if (selfCompare && pathLink.length1 === pathLink.length2) continue
    if (
      filtered.some(
        (f) =>
          Math.abs(f.length1 - pathLink.length1) < maximumProximity &&
          Math.abs(f.length2 - pathLink.length2) < maximumProximity,
      )
    )
      continue
    filtered.push(pathLink)
  }
  return filtered
}

const swapClosestPathPath = (
  closestPathPath: ClosestPathPath,
): ClosestPathPath => ({
  point1: closestPathPath.point2,
  point2: closestPathPath.point1,
  length1: closestPathPath.length2,
  length2: closestPathPath.length1,
  distance: closestPathPath.distance,
})

export const getClosestPathPath = ({
  pathD1,
  pathD2,
  precisionGoal = 0.5,
  precisionInitial = precisionGoal * 16,
  maximumProximity = precisionGoal * 40,
  giveUp,
}: {
  pathD1: string
  pathD2: string
  precisionGoal?: number
  precisionInitial?: number
  maximumProximity?: number
  giveUp: number
}): ClosestPathPath[] =>
  filterRedundant(
    [
      ...getClosestPathPath1({
        pathD1,
        pathD2,
        precisionGoal,
        precisionInitial,
        maximumProximity,
        giveUp,
      }),
      ...getClosestPathPath1({
        pathD1: pathD2,
        pathD2: pathD1,
        precisionGoal,
        precisionInitial,
        maximumProximity,
        giveUp,
      }).map((p) => swapClosestPathPath(p)),
    ],
    maximumProximity,
  )

export const getClosestPathPath1 = ({
  pathD1,
  pathD2,
  precisionGoal,
  precisionInitial,
  maximumProximity,
  giveUp,
}: {
  pathD1: string
  pathD2: string
  precisionGoal: number
  precisionInitial: number
  maximumProximity: number
  giveUp: number
}): ClosestPathPath[] => {
  if (precisionGoal <= 0) throw new Error('Precision must be greater than 0')
  const svgPath1 = svgPathUtils(pathD1)
  const pathLength1 = svgPath1.getTotalLength()
  const currentPoints1: ClosestPathPath[] = []
  const mapScans = new Set<number>()

  for (
    let scanLength = 0;
    scanLength <= pathLength1;
    scanLength += precisionInitial
  ) {
    const scansCur: number[] = []

    let bestDistance = Infinity
    let bestLength = scanLength

    const checkScanLength = (scanLength: number) => {
      scansCur.push(scanLength)
      const path1Point = svgPath1.getPointAtLength(scanLength)
      const closest = getClosestPathPoint(
        pathD2,
        path1Point,
        precisionGoal,
        precisionInitial,
      )
      if (closest && closest.distance < bestDistance) {
        bestDistance = closest.distance
        bestLength = scanLength
        return true
      }
      return false
    }

    checkScanLength(scanLength)

    let currentPrecision = precisionInitial / 2
    let breakThis = false
    while (currentPrecision > precisionGoal) {
      if (bestDistance >= giveUp || mapScans.has(bestLength)) {
        breakThis = true
        break
      }
      const beforeLength = bestLength - currentPrecision
      const afterLength = bestLength + currentPrecision

      if (beforeLength >= 0 && checkScanLength(beforeLength)) continue
      if (afterLength <= pathLength1 && checkScanLength(afterLength)) continue
      currentPrecision /= 2
    }
    if (breakThis) {
      for (const scan of scansCur) mapScans.add(scan)
      continue
    }

    const path1Point = svgPath1.getPointAtLength(bestLength)
    const closest = getClosestPathPoint(
      pathD2,
      path1Point,
      precisionGoal,
      precisionInitial,
    )
    for (const scan of scansCur) mapScans.add(scan)
    if (closest)
      currentPoints1.push({
        point1: path1Point,
        point2: closest.point,
        length1: bestLength,
        length2: closest.length,
        distance: closest.distance,
      })
  }

  return filterRedundant(currentPoints1, maximumProximity)
}
