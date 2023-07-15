import { Delaunay } from 'd3-delaunay'

type Point = [number, number]

const _isInPolygon = (point: Point, polygon: Point[]) => {
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
const _delaunayGraph = (points: Point[]) => {
  const _delaunay = Delaunay.from(points)
  // const voronoi = delaunay.voronoi([0, 0, 960, 500])
  // const links = delaunay.voronoi([0, 0, 960, 500])
}

// translate any points base on set of vectors
const _translate = (points: Point[], vectors: [Point, Point][]) => {
  const origins = vectors.map((vector) => vector[0])
  const delaunayOrigins = Delaunay.from(origins)

  type tt = {
    currentTriangle: number[]
    triangles: [number, number, number][]
  }
  const ttt: tt = { currentTriangle: [], triangles: [] }
  for (const pointIndex of delaunayOrigins.triangles) {
    if (ttt.currentTriangle.length == 2) {
      ttt.currentTriangle = []
      ttt.triangles = [
        ...ttt.triangles,
        [...(ttt.currentTriangle as [number, number]), pointIndex],
      ]
    } else {
      ttt.currentTriangle = [...ttt.currentTriangle, pointIndex]
    }
  }

  // TODO
}
