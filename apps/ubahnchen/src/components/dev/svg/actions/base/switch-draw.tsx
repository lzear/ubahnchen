'use client'

import {
  UrlParamType,
  useUrlParams,
} from '@/components/dev/url-params/url-params'
import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'

export const SwitchDraw = () => {
  const { value, setValue } = useUrlParams<UrlParamType.Boolean, boolean>({
    name: 'draw',
    type: UrlParamType.Boolean,
  })
  return (
    <Label
      htmlFor="switch-draw"
      className="flex items-center space-x-1 text-xs"
    >
      <span>Draw</span>
      <Switch
        id="switch-draw"
        onCheckedChange={(e) => setValue(e)}
        checked={value ?? false}
      />
    </Label>
  )
}
