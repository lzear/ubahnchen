/* eslint-disable unicorn/prevent-abbreviations */

import type { Matrix } from 'mathjs'
import * as mathjs from 'mathjs'

import type { Point, Triangle } from './utils'

// somehow the types are wrong without this
// eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
const math = mathjs as mathjs.MathJsStatic

const affineTransformation = (triangle1: Triangle, triangle2: Triangle) => {
  const [[x1, y1], [x2, y2], [x3, y3]] = triangle1
  const [[x1p, y1p], [x2p, y2p], [x3p, y3p]] = triangle2
  const A = math.matrix([
    [x1, y1, 1, 0, 0, 0],
    [0, 0, 0, x1, y1, 1],
    [x2, y2, 1, 0, 0, 0],
    [0, 0, 0, x2, y2, 1],
    [x3, y3, 1, 0, 0, 0],
    [0, 0, 0, x3, y3, 1],
  ])
  const B = math.matrix([x1p, y1p, x2p, y2p, x3p, y3p])
  const X = math.lusolve(A, B)
  const [a, b, e, c, d, f] = X.toArray()
  const mc = [[a, b, e].flat(), [c, d, f].flat()]
  return math.matrix(mc)
}

const transformPoint = (matrix: Matrix, point: Point): Point => {
  const homogeneousPoint = math.matrix([...point, 1])
  const result = math.multiply(matrix, homogeneousPoint)
  return result.toArray().flat().slice(0, 2).map(Number) as Point
}

export const affineTransformationFromTriangles = (
  t1: Triangle,
  t2: Triangle,
) => {
  const matrix = affineTransformation(t1, t2)
  return (point: Point): Point => transformPoint(matrix, point)
}
