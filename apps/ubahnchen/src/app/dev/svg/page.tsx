import React from 'react'

import { DijkstraSvg } from '@/components/dev/svg/actions/dijkstra'
import { DrawSvg } from '@/components/dev/svg/actions/draw'
import { ViewSvg } from '@/components/dev/svg/actions/view'
import { searchParamsServerContext } from '@/components/dev/svg/search-params-server-context'
import type { SvgAction } from '@/components/dev/svg/svg-actions'
import { isSvgAction } from '@/components/dev/svg/svg-actions'

const components = {
  draw: DrawSvg,
  view: ViewSvg,
  dijkstra: DijkstraSvg,
} satisfies Record<
  SvgAction,
  React.FC<{ searchParams?: Record<string, string> }>
>

const AppComponent = ({
  searchParams,
}: {
  searchParams: Record<string, string>
}) => {
  searchParamsServerContext.setParams(searchParams)
  const Component = isSvgAction(searchParams.fn)
    ? components[searchParams.fn]
    : DrawSvg

  return Component ? <Component searchParams={searchParams} /> : null
}

export default AppComponent
