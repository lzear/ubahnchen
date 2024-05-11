import type { BaseNode, PathfindingNode } from './pathfinding-nodes'

type Point = [number, number]

export type PathfindingEdge = {
  distance: number
  from: PathfindingNode | BaseNode
  to: PathfindingNode | BaseNode
  inPath: boolean
}

const distance2 = (point1: Point, point2?: Point): number =>
  point2
    ? distance2([point1[0] - point2[0], point1[1] - point2[1]])
    : Math.hypot(point1[0], point1[1])

type PathfindingEdgeConfig = {
  epsilon?: number
  outOfPathPenalty?: number
  jumpLimit?: number
}

export const pathfindingEdges = (
  points: (PathfindingNode | BaseNode)[],
  config?: PathfindingEdgeConfig,
) => {
  const epsilon = config?.epsilon ?? 0.1
  const outOfPathPenalty = config?.outOfPathPenalty ?? 10
  const jumpLimit = config?.jumpLimit ?? Number.POSITIVE_INFINITY
  return points.flatMap((from) =>
    points
      .filter((to) => from !== to)
      .flatMap((to) => {
        const jumpDistance =
          (distance2(from.point, to.point) + epsilon) * outOfPathPenalty

        const jump = jumpDistance <= jumpLimit && {
          distance: jumpDistance,
          from,
          to,
          inPath: false,
        }

        const inPath = 'pathIndex' in from &&
          'pathIndex' in to &&
          to.pathIndex &&
          from.pathIndex === to.pathIndex && {
            distance: Math.abs(from.pathLength - to.pathLength) + epsilon,
            from,
            to,
            inPath: true,
            pathIndex: from.pathIndex,
          }
        return [jump, inPath].filter(Boolean) as PathfindingEdge[]
      }),
  )
}
