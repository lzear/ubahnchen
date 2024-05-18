'use client'

import { usePathname, useRouter, useSearchParams } from 'next/navigation'

import { UrlParameter } from '../../app/[city]/search-parameters'

import { ToggleCheckbox } from './toggle-checkbox'

type Props = { checked: boolean }

export const ToggleMergeStops = ({ checked }: Props) => {
  const router = useRouter()
  const searchParameters = useSearchParams()
  const pathname = usePathname()
  return (
    <ToggleCheckbox
      onChange={(newValue) => {
        const parameters = new URLSearchParams(searchParameters.toString())
        parameters.set(UrlParameter.MergeStops, String(newValue))
        router.replace(`${pathname}?${parameters.toString()}`)
      }}
      checked={checked}
      label="Merge stops"
    />
  )
}
