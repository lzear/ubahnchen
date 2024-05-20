import type { PathEdge, ShortestPath } from './dijkstra'

export const removeJumps = (path: ShortestPath): ShortestPath => {
  let distance = 0
  const edges: PathEdge[] = path.edges
    .filter((edge) => edge.pathIndex)
    .map((edge) => {
      const newEdge = {
        pathIndex: edge.pathIndex,
        from: edge.from,
        to: edge.to,
        distance: edge.distance,
        distanceStart: distance,
        distanceEnd: distance + edge.distance,
      }
      distance += edge.distance
      return newEdge
    })
  return { edges, distance }
}
