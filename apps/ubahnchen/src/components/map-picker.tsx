'use client'

import { usePathname, useRouter, useSearchParams } from 'next/navigation'

import type { City } from '@ubahnchen/cities'
import { getCity } from '@ubahnchen/cities'

import { UrlParameter } from '../app/[city]/search-parameters'

export const MapPicker = ({ city }: { city: City }) => {
  const { maps } = getCity(city)
  const options = Object.keys(maps)

  const router = useRouter()
  const searchParameters = useSearchParams()
  const pathname = usePathname()
  return (
    <div className="form-control w-full max-w-xs">
      <select
        className="select select-xs"
        placeholder="Select a route type"
        onChange={(v) => {
          const parameters = new URLSearchParams(searchParameters.toString())
          const clicked = String(v.target.value)
          parameters.set(UrlParameter.Map, clicked)
          router.replace(`${pathname}?${parameters.toString()}`)
        }}
      >
        <option value="asdf" className="label-text">
          ...
        </option>
        {options.map((key) => {
          const map = key in maps && maps[key as keyof typeof maps]
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
