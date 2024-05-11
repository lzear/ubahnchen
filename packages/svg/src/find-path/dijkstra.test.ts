import fs from 'node:fs'
import path from 'node:path'
import url from 'node:url'

import { expect } from '@jest/globals'
// eslint-disable-next-line import/no-extraneous-dependencies
import jsdomGlobal from 'jsdom-global'
import { createSVGWindow } from 'svgdom'

import { findShortestPath } from './dijkstra'
import { pathfindingEdges } from './pathfinding-edges'
import { pathfindingNodes } from './pathfinding-nodes'

jsdomGlobal()

global.DOMParser = window.DOMParser

// global.DOMParser = window.DOMParser

type Point = [number, number]

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
    const points = pathfindingNodes([svgPath], startEnd, 4)
    const edges = pathfindingEdges(points)
    const path = findShortestPath(points, [0, 1])

    expect(points.length).toBe(14)
    expect(edges.length).toBe(314)
    expect(path.edges.length).toBe(3)
    expect(path).toStrictEqual({
      distance: 22.280_109_889_280_517,
      edges: [
        {
          distance: 2,
          distanceEnd: 2,
          distanceStart: 0,
          from: {
            index: 0,
            isBase: true,
            point: [2, 2],
          },
          to: {
            index: 7,
            pathIndex: 'true',
            pathLength: 2,
            point: [2, 0],
          },
        },
        {
          distance: 13,
          distanceEnd: 15,
          distanceStart: 2,
          from: {
            index: 7,
            pathIndex: 'true',
            pathLength: 2,
            point: [2, 0],
          },
          pathIndex: 'true',
          to: {
            index: 6,
            pathIndex: 'true',
            pathLength: 15,
            point: [10, 5],
          },
        },
        {
          distance: 7.280_109_889_280_519,
          distanceEnd: 22.280_109_889_280_517,
          distanceStart: 15,
          from: {
            index: 6,
            pathIndex: 'true',
            pathLength: 15,
            point: [10, 5],
          },
          to: {
            index: 1,
            isBase: true,
            point: [12, 12],
          },
        },
      ],
    })
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
    const points = pathfindingNodes([...paths], startEnd, 4)

    const result = findShortestPath(points, [0, 1])

    expect(result.edges.length).toBe(3)

    expect(result).toStrictEqual({
      distance: 350.239_406_179_474_26,
      edges: [
        {
          distance: 157.976_883_493_055_85,
          distanceEnd: 157.976_883_493_055_85,
          distanceStart: 0,
          from: {
            index: 0,
            isBase: true,
            point: [800, 800],
          },
          to: {
            index: 96,
            pathIndex: '41',
            pathLength: 376,
            point: [767.084_239_136_750_4, 645.490_296_728_742_9],
          },
        },
        {
          distance: 172,
          distanceEnd: 329.976_883_493_055_9,
          distanceStart: 157.976_883_493_055_85,
          from: {
            index: 96,
            pathIndex: '41',
            pathLength: 376,
            point: [767.084_239_136_750_4, 645.490_296_728_742_9],
          },
          pathIndex: '41',
          to: {
            index: 53,
            pathIndex: '41',
            pathLength: 204,
            point: [616.362_398_393_547_6, 588.048_358_086_503_3],
          },
        },
        {
          distance: 20.262_522_686_418_357,
          distanceEnd: 350.239_406_179_474_26,
          distanceStart: 329.976_883_493_055_9,
          from: {
            index: 53,
            pathIndex: '41',
            pathLength: 204,
            point: [616.362_398_393_547_6, 588.048_358_086_503_3],
          },
          to: {
            index: 1,
            isBase: true,
            point: [600, 600],
          },
        },
      ],
    })
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
    const points = pathfindingNodes([...paths], startEnd, 50)

    expect(points.length).toBe(1840)

    const result = findShortestPath(points, [0, 1])

    expect(result.edges.length).toBe(9)

    expect(result).toStrictEqual({
      distance: 460.528_757_080_632_54,
      edges: [
        {
          distance: 97.934_801_969_150_33,
          distanceEnd: 97.934_801_969_150_33,
          distanceStart: 0,
          from: {
            index: 0,
            isBase: true,
            point: [800, 800],
          },
          to: {
            index: 187,
            pathIndex: '7',
            pathLength: 1004,
            point: [749.206_791_270_275, 716.266_641_153_747_6],
          },
        },
        {
          distance: 51,
          distanceEnd: 148.934_801_969_150_33,
          distanceStart: 97.934_801_969_150_33,
          from: {
            index: 187,
            pathIndex: '7',
            pathLength: 1004,
            point: [749.206_791_270_275, 716.266_641_153_747_6],
          },
          pathIndex: '7',
          to: {
            index: 898,
            pathIndex: '7',
            pathLength: 953,
            point: [698.788_801_525_355_7, 719.290_000_000_000_1],
          },
        },
        {
          distance: 53,
          distanceEnd: 201.934_801_969_150_33,
          distanceStart: 148.934_801_969_150_33,
          from: {
            index: 898,
            pathIndex: '7',
            pathLength: 953,
            point: [698.788_801_525_355_7, 719.290_000_000_000_1],
          },
          pathIndex: '7',
          to: {
            index: 79,
            pathIndex: '7',
            pathLength: 900,
            point: [698.648_809_092_513, 719.270_000_000_000_1],
          },
        },
        {
          distance: 119,
          distanceEnd: 320.934_801_969_150_3,
          distanceStart: 201.934_801_969_150_33,
          from: {
            index: 79,
            pathIndex: '7',
            pathLength: 900,
            point: [698.648_809_092_513, 719.270_000_000_000_1],
          },
          pathIndex: '7',
          to: {
            index: 1087,
            pathIndex: '7',
            pathLength: 781,
            point: [579.648_809_092_513_1, 719.270_000_000_000_1],
          },
        },
        {
          distance: 0.665_010_965_418_503,
          distanceEnd: 321.599_812_934_568_83,
          distanceStart: 320.934_801_969_150_3,
          from: {
            index: 1087,
            pathIndex: '7',
            pathLength: 781,
            point: [579.648_809_092_513_1, 719.270_000_000_000_1],
          },
          to: {
            index: 863,
            pathIndex: '9',
            pathLength: 195,
            point: [579.21, 718.770_313_934_1],
          },
        },
        {
          distance: 111,
          distanceEnd: 432.599_812_934_568_83,
          distanceStart: 321.599_812_934_568_83,
          from: {
            index: 863,
            pathIndex: '9',
            pathLength: 195,
            point: [579.21, 718.770_313_934_1],
          },
          pathIndex: '9',
          to: {
            index: 1430,
            pathIndex: '9',
            pathLength: 306,
            point: [579.21, 607.770_313_934_099_9],
          },
        },
        {
          distance: 0.516_461_431_075_461,
          distanceEnd: 433.116_274_365_644_3,
          distanceStart: 432.599_812_934_568_83,
          from: {
            index: 1430,
            pathIndex: '9',
            pathLength: 306,
            point: [579.21, 607.770_313_934_099_9],
          },
          to: {
            index: 1090,
            pathIndex: '20',
            pathLength: 68,
            point: [579.569_999_999_999_9, 607.4],
          },
        },
        {
          distance: 20,
          distanceEnd: 453.116_274_365_644_3,
          distanceStart: 433.116_274_365_644_3,
          from: {
            index: 1090,
            pathIndex: '20',
            pathLength: 68,
            point: [579.569_999_999_999_9, 607.4],
          },
          pathIndex: '20',
          to: {
            index: 199,
            pathIndex: '20',
            pathLength: 88,
            point: [599.57, 607.4],
          },
        },
        {
          distance: 7.412_482_714_988_252,
          distanceEnd: 460.528_757_080_632_54,
          distanceStart: 453.116_274_365_644_3,
          from: {
            index: 199,
            pathIndex: '20',
            pathLength: 88,
            point: [599.57, 607.4],
          },
          to: {
            index: 1,
            isBase: true,
            point: [600, 600],
          },
        },
      ],
    })
  })
})
