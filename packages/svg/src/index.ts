// export { annotate } from './annotate'
// export { filterSvg } from './filter'
// export { findShortestPath, type ShortestPath } from './find-path/dijkstra'
// export { getClosestPoint } from './find-path/get-closest-point'
// export { pathfindingEdges } from './find-path/pathfinding-edges'
// export { pathfindingNodes } from './find-path/pathfinding-nodes'
// export { removeJumps } from './find-path/remove-jumps'
export { computeDijkstra } from './path/compute-dijkstra'
export {
  type ClosestPathPath,
  getClosestPathPath,
} from './path/get-closest-path'
export { getClosestPathSingle } from './path/get-closest-path-single'
export {
  type ClosestPathPoint,
  getClosestPathPoint,
} from './path/get-closest-point'
export { parsePathString } from './path/get-segments'
export { extractSVGPaths } from './path/get-svg-paths'
export { simplify } from './path/simplify'
export { truncate } from './path/truncate'
