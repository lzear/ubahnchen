import type React from 'react'
import { useEffect } from 'react'
import { MoveGesture } from '@use-gesture/vanilla'

import { pinchScaleRef } from '@/components/dev/svg/pinch'
import type { ClosestPathPoint } from '@ubahnchen/svg'
import { getClosestPathPoint } from '@ubahnchen/svg'
import type { Point } from '@ubahnchen/utils'
import { truthy } from '@ubahnchen/utils'

export const drawClosestPoints = (
  to: Point,
  svgContainer: HTMLDivElement,
  svgTemp: SVGSVGElement,
  autoRemove: boolean,
  color = 'red',
) => {
  const rmove = () => {
    const closestPointElements = svgTemp.querySelectorAll('.closest-point')
    for (const element of closestPointElements) element.remove()
  }
  if (autoRemove) rmove()
  const paths = svgContainer.querySelectorAll('path')
  const closestPoints: ClosestPathPoint[] = [...paths]
    .map((path) => {
      const d = path.getAttribute('d')
      return d && getClosestPathPoint(d, to, 0.1)
    })
    // eslint-disable-next-line unicorn/no-array-callback-reference
    .filter(truthy)

  // Create a template circle
  const templateCircle = document.createElementNS(
    'http://www.w3.org/2000/svg',
    'circle',
  )
  templateCircle.setAttribute('r', '4')
  templateCircle.setAttribute('fill', color)
  templateCircle.setAttribute('class', 'closest-point')

  for (const { point } of closestPoints) {
    const circle = templateCircle.cloneNode() as SVGCircleElement
    const [x, y] = point
    circle.setAttribute('cx', String(x))
    circle.setAttribute('cy', String(y))
    svgTemp.append(circle)
  }
  return rmove
}

export const useClosestPoint = (
  svgContainerRef: React.RefObject<HTMLDivElement>,
  svgTempRef: React.RefObject<SVGSVGElement>,
  draw: boolean,
) => {
  useEffect(() => {
    const initMouseOver = (
      svgContainer: HTMLDivElement,
      svgTemp: SVGSVGElement,
    ) =>
      new MoveGesture(svgContainer, (state) => {
        const offset = svgContainer.getBoundingClientRect()

        const x = (state.xy[0] - offset.left) / pinchScaleRef.current
        const y = (state.xy[1] - offset.top) / pinchScaleRef.current

        drawClosestPoints([x, y], svgContainer, svgTemp, true)
      })

    if (!svgContainerRef.current || !svgTempRef.current) return
    const gesture = initMouseOver(svgContainerRef.current, svgTempRef.current)

    return () => {
      gesture.destroy()
    }
  }, [svgContainerRef, svgTempRef, draw])
}
