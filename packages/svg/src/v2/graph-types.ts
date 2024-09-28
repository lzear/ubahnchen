import type { Point } from '@ubahnchen/utils'

import type { PathFromSvg } from './get-paths'

export type Node = {
  id: string
  point: Point
  path: PathFromSvg
  pathLength: number
}

export type EdgeType = 'Path' | 'Jump'

export interface EdgeBase {
  source: Node
  target: Node
  distance: number
  type: EdgeType
}

export interface EdgePath extends EdgeBase {
  type: 'Path'
  color: string
}

export interface EdgeJump extends EdgeBase {
  type: 'Jump'
}

export type Edge = EdgePath | EdgeJump
