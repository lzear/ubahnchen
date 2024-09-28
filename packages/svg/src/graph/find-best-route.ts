import type { Point } from '@ubahnchen/utils'

type Config = {
  precision: number
}
type Params = {
  svgString: string
  point1: Point
  point2: Point
  config: Config
}
export const SvgToGraph = ({ svgString, point1, point2, config }: Params) => {
  // todo
}
