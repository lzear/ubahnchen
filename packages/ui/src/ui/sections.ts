export type JunctionPoint = {
  path: paper.Path
  point: paper.Point
  stop_id: string
  pathName: string
  offset: number
}
export type Junction = [JunctionPoint, JunctionPoint]

export type Section = {
  path: string
  stops: { stop_id: string; offset: number }[]
}
