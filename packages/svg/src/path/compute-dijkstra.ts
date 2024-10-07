import _ from 'lodash'
import { svgPathProperties } from 'svg-path-properties'

import type { Point } from '@ubahnchen/utils'
import { colorDistance, truthy } from '@ubahnchen/utils'

import { toTuple } from '../v2/util'

import { getClosestPathSingle } from './get-closest-path-single'
import { getClosestPathPoint } from './get-closest-point'

type EnhancedPath = {
  id: string
  d: string
  color: string
  getPointAtLength: (l: number) => Point
  getTotalLength: () => number
}

type PathPoint = {
  id: string
  point: Point
  pathLength: number
  path: {
    id: string
    color: string
  }
}

type Node =
  | { id: string; point: Point; type: 'Start' | 'End' }
  | { id: string; point: Point; type: 'Path'; pathPoint: PathPoint }

type EdgeType = 'Path' | 'Jump'

type Edge = {
  source: Node
  target: Node
  distance: number
  type: EdgeType
  color?: string
}

const JUMP_PENALTY_MULTIPLIER = 10
const COLOR_DIFF_PENALTY = (colorDistance: number) => 4 * colorDistance

const preprocessPath = (d: string) => {
  const path = new svgPathProperties(d)
  return {
    getPointAtLength: (l: number) => toTuple(path.getPointAtLength(l)),
    getTotalLength: path.getTotalLength,
  }
}

const getJumpNodes = (
  p1: EnhancedPath,
  p2: EnhancedPath,
): [PathPoint, PathPoint] | [] => {
  const pp = getClosestPathSingle({
    pathD1: p1.d,
    pathD2: p2.d,
    precisionGoal: 0.5,
    precisionInitial: 8,
    giveUp: 100,
  })
  if (!pp) return []

  return [
    {
      id: `${p1.id}-${p2.id}-source`,
      point: pp.point1,
      pathLength: pp.length1,
      path: { id: p1.id, color: p1.color },
    },
    {
      id: `${p1.id}-${p2.id}-target`,
      point: pp.point2,
      pathLength: pp.length2,
      path: { id: p2.id, color: p2.color },
    },
  ]
}

const getEndPoints = (path: EnhancedPath): [PathPoint, PathPoint] => {
  const pathLength = path.getTotalLength()
  return [
    {
      id: `${path.id}-start`,
      point: path.getPointAtLength(0),
      pathLength: 0,
      path: { id: path.id, color: path.color },
    },
    {
      id: `${path.id}-end`,
      point: path.getPointAtLength(pathLength),
      pathLength,
      path: { id: path.id, color: path.color },
    },
  ]
}

const getGraphPoints = (paths: EnhancedPath[]): PathPoint[] =>
  paths.flatMap((p1) => [
    ...getEndPoints(p1),
    ...paths.flatMap((p2) => getJumpNodes(p1, p2)),
  ])

const getClosePoints = (
  point: Point,
  paths: EnhancedPath[],
  idSuffix: string,
): Node[] =>
  paths
    .map((p) => {
      const c = getClosestPathPoint(p.d, point, 0.5, 8)
      if (!c) return null
      const id = `${p.id}-closest-${idSuffix}`
      return {
        id,
        point: c.point,
        type: 'Path' as const,
        pathPoint: { id, point: c.point, pathLength: c.length, path: p },
      }
    })
    // eslint-disable-next-line unicorn/no-array-callback-reference
    .filter(truthy)

const getDistance = (
  n1: Node,
  n2: Node,
  desiredColor: string | undefined,
): number => {
  const flightDistance =
    Math.hypot(n2.point[0] - n1.point[0], n2.point[1] - n1.point[1]) *
    JUMP_PENALTY_MULTIPLIER
  if (
    n1.type !== 'Path' ||
    n2.type !== 'Path' ||
    n1.pathPoint.path.id !== n2.pathPoint.path.id
  )
    return flightDistance

  const multiplier = desiredColor
    ? 1 +
      COLOR_DIFF_PENALTY(colorDistance(n1.pathPoint.path.color, desiredColor))
    : 1
  const pathDistance =
    Math.abs(n2.pathPoint.pathLength - n1.pathPoint.pathLength) * multiplier

  return Math.min(flightDistance, pathDistance)
}

let eP: EnhancedPath[] | undefined
let graphPoints: PathPoint[] | undefined
// Main function
export const computeDijkstra = (
  start: Point,
  end: Point,
  _paths: {
    id: string
    d: string
    color: string
  }[],
  desiredColor: string | undefined,
): Node[] => {
  eP =
    eP ??
    _paths.map((p) => ({
      ...p,
      ...preprocessPath(p.d),
      id: p.id,
    }))

  // same but memoized

  // const allIds = _.uniq(eP.map((p) => p.id))
  //
  // if (allIds.length !== eP.length) throw new Error('Duplicate path ids!')

  graphPoints = graphPoints ?? getGraphPoints(eP)

  const nodes: [Node, Node, ...Node[]] = [
    { id: 'start', point: start, type: 'Start' },
    { id: 'end', point: end, type: 'End' },
    ...graphPoints.map((p) => ({
      id: p.id,
      point: p.point,
      type: 'Path' as const,
      pathPoint: p,
    })),
    ...getClosePoints(start, eP, 'start'),
    ...getClosePoints(end, eP, 'end'),
  ]

  const edges: Edge[] = nodes.flatMap((n1) =>
    nodes
      .filter((n2) => n1 !== n2)
      .map((n2) => ({
        source: n1,
        target: n2,
        distance: getDistance(n1, n2, desiredColor),
        type:
          n1.type === 'Path' &&
          n2.type === 'Path' &&
          n1.pathPoint.path.id === n2.pathPoint.path.id
            ? 'Path'
            : 'Jump',
        color:
          n1.type === 'Path'
            ? (eP?.find((p) => p.id === n1.pathPoint.path.id)?.color ??
              undefined)
            : undefined,
      })),
  )

  return dijkstra(nodes, edges, nodes[0], nodes[1])
}

function findNodeWithMinDistance(
  unvisited: Set<Node>,
  dist: Map<Node, number>,
): Node {
  let current = null
  let minDist = Infinity
  for (const node of unvisited) {
    const distance = dist.get(node)!
    if (distance < minDist) {
      minDist = distance
      current = node
    }
  }
  if (!current) throw new Error('No node found')
  return current
}

const dijkstra = (
  nodes: Node[],
  edges: Edge[],
  start: Node,
  end: Node,
): Node[] => {
  const unvisited = new Set(nodes)
  const dist = new Map<Node, number>()
  const prev = new Map<Node, Node | null>()

  for (const n of nodes) {
    dist.set(n, Infinity)
    prev.set(n, null)
  }

  dist.set(start, 0)

  while (unvisited.size > 0) {
    const current = findNodeWithMinDistance(unvisited, dist)
    unvisited.delete(current)
    if (current === end) break
    for (const e of edges.filter((e) => e.source === current)) {
      const alt = dist.get(current)! + e.distance
      if (alt < dist.get(e.target)!) {
        dist.set(e.target, alt)
        prev.set(e.target, current)
      }
    }
  }

  const path: Node[] = []
  let current: Node | null = end
  while (current) {
    path.unshift(current)
    current = prev.get(current)!
  }

  return path
}
