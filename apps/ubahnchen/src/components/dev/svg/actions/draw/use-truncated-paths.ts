import type { RefObject } from 'react'
import { useEffect } from 'react'

import {
  UrlParamType,
  useUrlParamsMulti,
} from '@/components/dev/url-params/url-params'
import { truncate } from '@ubahnchen/svg'

export const useTruncatedPaths = (
  svgContainerRef: RefObject<HTMLDivElement>,
  svgTempRef: RefObject<SVGSVGElement>,
  code: string,
) => {
  const {
    values: [from = 0, to = 100],
  } = useUrlParamsMulti([
    { name: 'from', type: UrlParamType.Number },
    { name: 'to', type: UrlParamType.Number },
  ])
  useEffect(() => {
    if (from === 0 && to === 100) return
    const tmp = svgTempRef.current
    if (!svgContainerRef.current || !tmp) return
    const svg = svgContainerRef.current

    const pathBase = document.createElementNS(
      'http://www.w3.org/2000/svg',
      'path',
    )
    pathBase.setAttribute('stroke', '#409')
    pathBase.setAttribute('stroke-width', '8')
    pathBase.setAttribute('opacity', '0.9')
    pathBase.setAttribute('fill', 'none')
    pathBase.setAttribute('class', 'truncated-path')

    for (const p of svg.querySelectorAll('path')) {
      const pd = p.getAttribute('d')
      if (!pd) continue
      const l = p.getTotalLength()
      const truncated = truncate(
        pd,
        ((from ?? 0) / 100) * l,
        ((to ?? 100) / 100) * l,
      )
      const path = pathBase.cloneNode() as SVGPathElement
      path.setAttribute('d', truncated)
      svgTempRef.current.append(path)
    }

    return () => {
      const truncatedPaths = tmp.querySelectorAll('.truncated-path')
      for (const path of truncatedPaths) path.remove()
    }
  }, [svgContainerRef, svgTempRef, code, from, to])
}
