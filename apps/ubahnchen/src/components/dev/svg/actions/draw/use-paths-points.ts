import type { RefObject } from 'react'
import { useLayoutEffect } from 'react'

import { parsePathString } from '@ubahnchen/svg'
import type { Point } from '@ubahnchen/utils'
import { truthy } from '@ubahnchen/utils'

export const usePathsPoints = (
  svgContainerRef: RefObject<HTMLDivElement>,
  svgTempRef: RefObject<SVGSVGElement>,
  code: string,
) => {
  useLayoutEffect(() => {
    const tmp = svgTempRef.current
    if (!svgContainerRef.current || !tmp) return
    const svg = svgContainerRef.current
    const pathPoints: Point[] = [...svg.querySelectorAll('path')]
      .flatMap((path) => {
        const pd = path.getAttribute('d')
        return pd ? parsePathString(pd).map((s) => [s[1], s[2]] as Point) : null
      })
      // eslint-disable-next-line
      .filter(truthy)
    const pathBase = document.createElementNS(
      'http://www.w3.org/2000/svg',
      'circle',
    )
    pathBase.setAttribute('r', '2')
    pathBase.setAttribute('fill', '#f0f')
    pathBase.setAttribute('class', 'path-point')

    for (const [x, y] of pathPoints) {
      const circle = pathBase.cloneNode() as SVGCircleElement
      circle.setAttribute('cx', String(x))
      circle.setAttribute('cy', String(y))
      svgTempRef.current.append(circle)
    }
    return () => {
      const pathPoints = tmp.querySelectorAll('.path-point')
      for (const pathPoint of pathPoints) pathPoint.remove()
    }
  }, [svgContainerRef, svgTempRef, code])
}
