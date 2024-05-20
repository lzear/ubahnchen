import type { PathfindingEdge } from './pathfinding-edges'
import { pathfindingEdges } from './pathfinding-edges'
import type { BaseNode, PathfindingNode } from './pathfinding-nodes'

interface DijkstraNode {
  node: PathfindingNode | BaseNode
  distance: number
  predecessor?: DijkstraNode
}

const isPathfindingNode = (
  node: PathfindingNode | BaseNode,
): node is PathfindingNode => 'pathIndex' in node

export type ShortestPath = {
  edges: PathEdge[]
  distance: number
}

export const findShortestPath = (
  nodes: (PathfindingNode | BaseNode)[],
  [startIdx, endIdx]: [number, number],
): ShortestPath => {
  const edges: PathfindingEdge[] = pathfindingEdges(nodes)
  const nodeMap = new Map<number, DijkstraNode>()
  for (const node of nodes)
    nodeMap.set(node.index, { node, distance: Number.POSITIVE_INFINITY })

  const startNode = nodeMap.get(startIdx)
  if (!startNode) throw new Error('Start node not found')
  startNode.distance = 0

  const unvisitedSet = new Set(nodeMap.values())

  while (unvisitedSet.size > 0) {
    let current: DijkstraNode | undefined = undefined
    for (const node of unvisitedSet)
      if (!current || node.distance < current.distance) current = node

    if (!current) throw new Error('No path found')
    if (current?.node?.index === endIdx) break

    unvisitedSet.delete(current)

    const currentEdges = edges.filter(
      (e) => e.from.index === current.node.index,
    )
    for (const edge of currentEdges) {
      const neighbor = nodeMap.get(edge.to.index)
      if (!neighbor) throw new Error('Edge points to unknown node')
      const newDistance = current.distance + edge.distance
      if (newDistance < neighbor.distance) {
        neighbor.distance = newDistance
        neighbor.predecessor = current
        unvisitedSet.add(neighbor) // Re-evaluate this node
      }
    }
  }

  const endNode = nodeMap.get(endIdx)
  if (!endNode) throw new Error('End node not found')
  return reconstructPath(endNode)
}

const getDistanceThroughPath = (
  from: PathfindingNode,
  to: PathfindingNode,
): number => {
  if (!('pathIndex' in from) || !('pathIndex' in to))
    throw new Error('Node not in path')

  if (from.pathIndex !== to.pathIndex) throw new Error('Nodes not in same path')

  return Math.abs(to.pathLength - from.pathLength)
}

export type PathEdge = {
  from: PathfindingNode | BaseNode
  to: PathfindingNode | BaseNode
  distance: number
  distanceStart: number
  distanceEnd: number
  pathIndex?: string
}

const reconstructPath = (
  endNode: DijkstraNode,
): {
  edges: PathEdge[]
  distance: number
} => {
  const path: DijkstraNode[] = []
  let current: DijkstraNode | undefined = endNode
  while (current) {
    path.unshift(current)
    current = current.predecessor
  }

  const edges: PathEdge[] = []

  let cumulativeDistance = 0

  for (let i = 0; i < path.length - 1; i++) {
    const from = path[i]?.node
    const to = path[i + 1]?.node

    if (!from || !to) throw new Error('Node not found')

    const pathIndex =
      'pathIndex' in from &&
      'pathIndex' in to &&
      from.pathIndex === to.pathIndex
        ? from.pathIndex
        : undefined

    if (pathIndex) {
      if (!isPathfindingNode(from) || !isPathfindingNode(to))
        throw new Error('Node not in path')

      const distance = getDistanceThroughPath(from, to)
      edges.push({
        from,
        to,
        pathIndex,
        distance,
        distanceStart: cumulativeDistance,
        distanceEnd: cumulativeDistance + distance,
      })
      cumulativeDistance += distance
    } else {
      const distance = Math.hypot(
        to.point[0] - from.point[0],
        to.point[1] - from.point[1],
      )
      edges.push({
        from,
        to,
        distance,
        distanceStart: cumulativeDistance,
        distanceEnd: cumulativeDistance + distance,
      })
      cumulativeDistance += distance
    }
  }
  return {
    edges,
    distance: cumulativeDistance,
  }
}
