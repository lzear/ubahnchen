import {
  UrlParamType,
  useUrlParamsServer,
} from '@/components/dev/url-params/url-params-server'

import { ViewSvg } from '../actions/view'
import { Kruskal } from '../kruskal'
import type { SvgAction } from '../svg-actions'

import { SelectOutputFn } from './select-output-fn'

export const Output = () => {
  const { value } = useUrlParamsServer<UrlParamType.String, SvgAction>({
    name: 'fn',
    type: UrlParamType.String,
  })

  if (value === 'kruskal') return <Kruskal />
  if (value === 'view') return <ViewSvg />
  return (
    <div>
      <SelectOutputFn />
    </div>
  )
}
