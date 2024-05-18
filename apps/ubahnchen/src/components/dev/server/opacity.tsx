'use client'

import { atom, useAtom } from 'jotai'

export const opacityAtom = atom(0.4)
export const Opacity = () => {
  const [value, setValue] = useAtom(opacityAtom)
  return (
    <div className="form-control">
      <label className="label cursor-pointer justify-start gap-2 p-1">
        <input
          type="range"
          className="range range-xs"
          min={0}
          max={100}
          value={value * 100}
          onChange={(event) => setValue(Number(event.target.value) / 100)}
        />
        <span className="label-text">opacity</span>
      </label>
    </div>
  )
}
