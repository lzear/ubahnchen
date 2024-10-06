import type { RefObject } from 'react'
import { useEffect, useMemo, useRef } from 'react'
import { DragGesture } from '@use-gesture/vanilla'
import { atom, useAtom } from 'jotai/index'

import { pinchScaleRef } from '@/components/dev/svg/pinch'

export const useDraggableCircle = (
  svgContainerRef: RefObject<HTMLDivElement>,
  code: string,
) => {
  const circles = useRef<Map<string, SVGCircleElement>>(new Map())
  const { circle1, circle2, write1, write2 } = useMemo(() => {
    const circle1 = atom<[number, number]>([50, 50])
    const circle2 = atom<[number, number]>([150, 150])
    const write1 = atom(null, (_get, set, arg: [number, number]) => {
      set(circle1, arg)
    })
    const write2 = atom(null, (_get, set, arg: [number, number]) => {
      set(circle2, arg)
    })
    return { circle1, circle2, write1, write2 }
  }, [])

  const [, setPos1] = useAtom(write1)
  const [, setPos2] = useAtom(write2)

  const createDraggableCircle = (
    svg: SVGSVGElement,
    id: string,
    [x, y]: [number, number],
    setPos: (pos: [number, number]) => void,
  ) => {
    if (!circles.current.has(id)) {
      const circle = document.createElementNS(
        'http://www.w3.org/2000/svg',
        'circle',
      )
      circle.setAttribute('id', id)
      circle.setAttribute('cx', String(x))
      circle.setAttribute('cy', String(y))
      circle.setAttribute('r', String(15))
      circle.setAttribute('fill', 'transparent')
      circle.setAttribute('stroke', 'black')
      circle.setAttribute('stroke-width', '5')
      svg.append(circle)

      new DragGesture(
        circle,
        (state) => {
          state.event.stopPropagation()
          state.event.preventDefault()
          const { cx, cy } = circle.attributes as unknown as {
            cx: { value: string }
            cy: { value: string }
          }
          const newX = Number(cx.value) + state.delta[0] / pinchScaleRef.current
          const newY = Number(cy.value) + state.delta[1] / pinchScaleRef.current
          circle.setAttribute('cx', String(newX))
          circle.setAttribute('cy', String(newY))

          setPos([newX, newY])
        },
        { eventOptions: { passive: false } },
      )

      circles.current.set(id, circle)
    }
  }

  useEffect(() => {
    if (!svgContainerRef.current) return

    const svg = svgContainerRef.current.querySelector('svg')

    if (!svg) return

    createDraggableCircle(svg, 'circle1', [50, 50], setPos1)
    createDraggableCircle(svg, 'circle2', [150, 150], setPos2)

    const circlesCurrent = circles.current
    return () => {
      for (const [, circle] of circlesCurrent) circle?.remove()
      circlesCurrent.clear()
    }
  }, [code, setPos1, setPos2, svgContainerRef])

  return { circle1, circle2 }
}
