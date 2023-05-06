import create from 'zustand'
import { subscribeWithSelector } from 'zustand/middleware'
import shallow from 'zustand/shallow'
import { StateCreatorWithSubscribe, StateFromFunctions } from './types'
import { createMapSlice } from './maps/reducer'
import { createClockSlice } from './clock'
import { createTripsSlice } from './trips'
import { createSettingsSlice } from './settings'
import { setLocalStorage, SettingsLocalStorage } from './local-storage'

interface DevelopmentSlice {
  isDev: boolean
  setDev: (isDevelopment: boolean) => void
}

const createDevelopmentSlice: StateCreatorWithSubscribe<DevelopmentSlice> = (
  set,
) => ({
  isDev: true,
  setDev: (isDevelopment: boolean) => set({ isDev: isDevelopment }),
})

export type State = StateFromFunctions<
  [
    typeof createMapSlice,
    typeof createClockSlice,
    typeof createDevelopmentSlice,
    typeof createTripsSlice,
    typeof createSettingsSlice,
  ]
>

export const useStore = create<State>()(
  subscribeWithSelector<State>((...a) => ({
    ...createMapSlice(...a),
    ...createClockSlice(...a),
    ...createDevelopmentSlice(...a),
    ...createTripsSlice(...a),
    ...createSettingsSlice(...a),
  })),
)

useStore.subscribe(
  (s): SettingsLocalStorage => ({
    displayStations: s.displayStations,
    displayStationNames: s.displayStationNames,
    showWater: s.showWater,
  }),
  (s) => setLocalStorage(s),
  { equalityFn: shallow },
)
