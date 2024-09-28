import { svgPathProperties } from 'svg-path-properties'

import type { PathFromSvg } from './get-paths'
import { getPaths } from './get-paths'
import type { Node } from './graph-types'

const baseGraph = (svg: string) => {
  const paths = getPaths(svg)
  const pathsMap = new Map<string, PathFromSvg>()
  for (const path of paths) pathsMap.set(path.id, path)
  const sampleNodes = paths.flatMap((path) => getSampleNodes(path, 10))
}

const getSampleNodes = (path: PathFromSvg, sampleDistance: number) => {
  const nodes: Node[] = []
  for (let i = 0; i < path.totalLength; i += sampleDistance)
    nodes.push({
      id: `${path.id}-${i}`,
      point: path.getPointAtLength(i),
      path,
      pathLength: i,
    })
  nodes.push({
    id: `${path.id}-${path.totalLength}`,
    point: path.getPointAtLength(path.totalLength),
    path,
    pathLength: path.totalLength,
  })
  return nodes
}

const getJumps = p
