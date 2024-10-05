'use client'

import { usePathname, useRouter, useSearchParams } from 'next/navigation'

import { Checkbox } from '@/components/ui/checkbox'

import { zBoolean } from '../search-parameters'

type Props = {
  id: string
  checked: boolean
  onChange: (newValue: boolean) => void
  label: string
}

export const ToggleCheckbox = ({ checked, onChange, label, id }: Props) => (
  <div>
    <label
      htmlFor={id}
      className="flex cursor-pointer items-center space-x-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
    >
      <Checkbox
        id={id}
        checked={checked}
        onCheckedChange={(value) => onChange(!!value)}
      />
      <span>{label}</span>
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
    zBoolean.parse(searchParameters?.get(urlParameter)) ?? defaultValue ?? false
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
      id={`input${urlParameter}`}
      onChange={(newValue) => {
        const parameters = new URLSearchParams(searchParameters?.toString())
        parameters.set(urlParameter, String(newValue))
        router.replace(`${pathname}?${parameters.toString()}`)
      }}
      checked={value}
      label={label}
    />
  )
}
