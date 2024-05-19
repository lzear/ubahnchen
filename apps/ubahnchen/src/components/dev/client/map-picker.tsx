'use client'

import { usePathname, useRouter, useSearchParams } from 'next/navigation'

import { UrlParameter } from '@/components/dev/url-params'
import type { City } from '@ubahnchen/cities'
import { cities } from '@ubahnchen/cities'

export const MapPicker = ({ city }: { city: City }) => {
  const { maps } = cities[city]
  const options = Object.keys(maps)

  const router = useRouter()
  const searchParameters = useSearchParams()
  const pathname = usePathname()
  return (
    <div className="form-control w-full max-w-xs">
      <select
        className="select select-xs"
        onChange={(v) => {
          const parameters = new URLSearchParams(searchParameters?.toString())
          const clicked = String(v.target.value)
          parameters.set(UrlParameter.Map, clicked)
          router.replace(`${pathname}?${parameters.toString()}`)
        }}
      >
        <option value="asdf" className="label-text">
          ...
        </option>
        {options.map((key) => {
          const map = key in maps && maps[key]
          if (!map) return null
          return (
            <option value={key} key={key} className="label-text">
              {map.name}
            </option>
          )
        })}
      </select>
    </div>
  )
}
