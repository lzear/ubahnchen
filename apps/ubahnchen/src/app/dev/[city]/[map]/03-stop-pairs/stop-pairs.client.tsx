'use client'

import { useEffect, useMemo, useState, useTransition } from 'react'
import _ from 'lodash'

import { truthy } from '@ubahnchen/utils'

import type { StopsPositions } from '../../../../../components/client/place-stops/save-points-positions.action'
import { Pinch } from '../../../../_components/pinch'
import type { StopPair } from '../../../../_server/gtfs/types'
import { svgs } from '../../../svgs'
import type { CityMapParam } from '../params'

import { saveVertices } from './stop-pairs.action'

const RADIUS = 24

const getVertex = (
  stopPair: StopPair,
  paths: SVGPathElement[],
  stopPositions: StopsPositions,
) => {
  const maxRange = 50

  console.log('🦺 antoinelog paths', paths)

  const path = paths.find(
    (path) => path.getAttribute('id')?.includes(stopPair.routes.route_name),
  )

  if (!path) throw new Error('No path for ' + stopPair.routes.route_name)

  const s1 = stopPositions[stopPair.stop_pairs.stop_id_1]
  const s2 = stopPositions[stopPair.stop_pairs.stop_id_2]
  const p1 = getClosestPointMemo(path, s1.point)
  const p2 = getClosestPointMemo(path, s2.point)
  const score = p1.distance + p2.distance

  // return { path, s1, s2, p1, p2, score, og: true }

  // if (score <= maxRange) return null
  const pathId = stopPair.routes.route_name
  if (score <= maxRange)
    return { path, pathId, s1, s2, p1, p2, score, og: true }

  const pathsCandidates = paths
    .map((path) => {
      const s1 = stopPositions[stopPair.stop_pairs.stop_id_1]
      const s2 = stopPositions[stopPair.stop_pairs.stop_id_2]
      const p1 = getClosestPointMemo(path, s1.point)
      const p2 = getClosestPointMemo(path, s2.point)
      const score = p1.distance + p2.distance
      const pathId = path.getAttribute('id')!
      return { path, pathId, s1, s2, p1, p2, score, og: false }
    })
    .sort((a, b) => a.score - b.score)

  return pathsCandidates[0]
}

export const StopPairsClient = ({
  stopPositions,
  stopPairs,
  lineColors,
  cityMap,
  routeName,
}: {
  stopPositions: StopsPositions
  stopPairs: StopPair[]
  lineColors: Record<string, string>
  cityMap: CityMapParam
  routeName?: string
}) => {
  console.log('🦺 antoinelog stopPairs', stopPairs);

  // return <div>sfd</div>
  const { city, map } = cityMap
  const [isPending, startTransition] = useTransition()
  const [svgElement, setSvgElement] = useState<HTMLElement | null>(null)
  const [rangeValue, setRangeValue] = useState(50)

  const stopPairsFiltered = useMemo(
    () =>
      stopPairs.filter(
        (stopPair) => !routeName || stopPair.routes.route_name === routeName,
      ),
    [routeName, stopPairs],
  )
  useEffect(() => {
    setSvgElement(document.querySelector<HTMLElement>('#sssvvvggg'))
  }, [])

  const paths = [...svgElement?.querySelectorAll('path')]
  console.log('🦺 antoinelog paths', paths);

  const vertices = []
  // const vertices = useMemo(() => {
  //   if (!svgElement) return null
  //   const paths = [...svgElement.querySelectorAll('path')]
  //   return (
  //     stopPairs
  //       .map((stopPair) => {
  //         const vertex = getVertex(stopPair, paths, stopPositions)
  //         if (!vertex) return null
  //         return { ...stopPair, ...vertex }
  //       })
  //       // eslint-disable-next-line unicorn/no-array-callback-reference
  //       .filter(truthy)
  //       .sort((a, b) => b.score - a.score)
  //     // .slice(0, 10)
  //   )
  // }, [stopPairs, stopPositions, svgElement])
  //
  // const verticesDao = vertices?.map((vertex) => ({
  //   stop_id_1: vertex.stop_pairs.stop_id_1,
  //   stop_id_2: vertex.stop_pairs.stop_id_2,
  //   route_name: vertex.routes.route_name,
  //   vertices: [
  //     {
  //       path: vertex.pathId,
  //       lengths: [vertex.p2.length, vertex.p1.length] as [number, number],
  //     },
  //   ],
  // }))
  // console.log('🦺 antoinelog vertices', vertices);
  //
  // console.log('🦺 antoinelog stopPairs', stopPairs);
  // console.log('🦺 antoinelog stopPositions', stopPositions);
  //
  //
  const cirlces = useMemo(
    () =>
      vertices?.flatMap((vertex, idx) => {
        const delta = vertex.p2.length - vertex.p1.length
        const x = (rangeValue / 100) * delta
        const l = vertex.p1.length + x
        const pt = vertex.path.getPointAtLength(l)
        return [
          <circle key={idx} cx={pt.x} cy={pt.y} r={2} fill="red" />,
          <line
            key={idx + 'l1'}
            x1={vertex.s1.point[0]}
            y1={vertex.s1.point[1]}
            x2={pt.x}
            y2={pt.y}
            stroke="pink"
          />,
          <line
            key={idx + 'l2'}
            x1={vertex.s2.point[0]}
            y1={vertex.s2.point[1]}
            x2={pt.x}
            y2={pt.y}
            stroke="pink"
          />,
          <line
            key={idx + 'l11'}
            x1={vertex.s1.point[0]}
            y1={vertex.s1.point[1]}
            x2={vertex.p1.point[0]}
            y2={vertex.p1.point[1]}
            strokeWidth={9}
            stroke="red"
          />,
          <line
            key={idx + 'l22'}
            x1={vertex.s2.point[0]}
            y1={vertex.s2.point[1]}
            x2={vertex.p2.point[0]}
            y2={vertex.p2.point[1]}
            strokeWidth={9}
            stroke="pink"
          />,
        ]
      }),

    [rangeValue, vertices],
  )
  const cs = useMemo(
    () =>
      Object.values(stopPositions).map((stopPosition, idx) => {
        return (
          <circle
            key={idx}
            cx={stopPosition.point[0]}
            cy={stopPosition.point[1]}
            r={RADIUS}
            fill="none"
            stroke="black"
            strokeWidth={2}
          />
        )
      }),
    [stopPositions],
  )
  const ls = useMemo(
    () =>
      stopPairsFiltered.map((stopPair, idx) => {
        const stop1 = stopPositions[stopPair.stop_pairs.stop_id_1]
        const stop2 = stopPositions[stopPair.stop_pairs.stop_id_2]
        const lineColor = lineColors[stopPair.routes.route_name]
        if (!lineColor)
          throw new Error('No lineColor for ' + stopPair.routes.route_name)
        return (
          <line
            key={idx}
            fill={undefined}
            opacity={0.4}
            strokeWidth={4}
            stroke={lineColor}
            x1={stop1.point[0]}
            y1={stop1.point[1]}
            x2={stop2.point[0]}
            y2={stop2.point[1]}
          />
        )
      }),
    [lineColors, stopPairsFiltered, stopPositions],
  )

  const ImportedSvg = svgs[city][map].stopPairs
  return (
    <div>
      <Pinch>
        <ImportedSvg id="sssvvvggg" className="opacity-20" />
        {svgElement && (
          <svg
            className="absolute top-0"
            height={svgElement.getAttribute('height') || undefined}
            width={svgElement.getAttribute('width') || undefined}
          >
            {ls}
            {cs}
            {cirlces}
          </svg>
        )}

        <div>
          <button
            className="btn"
            onClick={() =>
              verticesDao &&
              startTransition(() =>
                saveVertices({ city, map, vertices: verticesDao }),
              )
            }
          >
            {isPending && <span className="loading loading-spinner" />}
            Save
          </button>
        </div>
      </Pinch>
      <input
        type="range"
        min={0}
        max="100"
        step="0.01"
        value={rangeValue}
        className="range absolute bottom-1"
        onChange={(v) => setRangeValue(Number(v.target.value))}
      />
    </div>
  )
}

// https://6r1d.github.io/closest_point/util.js
function getClosestPoint(path_node: SVGPathElement, point: [number, number]) {
  function distance2(p: { x: number; y: number }) {
    return Math.hypot(p.x - point[0], p.y - point[1])
  }

  const pathLength = path_node.getTotalLength()
  let precision = 8
  let best: DOMPoint | undefined
  let bestLength = 0
  let bestDistance = Number.POSITIVE_INFINITY

  // linear scan for coarse approximation
  let scan
  let scanLength = 0
  let scanDistance
  for (; scanLength <= pathLength; scanLength += precision) {
    if (
      (scanDistance = distance2(
        (scan = path_node.getPointAtLength(scanLength)),
      )) < bestDistance
    ) {
      best = scan
      bestLength = scanLength
      bestDistance = scanDistance
    }
  }

  // binary search for precise estimate
  precision /= 2
  while (precision > 0.5) {
    let before
    let after
    let beforeLength
    let afterLength
    let beforeDistance
    let afterDistance
    if (
      (beforeLength = bestLength - precision) >= 0 &&
      (beforeDistance = distance2(
        (before = path_node.getPointAtLength(beforeLength)),
      )) < bestDistance
    ) {
      best = before
      bestLength = beforeLength
      bestDistance = beforeDistance
    } else if (
      (afterLength = bestLength + precision) <= pathLength &&
      (afterDistance = distance2(
        (after = path_node.getPointAtLength(afterLength)),
      )) < bestDistance
    ) {
      best = after
      bestLength = afterLength
      bestDistance = afterDistance
    } else {
      precision /= 2
    }
  }

  if (!best) throw new Error('No best found')

  return {
    point: [best.x, best.y],
    distance: bestDistance,
    length: bestLength,
  }
}

const getClosestPointMemo = _.memoize(getClosestPoint, (a, b) =>
  JSON.stringify([a.id, b]),
)
