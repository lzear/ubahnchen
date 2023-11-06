'use client'

import { usePathname, useRouter, useSearchParams } from 'next/navigation'

import { UrlParameter } from '../../app/[city]/search-parameters.js'

import { ToggleCheckbox } from './toggle-checkbox.js'

type Props = { checked: boolean }

export const ToggleStraightLines = ({ checked }: Props) => {
  const router = useRouter()
  const searchParameters = useSearchParams()
  const pathname = usePathname()
  return (
    <ToggleCheckbox
      onChange={(newValue) => {
        const parameters = new URLSearchParams(searchParameters.toString())
        parameters.set(UrlParameter.StraightLines, String(newValue))
        router.replace(`${pathname}?${parameters.toString()}`)
      }}
      checked={checked}
      label="Straight lines"
    />
  )
  return (
    <div className="form-control">
      <label className="label cursor-pointer justify-start gap-2">
        <input
          type="checkbox"
          checked={checked}
          className="checkbox checkbox-sm"
          onChange={(event) => {
            const parameters = new URLSearchParams(searchParameters.toString())
            parameters.set(
              UrlParameter.StraightLines,
              String(event.target.checked),
            )
            router.replace(`${pathname}?${parameters.toString()}`)
          }}
        />
        <span className="label-text">Straight lines</span>
      </label>
    </div>
  )
}
