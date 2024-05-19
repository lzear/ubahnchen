'use client'

import type React from 'react'
import { useEffect } from 'react'
import { toZonedTime } from 'date-fns-tz'
import { shallow } from 'zustand/shallow'

import { formatTzInLocale } from '@/services/time/date-helpers'
import { computeVirtualTime } from '@/services/time/virtual-time'
import { useUbahnStore } from '@/store'

const timeZone = 'Europe/Berlin'

const useTimePlanned = (timeReference: React.RefObject<HTMLSpanElement>) => {
  const setDay = useUbahnStore((s) => s.setDay)
  useEffect(() => {
    let handle: ReturnType<typeof setInterval>
    const cancel = useUbahnStore.subscribe(
      ({ virtualTimeZero, setAt, speed, day, paused }) => ({
        virtualTimeZero,
        setAt,
        speed,
        day,
        paused,
      }),
      ({ virtualTimeZero, setAt, speed, day, paused }) => {
        const updateTime = () => {
          if (timeReference.current) {
            const virtualTime = computeVirtualTime({
              virtualTimeZero,
              setAt,
              speed,
              paused,
            })
            const zonedDate = toZonedTime(virtualTime, timeZone)
            const newday = formatTzInLocale(zonedDate, 'yyyy-MM-dd', {
              timeZone: 'Europe/Berlin',
            })
            if (newday !== day) setDay(newday)
            timeReference.current.textContent = formatTzInLocale(
              zonedDate,
              'HH:mm',
            )
          }
        }
        updateTime()
        if (handle) clearInterval(handle)
        handle = setInterval(updateTime, Math.min(60_000 / speed, 1000))
      },
      { equalityFn: shallow, fireImmediately: true },
    )
    return () => {
      if (handle) clearInterval(handle)
      cancel()
    }
  }, [setDay, timeReference])
}

export const Ticking: React.FC<{
  timeReference: React.RefObject<HTMLSpanElement>
}> = ({ timeReference }) => {
  useTimePlanned(timeReference)
  // eslint-disable-next-line unicorn/no-null
  return null
}
