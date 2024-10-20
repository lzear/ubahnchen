'use client'

import type { ChangeEvent } from 'react'

import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { Label } from '../ui/label'

import { Menu } from './02-menu'
import { DisplayMenu } from './03-display-menu'
import { TopBarComparisonInput, useComparisonMethod } from './comparison'
import { ModeDropdown } from './mode-dropdown'

const onFileChange = async (event: ChangeEvent<HTMLInputElement>) => {
  const file = event.target.files?.[0]
  if (file) {
    await file.text()
  }
}

export const TopBar = () => {
  const [comparison, , toggle] = useComparisonMethod()
  return (
    <div>
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="picture">Picture</Label>
        <Input
          id="picture"
          type="file"
          onChange={(event) => void onFileChange(event)}
        />
      </div>
      <ModeDropdown />
      <Button onClick={() => void toggle()}>{comparison.comparison}</Button>
      <TopBarComparisonInput comparison={comparison} />
      <DisplayMenu />
      <Menu />
    </div>
  )
}
