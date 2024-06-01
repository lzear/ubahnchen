import { Delaunay } from 'd3-delaunay'
import _ from 'lodash'

import type { Point } from '@ubahnchen/utils'
import { toTuples } from '@ubahnchen/utils'

import { affineTransformationFromTriangles } from '../affine-transformation'
import { isInPolygon } from '../is-in-polygon'
import type { Triangle, Vector } from '../utils'
import { distance } from '../utils'

import { gravityTranslate } from './02-gravity'

const trislate =
  (vectors: [Vector, Vector, Vector]) =>
  (point: Point): Point => {
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
      (_triangle, index) => distances[index] === minDistance,
    )

    const trio = tuples[closestTriangleIndex]
    if (!trio) throw new Error('No trio')
    // if (!trio) return gravityTranslate(vectors)(point)
    return gravityTranslate(vectorsFromTuple(trio))(point)
  }
}
