import jsdomGlobal from 'jsdom-global'

import { findShortestPath } from './dijkstra'
import { pathfindingNodes } from './pathfinding-nodes'

type Point = [number, number]

export const findShortestPathStr = (
  svgString: string,
  startEnd: [Point, Point],
  precision = 1,
) => {
  jsdomGlobal()

  global.DOMParser = window.DOMParser

  const parser = new DOMParser()
  const paths = [
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-assignment
    ...parser
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      .parseFromString(svgString, 'image/svg+xml')
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      .querySelectorAll<SVGPathElement>('path'),
  ]

  const nodes = pathfindingNodes(paths, startEnd, precision)

  return findShortestPath(nodes, [0, 1])
}
