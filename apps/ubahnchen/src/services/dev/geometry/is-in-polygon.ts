import type { Point } from './utils'

export const isInPolygon = (point: Point, polygon: Point[]) => {
  const x = point[0]
  const y = point[1]
  let isInside = false

  for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
    const xi = polygon[i][0]
    const yi = polygon[i][1]
    const xj = polygon[j][0]
    const yj = polygon[j][1]

    const intersect =
      yi > y != yj > y && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi
    if (intersect) isInside = !isInside
  }
  return isInside
}
