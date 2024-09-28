import type { Point } from '@ubahnchen/utils'

export type Node = {
  id: string
  point: Point
}

type EdgeType = 'Path' | 'Jump'

export type Edge = {
  source: Node
  target: Node
  distance: number
  type: EdgeType
  color?: string
}

export type PathForAlgorithm = {
  id: string
  d: string
  color: string | null
}

export type PathPoint = {
  point: Point
  path: PathForAlgorithm
  pathLength: number
}
