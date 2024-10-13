import { format } from 'date-fns'

import { computeVirtualTime } from '@/services/time/virtual-time'

import type { StateCreatorWithSubscribe } from './types'

export const INITIAL_SPEED = 50

interface ClockSliceValues {
  frameDelta?: number
  setFrameDelta: (frameDelta: number) => void
  day: string
  setDay: (day: string) => void
  setAt: number
  virtualTimeZero: number
  speed: number
  setSpeed: (speed: number) => void
  setVirtualTimeZero: (virtualTimeZero?: number) => void
  paused: boolean
  loading: boolean
  pause: () => void
  unpause: () => void
}

export interface ClockSlice extends ClockSliceValues {
  setClock: (v: Partial<ClockSliceValues>) => void
}

export const createClockSlice: StateCreatorWithSubscribe<ClockSlice> = (
  set,
) => {
  const now = +Date.now()
  const day = format(now, 'yyyy-MM-dd')
  return {
    setClock: (v) => {
      set({
        setAt: v.setAt ?? +Date.now(),
        ...v,
      })
    },
    day,
    setDay: (day: string) => set({ day }),
    speed: INITIAL_SPEED,
    loading: true,
    setSpeed: (speed: number) =>
      set(({ virtualTimeZero, paused, setAt, speed: oldSpeed }) => {
        const currentVirtualTime = +computeVirtualTime({
          virtualTimeZero,
          setAt,
          speed: oldSpeed,
          paused,
        })
        const now = +Date.now()
        return {
          paused: false,
          speed,
          setAt: now,
          virtualTimeZero: currentVirtualTime,
        }
      }),
    setVirtualTimeZero: (virtualTimeZero = +Date.now()) =>
      set({
        virtualTimeZero,
        setAt: +Date.now(),
      }),
    setAt: now,
    virtualTimeZero: now,
    setFrameDelta: (frameDelta: number) => set({ frameDelta }),

    paused: true,
    pause: () => {
      set(({ virtualTimeZero, setAt, speed, paused }) => {
        const currentVirtualTime = +computeVirtualTime({
          virtualTimeZero,
          setAt,
          speed,
          paused,
        })
        return {
          paused: true,
          setAt: +Date.now(),
          virtualTimeZero: currentVirtualTime,
        }
      })
    },
    unpause: () => {
      set(({ virtualTimeZero, setAt, speed, paused }) => {
        const currentVirtualTime = +computeVirtualTime({
          virtualTimeZero,
          setAt,
          speed,
          paused,
        })
        return {
          paused: false,
          setAt: +Date.now(),
          virtualTimeZero: currentVirtualTime,
        }
      })
    },
  }
}
