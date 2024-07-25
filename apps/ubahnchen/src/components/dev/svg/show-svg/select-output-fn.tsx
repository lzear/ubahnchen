'use client'

import {
  UrlParamType,
  useUrlParams,
} from '@/components/dev/url-params/url-params'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

import type { SvgAction } from '../svg-actions'
import { SvgActions, svgActions } from '../svg-actions'

export const SelectOutputFn = () => {
  const { value, setValue } = useUrlParams<UrlParamType.String, SvgAction>({
    name: 'fn',
    type: UrlParamType.String,
  })
  return (
    <div>
      <Select
        onValueChange={(filename: SvgAction) => setValue(filename)}
        value={value ?? undefined}
      >
        <SelectTrigger className="h-7 gap-2 text-xs">
          <span className="text-muted-foreground">Action: </span>
          <SelectValue placeholder="Select a SVG action" />
        </SelectTrigger>
        <SelectContent>
          {svgActions.map((fn) => (
            <SelectItem key={fn} value={fn}>
              {SvgActions[fn].name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}
