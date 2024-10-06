import type React from 'react'
import { useContext, useEffect, useRef } from 'react'
import { DragGesture } from '@use-gesture/vanilla'

import { SourceContext } from '@/components/dev/svg/source-code/source-context'
import { simplify } from '@ubahnchen/svg'
import type { Point } from '@ubahnchen/utils'

export const useDrawPaths = (
  svgContainerRef: React.RefObject<HTMLDivElement>,
  svgTempRef: React.RefObject<SVGSVGElement>,
) => {
  const { setCode } = useContext(SourceContext)
  const points = useRef<Point[]>([])
  useEffect(() => {
    const initDrawing = (svg: HTMLElement, svgTemp: SVGSVGElement) =>
      new DragGesture(
        svg,
        (state) => {
          if (!state.down) {
            if (points.current.length < 2) return (points.current = [])
            const d = simplify(points.current, { tolerance: 2, closed: false })
            const path = document.createElementNS(
              'http://www.w3.org/2000/svg',
              'path',
            )
            path.setAttribute('fill', 'none')
            path.setAttribute('stroke', 'black')
            path.setAttribute('stroke-width', '3')
            path.setAttribute('d', d)
            const code = svg.innerHTML
            const idx = code.indexOf('</svg>')

            setCode(
              // code.includes('<svg')
              idx === -1
                ? `<svg xmlns="http://www.w3.org/2000/svg">
    ${path.outerHTML}
</svg>`
                : `${code.slice(0, idx)}    ${path.outerHTML}
${code.slice(idx)}`,
            )
            points.current = []
            const drawTemp = svgTemp.querySelectorAll('.draw-temp')
            for (const el of drawTemp) el.remove()
            return
          }
          state.event.stopPropagation()
          state.event.preventDefault()
          const offset = svg.getBoundingClientRect()
          const lastPoint = points.current.at(-1)
          const roundedPoint = [
            Math.round(state.xy[0] - offset.left),
            Math.round(state.xy[1] - offset.top),
          ] as Point
          if (
            !lastPoint ||
            lastPoint[0] !== roundedPoint[0] ||
            lastPoint[1] !== roundedPoint[1]
          ) {
            points.current.push(roundedPoint)
            const rect = document.createElementNS(
              'http://www.w3.org/2000/svg',
              'rect',
            )
            const DIM = 3
            rect.setAttribute('x', String(roundedPoint[0] - DIM / 2))
            rect.setAttribute('y', String(roundedPoint[1] - DIM / 2))
            rect.setAttribute('width', String(DIM))
            rect.setAttribute('height', String(DIM))
            rect.setAttribute('stroke', 'blue')
            rect.setAttribute('stroke-width', '0.5')
            rect.setAttribute('fill', 'transparent')
            rect.setAttribute('opacity', '0.5')
            rect.setAttribute('class', 'draw-temp')
            svgTemp.append(rect)
          }
        },
        { eventOptions: { passive: false } },
      )

    const svg = svgTempRef.current
    console.log(`antoinelog svg`, svg)

    if (!svgContainerRef.current || !svg) return
    const gesture = initDrawing(svgContainerRef.current, svg)
    return () => {
      const drawTemp = svg?.querySelectorAll('.draw-temp')
      if (drawTemp) for (const el of drawTemp) el.remove()
      gesture.destroy()
    }
  }, [setCode, svgContainerRef, svgTempRef])
}
