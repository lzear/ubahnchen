'use client'

import React, { useContext, useEffect, useRef, useState } from 'react'
import { useAtom } from 'jotai'
import _ from 'lodash'

import { Pinch } from '@/components/dev/svg/pinch'
import {
  ReactSVG1,
  useReactSVGCircles,
} from '@/components/dev/svg/show-svg/draggable-circle/02-react'
import { SourceContext } from '@/components/dev/svg/source-code/source-context'
import {
  UrlParamType,
  useUrlParams,
} from '@/components/dev/url-params/url-params'
import { useLogMount } from '@/utils/use-log-mount'
import { computeDijkstra, truncate } from '@ubahnchen/svg'
import type { Point } from '@ubahnchen/utils'

import { drawClosestPoints } from '../draw/use-closest-point'

export const SvgOut = () => {
  const { code } = useContext(SourceContext)
  const svgContainerRef = useRef<HTMLDivElement>(null)
  const svgTempRef = useRef<SVGSVGElement>(null)
  const rs = useReactSVGCircles()
  useLogMount('svg-out')

  const { value: desiredColor } = useUrlParams<UrlParamType.String, string>({
    name: 'color',
    type: UrlParamType.String,
  })

  const [c1] = useAtom(rs.circle1)
  const [c2] = useAtom(rs.circle2)
  const [resultElements, setResultElements] = useState<JSX.Element[]>([])

  const debouncedComputeDijkstra = useRef(
    _.debounce(
      (
        start: Point,
        end: Point,
        paths: {
          id: string
          d: string
          color: string
        }[],
        color: string | undefined,
      ) => {
        const result = computeDijkstra(
          start,
          end,
          paths,
          color ? `#${color}` : undefined,
        )
        console.log(`antoinelog result`, result)

        const svgElems: JSX.Element[] = []
        let prev = null
        let prev1 = null
        let i = 0
        for (const node of result) {
          prev = prev1
          prev1 = node
          if (!prev) continue
          if (
            prev.type !== 'Path' ||
            node.type !== 'Path' ||
            prev.pathPoint.path.id !== node.pathPoint.path.id
          ) {
            svgElems.push(
              <line
                key={`segment-${i++}`}
                x1={prev.point[0]}
                y1={prev.point[1]}
                x2={node.point[0]}
                y2={node.point[1]}
                stroke="pink"
                strokeWidth="15"
                // dotted
                strokeDasharray="15,15"
              />,
            )
            continue
          }
          const p = paths.find((p) => p.id === node.pathPoint.path.id)
          if (!p) throw new Error('Path not found')
          const t = truncate(
            p.d,
            prev.pathPoint.pathLength,
            node.pathPoint.pathLength,
          )
          svgElems.push(
            <path
              key={`path-${i++}`}
              d={t}
              stroke="pink"
              strokeWidth="14"
              fill="none"
              strokeDasharray="15,15"
            />,
          )
        }
        setResultElements(svgElems)
      },
      2000,
    ),
  ).current

  useEffect(() => {
    const container = svgContainerRef.current
    const svgTemp = svgTempRef.current
    if (!(container && svgTemp)) {
      return
    }

    drawClosestPoints(c1, container, svgTemp, false, 'red')
    const rm = drawClosestPoints(c2, container, svgTemp, false, 'blue')

    const paths = [...container.querySelectorAll('path')].map((path) => {
      return {
        id: path.getAttribute('id')!,
        d: path.getAttribute('d')!,
        color: path.getAttribute('stroke')!,
      }
    })

    debouncedComputeDijkstra(c1, c2, paths, desiredColor ?? undefined)

    return () => {
      rm()
      debouncedComputeDijkstra.cancel()
    }
  }, [c1, c2, code, debouncedComputeDijkstra, desiredColor])

  return (
    <Pinch key={234}>
      <div
        ref={svgContainerRef}
        className="[&>svg]:overflow-visible [&>svg]:outline [&>svg]:outline-1 [&>svg]:outline-gray-700"
        dangerouslySetInnerHTML={{ __html: code }}
      />

      <svg
        ref={svgTempRef}
        className="pointer-events-none absolute left-0 top-0 overflow-visible outline outline-1 outline-gray-700"
      >
        {/*{renderPathSegments()}*/}
        {resultElements}
      </svg>
      <ReactSVG1 />
    </Pinch>
  )
}
