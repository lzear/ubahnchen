'use client'

import React, { useContext, useRef } from 'react'

import { Pinch } from '@/components/dev/svg/pinch'
import { useUrlParams } from '@/components/dev/url-params/url-params'
import { UrlParamType } from '@/components/dev/url-params/url-params-server'

import { SourceContext } from '../../source-code/source-context'

import { useClosestPaths } from './use-closest-paths'
import { useClosestPoint } from './use-closest-point'
import { useDrawPaths } from './use-draw-paths'
import { usePathsPoints } from './use-paths-points'
import { useTruncatedPaths } from './use-truncated-paths'

const DoDraw = ({
  svgContainerRef,
  svgTempRef,
}: {
  svgContainerRef: React.RefObject<HTMLDivElement>
  svgTempRef: React.RefObject<SVGSVGElement>
}) => {
  useDrawPaths(svgContainerRef, svgTempRef)

  return <></>
}

const Div = (props: React.HTMLProps<HTMLDivElement>) => (
  <div {...props} className="size-full [&>svg]:overflow-visible" />
)

export const DrawSvgOutput = () => {
  const { code } = useContext(SourceContext)
  const svgContainerRef = useRef<HTMLDivElement>(null)
  const svgTempRef = useRef<SVGSVGElement>(null)

  const { value: draw } = useUrlParams<UrlParamType.Boolean, boolean>({
    name: 'draw',
    type: UrlParamType.Boolean,
  })

  useClosestPoint(svgContainerRef, svgTempRef, !!draw)
  useClosestPaths(svgContainerRef, svgTempRef, !!draw)
  useTruncatedPaths(svgContainerRef, svgTempRef, code)
  usePathsPoints(svgContainerRef, svgTempRef, code)

  const Container = draw ? Div : Pinch

  return (
    <div className="relative size-full flex-1 overflow-visible">
      <Container>
        <div
          ref={svgContainerRef}
          className="size-full [&>svg]:overflow-visible"
          dangerouslySetInnerHTML={{ __html: code }}
        />
        <svg
          ref={svgTempRef}
          className="pointer-events-none absolute left-0 top-0 overflow-visible outline outline-1 outline-gray-700"
        />
        {draw && (
          <DoDraw svgContainerRef={svgContainerRef} svgTempRef={svgTempRef} />
        )}
      </Container>
    </div>
  )
}
