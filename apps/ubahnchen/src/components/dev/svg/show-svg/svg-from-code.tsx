'use client'

import { useContext, useEffect, useRef } from 'react'
import { DragGesture } from '@use-gesture/vanilla'

import { pinchScaleRef } from '@/components/dev/client/pinch'

import { SourceContext } from '../source-code/source-context'

export const SvgFromCode = () => {
  const { code } = useContext(SourceContext)
  const svgContainerRef = useRef<HTMLDivElement>(null)
  const circles = useRef<Map<string, SVGCircleElement>>(new Map())

  const addDraggableCircles = (svg: SVGSVGElement) => {
    const createDraggableCircle = (id: string, x: number, y: number) => {
      circles.current.get(id)?.remove()
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

      const dragGesture = new DragGesture(
        circle,
        (state) => {
          state.event.stopPropagation()
          state.event.preventDefault()
          const { cx, cy } = circle.attributes as unknown as {
            cx: { value: string }
            cy: { value: string }
          }
          circle.setAttribute(
            'cx',
            String(Number(cx.value) + state.delta[0] / pinchScaleRef.current),
          )
          circle.setAttribute(
            'cy',
            String(Number(cy.value) + state.delta[1] / pinchScaleRef.current),
          )
        },
        {
          eventOptions: { passive: false },
        },
      )
      console.log(`antoinelog dragGesture`, dragGesture)

      circles.current.set(id, circle)
    }
    createDraggableCircle('circle1', 50, 50)
    createDraggableCircle('circle2', 150, 150)
  }

  useEffect(() => {
    if (!svgContainerRef.current) return

    // Assuming the SVG content is the first element in the ref'd div
    const svg = svgContainerRef.current.querySelector('svg')

    if (!svg) return

    addDraggableCircles(svg)
    const c = circles.current
    return () => {
      for (const [, circle] of c) circle?.remove()
      c.clear()
    }
  }, [code]) // Re-run when `code` changes

  return (
    <>
      <div className="flex-1 overflow-visible">
        <div
          ref={svgContainerRef}
          className="p-4 [&>svg]:overflow-visible"
          dangerouslySetInnerHTML={{ __html: code }}
        />
      </div>
    </>
  )
}
