import type { ComponentProps } from 'react'
import React, { useEffect, useRef, useState, useTransition } from 'react'
import { animated, to, useSprings } from '@react-spring/web'
import type { FullGestureState } from '@use-gesture/react'
import { useDrag } from '@use-gesture/react'
import _ from 'lodash'

import { findClosestIdx } from '@/app/dev/[city]/[map]/01-place-stops/place-stops.client'
import { Loading } from '@/components/dev/loading'
import { affineWithDelaunay } from '@/services/dev/geometry/translate-points/01-affine-with-delaunay'
import { gravityTranslate } from '@/services/dev/geometry/translate-points/02-gravity'
import type { Vector } from '@/services/dev/geometry/utils'
import { distance } from '@/services/dev/geometry/utils'
import type { City, Stop, StopPair, StopsPositions } from '@ubahnchen/cities'
import type { Point } from '@ubahnchen/utils'

import { UrlParamType, useUrlParams } from '../../url-params/url-params'
import { pinchScaleRef } from '../pinch'
import { translate1 } from '../springs/translate'

import { recordStopPosition } from './save-points-positions.action'
import type { Size } from './types'

type Props = {
  targets: StopsPositions
  stopById: Record<string, Stop>
  stopPairs: StopPair[]
  size: Size
  candidates: Point[]
  city: City
  map: string
} & ComponentProps<'svg'>

const isReleased = (g: FullGestureState<'drag'>) =>
  !g.down || g.type === 'lostpointercapture'

type G = FullGestureState<'drag'> & { args?: [number] }

const PADDING = 10

const makeCoords = (
  stops: Stop[],
  size: Size,
): Record<string, Stop & { point: Point }> => {
  const latMin = Math.min(...stops.map((stop) => stop.stop_lat))
  const latMax = Math.max(...stops.map((stop) => stop.stop_lat))
  const lonMin = Math.min(...stops.map((stop) => stop.stop_lon))
  const lonMax = Math.max(...stops.map((stop) => stop.stop_lon))

  const targetWidth = size.width - PADDING * 2
  const targetHeight = size.height - PADDING * 2

  const stopsWithCoord: (Stop & { point: Point })[] = stops.map((stop) => ({
    ...stop,
    point: [
      PADDING + ((stop.stop_lon - lonMin) / (lonMax - lonMin)) * targetWidth,
      PADDING + (-(stop.stop_lat - latMax) / (latMax - latMin)) * targetHeight,
    ],
  }))
  return _.keyBy(stopsWithCoord, 'stop_id')
}

const useCandidatesMagnet = () =>
  useUrlParams({
    name: 'magnet',
    type: UrlParamType.Boolean,
  }).value

const useDelaunay = () =>
  useUrlParams({
    name: 'delaunay',
    type: UrlParamType.Boolean,
  }).value

const useNewPoints = ({
  origins,
  targets,
  magnet,
  candidates,
}: {
  origins: StopsPositions
  targets: StopsPositions
  magnet: boolean
  candidates: Point[] | null
}) => {
  const vectors: Vector[] = Object.entries(targets).map(
    ([stopId, { point }]) => {
      const origin = origins[stopId]
      if (!origin) throw new Error(`Origin not found for stopId: ${stopId}`)
      return [origin.point, point]
    },
  )
  const transform: (p: Point) => Point = useDelaunay()
    ? affineWithDelaunay(vectors)
    : gravityTranslate(vectors)

  const transformedPoints: Record<string, Point> = {}
  for (const [stopId, stop] of Object.entries(origins)) {
    transformedPoints[stopId] = transform(stop.point)
  }
  if (!magnet || !candidates)
    return Object.keys(origins).map((id) => ({
      ...origins[id],
      point: transformedPoints[id],
      isPlaced: id in targets,
    }))

  const mutableCandidates = [...candidates]

  const placedOnCandidates: Record<string, Point> = {}
  const stopsToPlace = new Set(Object.keys(origins))

  for (const [stopId, { point }] of Object.entries(targets)) {
    const closestPointIdx = findClosestIdx(point, mutableCandidates)
    const [closestCandidate] = mutableCandidates.splice(closestPointIdx, 1)
    if (!closestCandidate) throw new Error('No closest candidate found')
    placedOnCandidates[stopId] = closestCandidate
    stopsToPlace.delete(stopId)
  }

  while (stopsToPlace.size > 0 && mutableCandidates.length > 0) {
    const stopId = stopsToPlace.values().next().value as string
    const p = transformedPoints[stopId]
    if (!p) throw new Error(`No transformed point for stopId: ${stopId}`)
    const closestPointIdx = findClosestIdx(p, mutableCandidates)
    const [closestCandidate] = mutableCandidates.splice(closestPointIdx, 1)
    if (!closestCandidate) throw new Error('No closest candidate found')
    placedOnCandidates[stopId] = closestCandidate
    stopsToPlace.delete(stopId)
  }

  return Object.values(origins).map((stop) => ({
    ...stop,
    point: placedOnCandidates[stop.stop_id] ?? stop.point,
    isPlaced: stop.stop_id in targets,
  }))
}
const useStopPlacementState = (
  origins: StopsPositions,
  targetsFromFile: StopsPositions,
  candidates: Point[],
) => {
  const [targets, setPlacedStops] = useState<StopsPositions>(targetsFromFile)

  const addPlacedStop = (stopId: string, clickedPoint: Point) => {
    const stop = origins[stopId]
    if (!stop) throw new Error(`Stop not found for stopId: ${stopId}`)

    const closestPointIdx = candidates
      ? findClosestIdx(clickedPoint, candidates)
      : -1
    const p = candidates[closestPointIdx]
    const point =
      p && distance(p, clickedPoint) < 50
        ? candidates[closestPointIdx]
        : clickedPoint
    if (!point) throw new Error('No point')
    setPlacedStops((placedStops) => ({
      ...placedStops,
      [stopId]: { point, stop_id: stop.stop_id, stop_name: stop.stop_name },
    }))
  }

  const mag = useCandidatesMagnet()

  const wipStops = useNewPoints({
    origins,
    targets,
    magnet: mag ?? false,
    candidates,
  })

  return {
    targets,
    addPlacedStop,
    unplaceStop: (stopId: string) => {
      const { [stopId]: _, ...newTargets } = targets
      setPlacedStops(newTargets)
    },
    wip: _.keyBy(wipStops, 'stop_id'),
    candidates: candidates?.map((p) => [p[0], p[1]] as Point),
  }
}
export const SvgTarget = ({
  size,
  stopById,
  targets,
  candidates,
  stopPairs,
  city,
  map,
}: Props) => {
  const [isPending, startTransition] = useTransition()
  const origins = makeCoords(Object.values(stopById), size)
  const state = useStopPlacementState(origins, targets, candidates)
  const wipStops = Object.values(state.wip)

  const svgContainerRef = useRef<HTMLDivElement | null>(null)
  const pointsRef = useRef<Point[]>(
    wipStops.map((s) => {
      const p = s.point
      if (!p) throw new Error('No point')
      return p
    }),
  )
  const vectorsReference = useRef<Vector[]>([])
  const offsetReference = useRef<Point>()
  const selected = useRef<number | null>(null)

  const [springs, api] = useSprings<{
    x: number
    y: number
    r: number
    color: string
  }>(pointsRef.current.length, (index) => {
    const point = pointsRef.current[index]
    if (!point) throw new Error('No point')

    const stop = wipStops[index]
    if (!stop) throw new Error('No stop')

    return {
      x: point[0],
      y: point[1],
      color: stop.isPlaced ? 'green' : 'gray',
      r: stop.isPlaced ? 3 : 9,
    }
  })

  useEffect(() => {
    void api.start((index) => {
      const stop = wipStops[index]
      if (!stop?.point) throw new Error('No stop')
      return {
        x: stop.point[0],
        y: stop.point[1],
        color: stop.isPlaced ? 'green' : 'gray',
        r: stop.isPlaced ? 3 : 9,
      }
    })
  }, [api, wipStops])

  const bind = useDrag((gesture: G) => {
    const { movement, first, event } = gesture
    event.preventDefault()
    // eslint-disable-next-line unicorn/consistent-destructuring
    const index = (gesture.args as [number])[0]
    const spring = springs[index]

    if (!spring) throw new Error('No spring')
    if (first) offsetReference.current = [spring.x.get(), spring.y.get()]

    const pinchScale = pinchScaleRef.current
    const pos: Point | null =
      (!first &&
        offsetReference.current && [
          offsetReference.current[0] + movement[0] / pinchScale,
          offsetReference.current[1] + movement[1] / pinchScale,
        ]) ||
      null

    if (!pos) return
    selected.current = index
    const released = isReleased(gesture)

    if (released) {
      const stop = wipStops[index]
      if (!stop?.stop_id) throw new Error('No stop')
      state.addPlacedStop(stop.stop_id, pos)
      const point = pointsRef.current[index]
      if (!point) throw new Error('No point')
      const newVector: Vector = [point, pos]
      vectorsReference.current = [
        ...vectorsReference.current.filter(
          ([o]) => o[0] !== point[0] || o[1] !== point[1],
        ),
        newVector,
      ]
    } else void api.start(translate1({ index, pos }))
  })
  return (
    <div ref={svgContainerRef} className="absolute top-0">
      <svg height={size.height} width={size.width}>
        {stopPairs.map((sp) => {
          const stopInPair1 = stopById[sp.stop_pairs.stop_id_1]
          const stopInPair2 = stopById[sp.stop_pairs.stop_id_2]
          if (!stopInPair1) throw new Error('No stop')
          if (!stopInPair2) throw new Error('No stop')
          const match1 = state.wip[stopInPair1.stop_id]
          const match2 = state.wip[stopInPair2.stop_id]
          if (!match1?.point || !match2?.point) return null
          return (
            <line
              key={sp.stop_pairs.idx}
              x1={match1.point[0]}
              y1={match1.point[1]}
              x2={match2.point[0]}
              y2={match2.point[1]}
              stroke="gray"
              strokeWidth={1}
            />
          )
        })}
        <g id="candidates">
          {candidates.map((p, index) => (
            <rect
              key={index}
              x={p[0] - 5}
              y={p[1] - 5}
              width={10}
              height={10}
              fill="red"
              opacity={0.5}
            />
          ))}
        </g>
        {springs.map((p, index) => {
          const stop = wipStops[index]
          if (!stop) throw new Error('No stop')
          return (
            <animated.g
              key={index}
              fill={p.color}
              transform={to([p.x, p.y], (x, y) => `translate(${x}, ${y})`)}
            >
              <text fill="#333" style={{ fontSize: 12, pointerEvents: 'none' }}>
                {stop.stop_name}
              </text>
              <circle
                {...bind(index)}
                cx={0}
                cy={0}
                r={stop.isPlaced ? 3 : 9}
                style={{ cursor: 'pointer', touchAction: 'none' }}
                onDoubleClick={(e) => {
                  if (!stop.stop_id) throw new Error('No stop')
                  state.unplaceStop(stop.stop_id)
                  e.preventDefault()
                }}
              />
            </animated.g>
          )
        })}
      </svg>

      <button
        className="btn btn-xs fixed bottom-2 right-2 z-40"
        onClick={() =>
          startTransition(() =>
            recordStopPosition({ city, map, stops: state.targets }),
          )
        }
      >
        {isPending && <Loading />}
        Save stops positions
      </button>
    </div>
  )
}
