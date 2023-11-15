'use client'

import { atom, useAtom } from 'jotai'

import { ToggleCheckbox } from './toggle-checkbox'

export const ignorePointer = atom(false)
export const TogglePointer = () => {
  const [checked, setChecked] = useAtom(ignorePointer)
  return (
    <ToggleCheckbox
      label="Ignore pointer events"
      checked={checked}
      onChange={(newValue) => setChecked(newValue)}
    />
  )
}
