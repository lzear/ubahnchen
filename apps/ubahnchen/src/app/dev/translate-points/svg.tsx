'use client'

import React, { useCallback, useEffect, useRef } from 'react'
import { animated, useSprings } from '@react-spring/web'
import type { FullGestureState } from '@use-gesture/react'
import { useDrag } from '@use-gesture/react'

import { useBooleanUrlParameter } from '../../../server/toggle-checkbox'

import { gravityTranslate } from './implementations/02-gravity'
import { makeRandomPoints } from './random-points-grid/02-sort'
import { makeRegularPoints } from './utils'

type Point = [number, number]
type Vector = [Point, Point]

const WIDTH = 650
const HEIGHT = 650

const translate1 =
  ({ index, pos }: { index: number; pos: Point }) =>
  (bbbb: number) => {
    if (bbbb === index) {
      return {
        x: pos[0],
        y: pos[1],
        color: 'blue',
        immediate: true,
      }
    }
  }

const isReleased = (g: FullGestureState<'drag'>) =>
  !g.down || g.type === 'lostpointercapture'

// const points = makeRandomPoints(60 * 60)

type Props = {
  count: number
}

const makePoints = (random: boolean, n: number) =>
  random
    ? makeRandomPoints(n, WIDTH, HEIGHT)
    : makeRegularPoints(n, WIDTH, HEIGHT)

export const TranslatePointsSvg = ({ count }: Props) => {
  const random = useBooleanUrlParameter('random')
  const vectorsReference = useRef<Vector[]>([])
  const pointsReference = useRef<Point[]>(
    makeRegularPoints(count, WIDTH, HEIGHT),
  )
  const offsetReference = useRef<Point>()

  // const [props, apiSelected] = useSpring<{ index: number | null }>(
  //   () => ({ index: null }),
  //   [],
  // )
  const [springs, api] = useSprings<{ x: number; y: number; color: string }>(
    pointsReference.current.length,
    (a) => {
      const point = pointsReference.current[a]
      return {
        x: point[0],
        y: point[1],
        color: 'gray',
      }
    },
  )
  const tran = useCallback(
    (points: Point[]) => {
      const newPointFunction = gravityTranslate(vectorsReference.current)
      api.start((bbbb) => {
        const point = points[bbbb]
        const newPoint = newPointFunction(point)
        return {
          x: newPoint[0],
          y: newPoint[1],
          // color: 'gray',
          // immediate: true,
        }
      })
    },
    [api],
  )

  useEffect(() => {
    const f = () => {
      const newPoints = makePoints(random, count)
      pointsReference.current = newPoints
      tran(newPoints)
    }
    void f()
  }, [random, count, tran])
  const selected = useRef<number | null>(null)

  type G = FullGestureState<'drag'> & { args?: [number] }
  const bind = useDrag((gesture: G) => {
    const { movement, first } = gesture

    // eslint-disable-next-line unicorn/consistent-destructuring
    const index = (gesture.args as [number])[0]

    if (first) {
      offsetReference.current = [springs[index].x.get(), springs[index].y.get()]
    }
    const pos: Point | false =
      (!first &&
        offsetReference.current && [
          offsetReference.current[0] + movement[0],
          offsetReference.current[1] + movement[1],
        ]) ||
      false
    if (!pos) return
    // const xy = rest.lastOffset
    selected.current = index
    // apiSelected.start({ index, immediate: true })
    // const point = pointsReference.current[index]

    // const pos: Point = [move[0] + point[0], move[1] + point[1]]

    // const movement: Point = delta
    const released = isReleased(gesture)

    if (released) {
      const point = pointsReference.current[index]
      const newVector: Vector = [
        point,
        // [point[0] + movement[0], point[1] + movement[1]],
        pos,
      ]
      vectorsReference.current = [
        ...vectorsReference.current.filter(
          ([o]) => o[0] !== point[0] || o[1] !== point[1],
        ),
        newVector,
      ]

      tran(pointsReference.current)
    } else
      api.start(
        translate1({
          index,
          pos,
        }),
      )
  })

  return (
    <div>
      <svg width={WIDTH} height={HEIGHT} className="relative">
        {/*{points.map((p, index) => (*/}
        {/*  <animated.circle*/}
        {/*    key={index}*/}
        {/*    cx={p[0]}*/}
        {/*    cy={p[1]}*/}
        {/*    r={5}*/}
        {/*    fill={props.index?.get() === index ? 'red' : 'lightgray'}*/}
        {/*    opacity={0.9}*/}
        {/*  />*/}
        {/*))}*/}
        {/*{vectors.map((v, index) => (*/}
        {/*  <g key={index}>*/}
        {/*    <line*/}
        {/*      x1={v[0][0]}*/}
        {/*      y1={v[0][1]}*/}
        {/*      x2={v[1][0]}*/}
        {/*      y2={v[1][1]}*/}
        {/*      stroke="cyan"*/}
        {/*    />*/}
        {/*    <circle cx={v[0][0]} cy={v[0][1]} r={5} fill="green" />*/}
        {/*    <circle cx={v[1][0]} cy={v[1][1]} r={5} fill="purple" />*/}
        {/*  </g>*/}
        {/*))}*/}
        {springs.map((p, index) => (
          <animated.circle
            {...bind(index)}
            onDoubleClick={() => {
              const point = pointsReference.current[index]
              vectorsReference.current = vectorsReference.current.filter(
                ([o]) => o[0] !== point[0] || o[1] !== point[1],
              )
              tran(pointsReference.current)
            }}
            key={index}
            cx={p.x}
            cy={p.y}
            // cx={p[0]}
            // cy={p[1]}
            r={2}
            // x={p.x}
            // y={p.y}
            // width={4}
            // height={4}
            // stroke="pink"
            // strokeOpacity={0}
            // strokeWidth={20}
            fill={p.color}
            // opacity={0.5}
            style={{
              cursor: 'pointer',
              touchAction: 'none',
            }}
          />
        ))}
      </svg>
    </div>
  )
}

export default TranslatePointsSvg