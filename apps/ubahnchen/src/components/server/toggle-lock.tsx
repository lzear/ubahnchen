'use client'

import { atom, useAtom } from 'jotai'

import { ToggleCheckbox } from './toggle-checkbox'

export const lockAtom = atom(false)
export const ToggleLocked = () => {
  const [checked, setChecked] = useAtom(lockAtom)
  return (
    <ToggleCheckbox
      label="Lock SVG"
      checked={checked}
      onChange={(newValue) => setChecked(newValue)}
    />
  )
}
