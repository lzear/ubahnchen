'use client'

import { usePathname, useRouter, useSearchParams } from 'next/navigation'

import { UrlParameter } from '@/components/dev/url-params'
import { gtfsTypes } from '@/gtfs-data/gtfs-types'

export const SelectRouteType = ({
  options,
  value = [],
}: {
  value: number[]
  options: number[]
}) => {
  const router = useRouter()
  const searchParameters = useSearchParams()
  const pathname = usePathname()
  return (
    <div className="form-control w-full max-w-xs">
      <select
        className="select select-xs"
        value="vvv"
        onChange={(v) => {
          const parameters = new URLSearchParams(searchParameters?.toString())
          const clicked = Number(v.target.value)
          const newValues = value.includes(clicked)
            ? value.filter((v) => v !== clicked)
            : [...value, clicked]
          parameters.set(
            UrlParameter.RouteType,
            newValues.sort((a, b) => a - b).join('-'),
          )
          router.replace(`${pathname}?${parameters.toString()}`)
        }}
      >
        <option value="vvv">{value.join(' ')}</option>
        {options.map((_routeType) => {
          const routeType = Number(_routeType)
          return (
            <option value={routeType} key={routeType} className="label-text">
              {value.includes(routeType) ? '✓ ' : ''}
              {[routeType, gtfsTypes[routeType]?.name]
                .filter(Boolean)
                .join(' - ')}
            </option>
          )
        })}
      </select>
    </div>
  )
}
