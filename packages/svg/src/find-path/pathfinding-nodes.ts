import paper from 'paper'

import type { Point } from '@ubahnchen/utils'

import { getClosestPointPaper } from './get-closest-point'

const domPointToTuple = (point: DOMPoint | paper.Point): Point => [
  point.x,
  point.y,
]

export type BaseNode = {
  point: Point
  isBase: true
  index: number
}

export type PathfindingNode = {
  point: Point
  pathLength: number
  pathIndex: string
  index: number
}

const indexMaker = () => {
  let index = 0
  return () => index++
}

let paperSetup = false
const getPaper = () => {
  if (!paperSetup) {
    paper.setup(new paper.Size(10, 5))
    paperSetup = true
  }
  return paper
}

const getPathSamples = (
  path: SVGPathElement,
  precision: number,
  indexer: () => number,
) => {
  const d = path.getAttribute('d')
  if (!d) throw new Error('Path missing d attribute')
  getPaper()
  const paperPath = new paper.Path(d)
  const pathLength = paperPath.length

  const points: PathfindingNode[] = []
  for (let scanLength = 0; scanLength <= pathLength; scanLength += precision)
    points.push({
      point: domPointToTuple(paperPath.getPointAt(scanLength)),
      pathLength: scanLength,
      index: indexer(),
      pathIndex: getPathIndex(path),
    })
  points.push({
    point: domPointToTuple(paperPath.getPointAt(pathLength)),
    pathLength,
    index: indexer(),
    pathIndex: getPathIndex(path),
  })
  return points
}

const getJump = (point: Point, path: SVGPathElement, index: number) => {
  const jumped = getClosestPointPaper(path, point)
  return {
    point: jumped.point,
    pathLength: jumped.pathLength,
    pathIndex: getPathIndex(path),
    index,
  }
}

const getPathIndex = (path: SVGPathElement) => {
  // @ts-ignore
  // eslint-disable-next-line unicorn/prefer-dom-node-dataset
  const idx: string = path.getAttribute('data-ubhnchn')

  if (!idx) throw new Error('Path missing index')
  return idx
}

export const pathfindingNodes = (
  svgPaths: SVGPathElement[],
  startEnd: [Point, Point],
  precision = 1,
): (PathfindingNode | BaseNode)[] => {
  const indexer = indexMaker()

  const baseNodes: BaseNode[] = startEnd.map((point) => ({
    point,
    isBase: true,
    index: indexer(),
  }))

  const pointSamples = svgPaths.flatMap((path) =>
    getPathSamples(path, precision, indexer),
  )

  const jumpStart = svgPaths.map((path) =>
    getJump(startEnd[0], path, indexer()),
  )
  const jumpEnd = svgPaths.map((path) => getJump(startEnd[1], path, indexer()))
  const jumpSamples = pointSamples.flatMap((p) =>
    svgPaths.map((path) => getJump(p.point, path, indexer())),
  )

  return [
    ...baseNodes,
    ...pointSamples,
    ...jumpStart,
    ...jumpEnd,
    ...jumpSamples,
  ]
}
