import fs from 'node:fs'
import path from 'node:path'
import url from 'node:url'

// eslint-disable-next-line import/no-extraneous-dependencies
import jsdomGlobal from 'jsdom-global'
import { createSVGWindow } from 'svgdom'

import type { Point } from '@ubahnchen/utils'

import { findShortestPath } from './dijkstra'
import { pathfindingEdges } from './pathfinding-edges'
import { pathfindingNodes } from './pathfinding-nodes'

jsdomGlobal()

global.DOMParser = window.DOMParser

// global.DOMParser = window.DOMParser

describe(findShortestPath, () => {
  it('normalize paths', () => {
    const window = createSVGWindow()
    const doc = window.document
    const svgPath = doc.createElementNS('http://www.w3.org/2000/svg', 'path')
    svgPath.setAttribute('d', 'M0,0h10v5')
    // eslint-disable-next-line unicorn/prefer-dom-node-dataset
    svgPath.setAttribute('data-ubhnchn', 'true')
    const startEnd: [Point, Point] = [
      [2, 2],
      [12, 12],
    ]
    const points = pathfindingNodes([svgPath], startEnd, 4_000_000)
    const edges = pathfindingEdges(points)
    const path = findShortestPath(points, [0, 1])

    expect(points.length).toBe(8)
    expect(edges.length).toBe(86)
    expect(path.edges.length).toBe(3)
    expect(path).toMatchInlineSnapshot(`
      {
        "distance": 22.280109889280517,
        "edges": [
          {
            "distance": 2,
            "distanceEnd": 2,
            "distanceStart": 0,
            "from": {
              "index": 0,
              "isBase": true,
              "point": [
                2,
                2,
              ],
            },
            "to": {
              "index": 4,
              "pathIndex": "true",
              "pathLength": 2,
              "point": [
                2,
                0,
              ],
            },
          },
          {
            "distance": 13,
            "distanceEnd": 15,
            "distanceStart": 2,
            "from": {
              "index": 4,
              "pathIndex": "true",
              "pathLength": 2,
              "point": [
                2,
                0,
              ],
            },
            "pathIndex": "true",
            "to": {
              "index": 3,
              "pathIndex": "true",
              "pathLength": 15,
              "point": [
                10,
                5,
              ],
            },
          },
          {
            "distance": 7.280109889280519,
            "distanceEnd": 22.280109889280517,
            "distanceStart": 15,
            "from": {
              "index": 3,
              "pathIndex": "true",
              "pathLength": 15,
              "point": [
                10,
                5,
              ],
            },
            "to": {
              "index": 1,
              "isBase": true,
              "point": [
                12,
                12,
              ],
            },
          },
        ],
      }
    `)
  })

  it('finds paths in U2', () => {
    const fileInput = path.resolve(
      path.dirname(url.fileURLToPath(import.meta.url)),
      `../__tests__/example-u2.svg`,
    )
    const svgString = fs.readFileSync(fileInput, 'utf8')
    const parser = new DOMParser()
    const paths = [
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-assignment
      ...parser
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        .parseFromString(svgString, 'image/svg+xml')
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        .querySelectorAll<SVGPathElement>('path'),
    ]

    const startEnd: [Point, Point] = [
      [800, 800],
      [600, 600],
    ]
    const points = pathfindingNodes([...paths], startEnd, 400_000)

    const result = findShortestPath(points, [0, 1])

    expect(result.edges.length).toBe(3)

    expect(result).toMatchInlineSnapshot(`
      {
        "distance": 402.5110980667424,
        "edges": [
          {
            "distance": 157.7557381804256,
            "distanceEnd": 157.7557381804256,
            "distanceStart": 0,
            "from": {
              "index": 0,
              "isBase": true,
              "point": [
                800,
                800,
              ],
            },
            "to": {
              "index": 6,
              "pathIndex": "41",
              "pathLength": 379,
              "point": [
                770.0576235343356,
                645.1118887052999,
              ],
            },
          },
          {
            "distance": 226,
            "distanceEnd": 383.7557381804256,
            "distanceStart": 157.7557381804256,
            "from": {
              "index": 6,
              "pathIndex": "41",
              "pathLength": 379,
              "point": [
                770.0576235343356,
                645.1118887052999,
              ],
            },
            "pathIndex": "41",
            "to": {
              "index": 8,
              "pathIndex": "41",
              "pathLength": 605,
              "point": [
                603.3728605243053,
                581.5504109436323,
              ],
            },
          },
          {
            "distance": 18.755359886316768,
            "distanceEnd": 402.5110980667424,
            "distanceStart": 383.7557381804256,
            "from": {
              "index": 8,
              "pathIndex": "41",
              "pathLength": 605,
              "point": [
                603.3728605243053,
                581.5504109436323,
              ],
            },
            "to": {
              "index": 1,
              "isBase": true,
              "point": [
                600,
                600,
              ],
            },
          },
        ],
      }
    `)
  })
  it('finds paths in U', () => {
    const fileInput = path.resolve(
      path.dirname(url.fileURLToPath(import.meta.url)),
      `../__tests__/example-u.svg`,
    )
    const svgString = fs.readFileSync(fileInput, 'utf8')
    const parser = new DOMParser()
    const paths = [
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-assignment
      ...parser
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        .parseFromString(svgString, 'image/svg+xml')
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        .querySelectorAll<SVGPathElement>('path'),
    ]

    const startEnd: [Point, Point] = [
      [800, 800],
      [600, 600],
    ]
    const points = pathfindingNodes([...paths], startEnd, 5_000_000)

    expect(points.length).toBe(200)

    const result = findShortestPath(points, [0, 1])

    expect(result.edges.length).toBe(5)

    expect(result).toMatchInlineSnapshot(`
      {
        "distance": 601.043472177914,
        "edges": [
          {
            "distance": 100.30083798254125,
            "distanceEnd": 100.30083798254125,
            "distanceStart": 0,
            "from": {
              "index": 0,
              "isBase": true,
              "point": [
                800,
                800,
              ],
            },
            "to": {
              "index": 22,
              "pathIndex": "5",
              "pathLength": 139,
              "point": [
                900.3,
                799.59,
              ],
            },
          },
          {
            "distance": 192,
            "distanceEnd": 292.3008379825412,
            "distanceStart": 100.30083798254125,
            "from": {
              "index": 22,
              "pathIndex": "5",
              "pathLength": 139,
              "point": [
                900.3,
                799.59,
              ],
            },
            "pathIndex": "5",
            "to": {
              "index": 148,
              "pathIndex": "5",
              "pathLength": 331,
              "point": [
                900.3,
                607.5899999999999,
              ],
            },
          },
          {
            "distance": 0.3301514803845206,
            "distanceEnd": 292.63098946292575,
            "distanceStart": 292.3008379825412,
            "from": {
              "index": 148,
              "pathIndex": "5",
              "pathLength": 331,
              "point": [
                900.3,
                607.5899999999999,
              ],
            },
            "to": {
              "index": 80,
              "pathIndex": "20",
              "pathLength": 389,
              "point": [
                900.5700000000002,
                607.4,
              ],
            },
          },
          {
            "distance": 301,
            "distanceEnd": 593.6309894629258,
            "distanceStart": 292.63098946292575,
            "from": {
              "index": 80,
              "pathIndex": "20",
              "pathLength": 389,
              "point": [
                900.5700000000002,
                607.4,
              ],
            },
            "pathIndex": "20",
            "to": {
              "index": 35,
              "pathIndex": "20",
              "pathLength": 88,
              "point": [
                599.57,
                607.4,
              ],
            },
          },
          {
            "distance": 7.412482714988252,
            "distanceEnd": 601.043472177914,
            "distanceStart": 593.6309894629258,
            "from": {
              "index": 35,
              "pathIndex": "20",
              "pathLength": 88,
              "point": [
                599.57,
                607.4,
              ],
            },
            "to": {
              "index": 1,
              "isBase": true,
              "point": [
                600,
                600,
              ],
            },
          },
        ],
      }
    `)
  })
})
