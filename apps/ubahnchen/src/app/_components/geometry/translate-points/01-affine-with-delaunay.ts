import { Delaunay } from 'd3-delaunay'
import _ from 'lodash'

import { toTuples } from '@ubahnchen/utils'

import { affineTransformationFromTriangles } from '../affine-transformation.js'
import { isInPolygon } from '../is-in-polygon.js'
import type { Point, Triangle, Vector } from '../utils.js'
import { distance } from '../utils.js'

import { gravityTranslate } from './02-gravity.js'

const trislate = (vectors: [Vector, Vector, Vector]) => (point: Point) => {
  const t1: Triangle = [vectors[0][0], vectors[1][0], vectors[2][0]]
  const t2: Triangle = [vectors[0][1], vectors[1][1], vectors[2][1]]
  return affineTransformationFromTriangles(t1, t2)(point)
}

export const affineWithDelaunay = (
  vectors: Vector[],
): ((p: Point) => Point) => {
  if (vectors.length < 3) return gravityTranslate(vectors)

  const origins = vectors.map((vector) => vector[0])
  const trianglesIndex = [...Delaunay.from(origins).triangles]
  const tuples = toTuples(trianglesIndex, 3)
  const originTriangles = tuples.map(
    (tuple) => tuple.map((index) => origins[index]) as Triangle,
  )

  const triangleFromTuple = (tuple: [number, number, number]) =>
    tuple.map((index) => origins[index]) as Triangle

  const vectorsFromTuple = (tuple: [number, number, number]) =>
    tuple.map((index) => vectors[index]) as [Vector, Vector, Vector]

  const trislation = _.memoize(trislate)

  return (point) => {
    const tuple = tuples.find((tuple) =>
      isInPolygon(point, triangleFromTuple(tuple)),
    )

    if (tuple) return trislation(vectorsFromTuple(tuple))(point)
    // if (tuple) return withN(vectorsFromTuple(tuple))(point)

    const distances = originTriangles.map((triangle) =>
      distance(point, triangle),
    )
    const minDistance = Math.min(...distances)
    const closestTriangleIndex = originTriangles.findIndex(
      (triangle, index) => distances[index] === minDistance,
    )

    return gravityTranslate(vectorsFromTuple(tuples[closestTriangleIndex]))(
      point,
    )
  }
}
