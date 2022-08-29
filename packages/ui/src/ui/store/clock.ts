import { format } from 'date-fns'
import { computeVirtualTime } from '../utils/time-conversion'
import { StateCreatorWithSubscribe } from './types'

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
    speed: 50,
    setSpeed: (speed: number) =>
      set(({ virtualTimeZero, setAt, speed: oldSpeed }) => {
        const currentVirtualTime = +computeVirtualTime({
          virtualTimeZero,
          setAt,
          speed: oldSpeed,
        })
        const now = +Date.now()
        return {
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
  }
}
