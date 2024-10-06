'use client'

import {
  UrlParamType,
  useUrlParams,
  useUrlParamsMulti,
} from '@/components/dev/url-params/url-params'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { SliderTwo } from '@/components/uiui/slider-2'

import { epsilonDefault, maxJumpDefault } from './consts'

export const TopBarForm = () => {
  const { setValue: setMaxJump, value: maxJump } = useUrlParams({
    name: 'max-jump',
    type: UrlParamType.Number,
  })
  const { setValue: setEpsilon, value: epsilon } = useUrlParams({
    name: 'epsilon',
    type: UrlParamType.Number,
  })
  const { setValues: setTruncate, values: truncate } = useUrlParamsMulti([
    { name: 'from', type: UrlParamType.Number },
    { name: 'to', type: UrlParamType.Number },
  ])
  return (
    <>
      <div className="flex max-w-sm items-center gap-1">
        <Label htmlFor="max-jump" className="h-5 text-xs">
          Max. jump
        </Label>
        <Input
          placeholder={String(maxJumpDefault)}
          onChange={(event) => setMaxJump(Number(event.target.value))}
          type="number"
          id="max-jump"
          size={5}
          className="h-6 w-24"
          value={maxJump ?? undefined}
        />
      </div>
      <div className="flex max-w-sm items-center gap-1">
        <Label htmlFor="epsilon" className="h-5 text-xs">
          Epsilon
        </Label>
        <Input
          placeholder={String(epsilonDefault)}
          onChange={(event) => setEpsilon(Number(event.target.value))}
          type="number"
          id="epsilon"
          size={5}
          className="h-6 w-24"
          value={epsilon ?? undefined}
        />
      </div>
      <div className="flex w-32 items-center gap-1">
        <Label htmlFor="truncate" className="h-5 text-xs">
          Truncate
        </Label>
        <SliderTwo
          step={1}
          id="truncate"
          defaultValue={[truncate[0] ?? 0, truncate[1] ?? 100]}
          onValueChange={([from, to]) => setTruncate([from, to])}
        />
      </div>
    </>
  )
}
