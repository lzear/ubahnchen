'use client'

import React, { useRef } from 'react'

import { Button } from '@/components/ui/button'
import { formatTzInLocale } from '@/services/time/date-helpers'
import { useUbahnStore } from '@/store'

import { Ticking } from './ticking'

const timeZone = 'Europe/Berlin'

export const Clock = () => {
  const day = useUbahnStore((s) => s.day)
  const timeReference = useRef<HTMLSpanElement>(null)
  const weekday = formatTzInLocale(new Date(day), 'EEE', { timeZone })
  return (
    <Button className="font-mono">
      {/* Nothing displayed */}
      <Ticking timeReference={timeReference} />

      <div>
        <div>
          {weekday}, {day}
        </div>
        <div>
          <span ref={timeReference} />
        </div>
      </div>
    </Button>
  )
}
