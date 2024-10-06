import type React from 'react'
import { useContext, useEffect } from 'react'

import { SourceContext } from '@/components/dev/svg/source-code/source-context'
import {
  UrlParamType,
  useUrlParams,
} from '@/components/dev/url-params/url-params'
import { getClosestPathSingle } from '@ubahnchen/svg'
import { truthy } from '@ubahnchen/utils'

import { epsilonDefault, maxJumpDefault } from './consts'

export const useClosestPaths = (
  svgContainerRef: React.RefObject<HTMLDivElement>,
  svgTempRef: React.RefObject<SVGSVGElement>,
  draw: boolean,
) => {
  const { value: maxJump } = useUrlParams({
    name: 'max-jump',
    type: UrlParamType.Number,
  })
  const { value: epsilon } = useUrlParams({
    name: 'epsilon',
    type: UrlParamType.Number,
  })
  const { code } = useContext(SourceContext)
  useEffect(() => {
    const svgTempRefCurrent = svgTempRef.current
    if (!svgContainerRef.current || !svgTempRefCurrent) return
    const svg = svgContainerRef.current
    const paths = svg.querySelectorAll('path')
    const pathPairs: [SVGPathElement, SVGPathElement][] = [...paths]
      .flatMap((path1, idx1) =>
        [...paths].map(
          (path2, idx2): [SVGPathElement, SVGPathElement] | undefined =>
            idx1 <= idx2 ? [path1, path2] : undefined,
        ),
      )
      // eslint-disable-next-line unicorn/no-array-callback-reference
      .filter(truthy)

    const closestPaths = pathPairs
      .flatMap((p) => {
        const [path1, path2] = p
        const d1 = path1.getAttribute('d')
        const d2 = path2.getAttribute('d')
        if (!d1 || !d2) return null
        return d1 === d2
          ? null
          : [
              getClosestPathSingle({
                pathD1: d1,
                pathD2: d2,
                precisionGoal: epsilon ?? epsilonDefault,
                precisionInitial: (epsilon ?? epsilonDefault) * 16,
                // precisionInitial: 8,
                giveUp: maxJump ?? maxJumpDefault,
              }),
            ]
        // getClosestPathPath({
        //       pathD1: d1,
        //       pathD2: d2,
        //       precisionGoal: epsilon ?? epsilonDefault,
        //       // precisionInitial: 8,
        //       giveUp: maxJump ?? maxJumpDefault,
        //     })
      })
      // eslint-disable-next-line unicorn/no-array-callback-reference
      .filter(truthy)

    const closestPointElements =
      svgTempRefCurrent.querySelectorAll('.closest-path')
    for (const element of closestPointElements) element.remove()

    for (const path of closestPaths) {
      const { point1, point2 } = path
      const line = document.createElementNS(
        'http://www.w3.org/2000/svg',
        'line',
      )
      const [x1, y1] = point1
      const [x2, y2] = point2
      line.setAttribute('x1', String(x1))
      line.setAttribute('y1', String(y1))
      line.setAttribute('x2', String(x2))
      line.setAttribute('y2', String(y2))
      line.setAttribute('stroke', 'pink')
      line.setAttribute('stroke-linecap', 'round')
      line.setAttribute('stroke-width', '2')

      // classname
      line.setAttribute('class', 'closest-path')

      svgTempRefCurrent.append(line)
    }
    return () => {
      // remove closest-path
      const closestPointElements =
        svgTempRefCurrent.querySelectorAll('.closest-path')
      if (closestPointElements)
        for (const element of closestPointElements) element.remove()
    }
  }, [code, svgContainerRef, svgTempRef, draw, maxJump, epsilon])
}
