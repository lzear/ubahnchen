'use client'

import * as React from 'react'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

import { Button } from '@/components/ui/button'

export const ModeToggle = () => {
  const { setTheme, theme } = useTheme()

  return (
    <Button
      key="qwer"
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      variant="toggle"
    >
      <Sun className="size-[1.2rem] rotate-0 scale-100 transition-transform duration-300 ease-in-out dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute size-[1.2rem] rotate-90 scale-0 transition-transform duration-300 ease-in-out dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
