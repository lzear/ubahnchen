import { expect } from '@jest/globals'
import _ from 'lodash'
import { createSVGWindow } from 'svgdom'

import { pathfindingNodes } from './pathfinding-nodes'

type Point = [number, number]

describe(pathfindingNodes, () => {
  it('normalize paths', () => {
    const window = createSVGWindow()
    const doc = window.document
    const svgPath = doc.createElementNS('http://www.w3.org/2000/svg', 'path')
    svgPath.setAttribute('d', 'M0,0h10v5')
    // eslint-disable-next-line unicorn/prefer-dom-node-dataset
    svgPath.setAttribute('data-ubhnchn', 'abc')
    const startEnd: [Point, Point] = [
      [2, 2],
      [12, 12],
    ]
    expect(
      pathfindingNodes([svgPath], startEnd, 4_000_000).map((v) =>
        _.omit(v, 'path'),
      ),
    ).toMatchInlineSnapshot(`
      [
        {
          "index": 0,
          "isBase": true,
          "point": [
            2,
            2,
          ],
        },
        {
          "index": 1,
          "isBase": true,
          "point": [
            12,
            12,
          ],
        },
        {
          "index": 2,
          "pathIndex": "abc",
          "pathLength": 0,
          "point": [
            0,
            0,
          ],
        },
        {
          "index": 3,
          "pathIndex": "abc",
          "pathLength": 15,
          "point": [
            10,
            5,
          ],
        },
        {
          "index": 4,
          "pathIndex": "abc",
          "pathLength": 2,
          "point": [
            2,
            0,
          ],
        },
        {
          "index": 5,
          "pathIndex": "abc",
          "pathLength": 15,
          "point": [
            10,
            5,
          ],
        },
        {
          "index": 6,
          "pathIndex": "abc",
          "pathLength": 0,
          "point": [
            0,
            0,
          ],
        },
        {
          "index": 7,
          "pathIndex": "abc",
          "pathLength": 15,
          "point": [
            10,
            5,
          ],
        },
      ]
    `)
  })
})
