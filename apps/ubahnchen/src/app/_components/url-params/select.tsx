'use client'

import type { ComponentProps } from 'react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { twMerge } from 'tailwind-merge'

type Props = {
  name: string
  label: string
  options: {
    value: string
    label: string
  }[]
} & ComponentProps<'div'>

export const SelectUrlParam = ({
  name,
  options,
  label,
  className,
  ...divProps
}: Props) => {
  const router = useRouter()
  const searchParameters = useSearchParams()
  const pathname = usePathname()
  const parameters = new URLSearchParams(searchParameters.toString())
  const value = parameters.get(name) ?? undefined
  return (
    <div
      className={twMerge('form-control w-full max-w-xs', className)}
      {...divProps}
    >
      <label>{label}</label>
      <select
        className="select select-xs"
        value={value}
        onChange={(event) => {
          const parameters = new URLSearchParams(searchParameters.toString())
          parameters.set(name, event.target.value)
          router.replace(`${pathname}?${parameters.toString()}`)
        }}
        defaultValue=""
      >
        <option key={1} value="" disabled>
          Select route
        </option>
        {options.map((option) => (
          <option
            value={option.value}
            key={option.value}
            className="label-text"
          >
            {option.label}
          </option>
        ))}
      </select>
    </div>
  )
}
