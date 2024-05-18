import { expect } from '@jest/globals'
import { createSVGWindow } from 'svgdom'

import { pathfindingEdges } from './pathfinding-edges'
import { pathfindingNodes } from './pathfinding-nodes'

type Point = [number, number]

describe(pathfindingEdges, () => {
  it('normalize paths', () => {
    const window = createSVGWindow()
    const doc = window.document
    const svgPath = doc.createElementNS('http://www.w3.org/2000/svg', 'path')
    svgPath.setAttribute('d', 'M0,0h10v5')
    // eslint-disable-next-line unicorn/prefer-dom-node-dataset
    svgPath.setAttribute('data-ubhnchn', 'test')
    const startEnd: [Point, Point] = [
      [2, 2],
      [12, 12],
    ]
    const points = pathfindingNodes([svgPath], startEnd, 40_000)
    expect(pathfindingEdges(points).length).toBe(86)
  })
})
