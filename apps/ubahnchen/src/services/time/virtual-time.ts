import { useShallow } from 'zustand/react/shallow'

import { useUbahnStore } from '@/store'

type VirtualTimeParams = {
  virtualTimeZero: number
  setAt: number
  speed: number
  paused: boolean
}

const selectVirtualTime = (state: VirtualTimeParams) => state

export const computeVirtualTime = ({
  virtualTimeZero,
  setAt,
  speed,
  paused,
}: VirtualTimeParams) => {
  if (paused) return new Date(virtualTimeZero)
  const now = +Date.now()

  const diffX = (now - setAt) * speed
  return new Date(virtualTimeZero + diffX)
}

export const useVirtualTime = () => {
  const payload = useUbahnStore(useShallow(selectVirtualTime))
  return computeVirtualTime(payload)
}

export const getVirtualTime = () => {
  const state = useUbahnStore.getState()
  return computeVirtualTime(state)
}
