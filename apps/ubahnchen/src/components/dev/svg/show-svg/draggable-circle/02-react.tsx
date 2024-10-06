import React from 'react'
import { useGesture } from '@use-gesture/react'
import { atom, useAtom } from 'jotai'

import { pinchScaleRef } from '../../pinch'

const circle1Atom = atom<[number, number]>([50, 50])
const circle2Atom = atom<[number, number]>([150, 150])

// New atom to track if a circle is being dragged
export const isDraggingAtom = atom(false)

const DraggableCircle: React.FC<{
  positionAtom: typeof circle1Atom
  id: string
}> = ({ positionAtom, id }) => {
  const [position, setPosition] = useAtom(positionAtom)
  const [grabbing, setIsDragging] = useAtom(isDraggingAtom)

  const bind = useGesture(
    {
      onDragStart: ({ event }) => {
        setIsDragging(true)
        event.stopPropagation()
        event.preventDefault()
      },
      onDrag: ({ event, delta: [dx, dy] }) => {
        event.stopPropagation()
        event.preventDefault()
        setPosition(([x, y]) => [
          x + dx / pinchScaleRef.current,
          y + dy / pinchScaleRef.current,
        ])
      },
      onDragEnd: ({ event }) => {
        setIsDragging(false)
        event.stopPropagation()
        event.preventDefault()
      },
    },
    { eventOptions: { passive: false } },
  )

  return (
    <circle
      {...bind()}
      id={id}
      cx={position[0]}
      cy={position[1]}
      r={15}
      fill="transparent"
      stroke="black"
      strokeWidth={5}
      style={{ touchAction: 'none' }}
      cursor={grabbing ? 'grabbing' : 'grab'}
    />
  )
}

export const ReactSVG1: React.FC = () => {
  return (
    <svg
      width="100%"
      height="300"
      style={{ overflow: 'visible', outline: '1px solid gray' }}
      className="absolute left-0 top-0 outline outline-1 outline-gray-700"
    >
      <DraggableCircle positionAtom={circle1Atom} id="circle1" />
      <DraggableCircle positionAtom={circle2Atom} id="circle2" />
    </svg>
  )
}

export const useReactSVGCircles = () => {
  return { circle1: circle1Atom, circle2: circle2Atom }
}
