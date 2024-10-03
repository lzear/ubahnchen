'use client'

import React, { useState } from 'react'
import { animated, useSpring } from '@react-spring/web'
import { useDrag } from '@use-gesture/react'

import { Pinch, pinchScaleRef } from '@/components/dev/client/pinch'

import { SvgFromCode } from '../show-svg/svg-from-code'

const DraggablePoint = ({
  point,
  onDrag,
}: {
  point: [number, number]
  onDrag: (x: number, y: number) => void
}) => {
  const [{ x, y }, api] = useSpring(() => ({ x: point[0], y: point[1] }))
  // const [pinchScale] = useAtom(pinchScaleAtom)
  const pinchScale = pinchScaleRef.current

  const bind = useDrag(
    ({ last, movement }) => {
      const newX = point[0] + movement[0] / pinchScale // / pinchScale
      const newY = point[1] + movement[1] / pinchScale // / pinchScale
      void api.start({ x: newX, y: newY, immediate: true })
      if (last) onDrag(newX, newY)
    },
    // { : true },
  )
  return (
    <animated.circle
      {...bind()}
      cx={x}
      cy={y}
      r={5}
      fill="transparent"
      stroke="black"
      strokeWidth={2}
      style={{ touchAction: 'none' }}
    />
  )
}

const TwoPoints = () => {
  const point1State = useState<[number, number]>([10, 10])
  const point2State = useState<[number, number]>([90, 90])

  return (
    <svg
      viewBox="0 0 100 100"
      width="100"
      height="100"
      className="absolute left-0 top-0 size-full overflow-visible"
    >
      {[point1State, point2State].map((s, i) => (
        <DraggablePoint
          key={i}
          onDrag={(newX, newY) => s[1]([newX, newY])}
          point={s[0]}
        />
      ))}
    </svg>
  )
}

export const Kruskal = () => {
  return (
    <Pinch>
      <SvgFromCode />
      <TwoPoints />
    </Pinch>
  )
}
