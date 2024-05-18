'use client'

import { usePathname, useRouter, useSearchParams } from 'next/navigation'

import { zBoolean } from '@/app/[city]/search-parameters'

type Props = {
  checked: boolean
  onChange: (newValue: boolean) => void
  label: string
}

export const ToggleCheckbox = ({ checked, onChange, label }: Props) => (
  <div className="form-control">
    <label className="label cursor-pointer justify-start gap-2 p-1">
      <input
        type="checkbox"
        checked={checked}
        className="checkbox checkbox-sm"
        onChange={(event) => onChange(event.target.checked)}
      />
      <span className="label-text">{label}</span>
    </label>
  </div>
)

type DD = {
  defaultValue: boolean
  label: string
  urlParameter: string
}

export const useBooleanUrlParameter = (
  urlParameter: string,
  defaultValue?: boolean,
) => {
  const searchParameters = useSearchParams()
  return (
    zBoolean.parse(searchParameters.get(urlParameter)) ?? defaultValue ?? false
  )
}

export const ToggleUrlParameter = ({
  label,
  defaultValue,
  urlParameter,
}: DD) => {
  const router = useRouter()
  const searchParameters = useSearchParams()
  const value = useBooleanUrlParameter(urlParameter, defaultValue)
  const pathname = usePathname()
  return (
    <ToggleCheckbox
      onChange={(newValue) => {
        const parameters = new URLSearchParams(searchParameters.toString())
        parameters.set(urlParameter, String(newValue))
        router.replace(`${pathname}?${parameters.toString()}`)
      }}
      checked={value}
      label={label}
    />
  )
}
