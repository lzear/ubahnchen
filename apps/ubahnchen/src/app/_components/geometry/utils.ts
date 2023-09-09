import _ from 'lodash'

export type Point = [number, number]
export type Vector = [Point, Point]
export type Triangle = [Point, Point, Point]

export type TransformPoint = (p: Point) => Point

export const distanceToPoint = (pointA: Point, pointB: Point) => {
  const [x1, y1] = pointA
  const [x2, y2] = pointB
  return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2))
}

export const isPoint = (point: unknown): point is Point =>
  Array.isArray(point) &&
  point.length === 2 &&
  point.every((element) => _.isNumber(element))

// Not really accurate but we can be sloppy
export const distance = (pointA: Point, pointB: Point | Point[]) =>
  isPoint(pointB)
    ? distanceToPoint(pointA, pointB)
    : Math.min(...pointB.map((point) => distanceToPoint(pointA, point)))

export const middle = (points: Point[]): Point => [
  _.sum(points.map((point) => point[0])) / points.length,
  _.sum(points.map((point) => point[1])) / points.length,
]

export const makeRegularPoints = (
  n: number,
  width: number,
  height: number,
): Point[] =>
  Array.from({ length: n }).flatMap((_, index) =>
    Array.from({ length: n }).map(
      (_, index_) => [(index / n) * width, (index_ / n) * height] as Point,
    ),
  )

export const randomPoint = ([x, y]: Point): Point => [
  Math.random() * x,
  Math.random() * y,
]

export const pointsExtent = (points: Point[]): [Point, Point] => {
  const xs = points.map((point) => point[0])
  const ys = points.map((point) => point[1])
  return [
    [Math.min(...xs), Math.min(...ys)],
    [Math.max(...xs), Math.max(...ys)],
  ]
}
