export type Node = {
  id: string
  x: number
  y: number
}

type EdgeType = 'Path' | 'Jump'

export type Edge = {
  source: Node
  target: Node
  distance: number
  type: EdgeType
  color?: string
}

export type PathForAlgorithm<D = unknown> = {
  id: string
  d: string
  boundingBox: {
    x: number
    y: number
    width: number
    height: number
  }
  color: string | null
  data: D
}

export type PathPoint = {
  x: number
  y: number
  path: PathForAlgorithm
  pathLength: number
}
