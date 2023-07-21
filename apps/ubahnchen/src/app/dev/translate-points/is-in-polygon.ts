import type { Point } from './utils'

export const isInPolygon = (point: Point, polygon: Point[]) => {
  const x = point[0]
  const y = point[1]
  let isInside = false

  for (
    let index = 0, index_ = polygon.length - 1;
    index < polygon.length;
    index_ = index++
  ) {
    const xi = polygon[index][0]
    const yi = polygon[index][1]
    const xj = polygon[index_][0]
    const yj = polygon[index_][1]

    const intersect =
      yi > y != yj > y && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi
    if (intersect) isInside = !isInside
  }
  return isInside
}
