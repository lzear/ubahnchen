import React from 'react'

import { searchParamsServerContext } from '@/components/dev/svg/search-params-server-context'
import { SvgDev } from '@/components/dev/svg/svg-dev'

const AppComponent = ({
  searchParams,
}: {
  searchParams: Record<string, string>
}) => {
  searchParamsServerContext.setParams(searchParams)

  return <SvgDev file={searchParams.file} />
}

export default AppComponent
