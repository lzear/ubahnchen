import { create } from 'zustand'
import { subscribeWithSelector } from 'zustand/middleware'

// import shallow from 'zustand/shallow'
// import { createMapSlice } from './maps/reducer'
import { createClockSlice } from './clock'
// import type { SettingsLocalStorage } from './local-storage'
// import { setLocalStorage } from './local-storage'
// import type { SettingsLocalStorage } from './local-storage'
// import { setLocalStorage } from './local-storage'
// import { createSettingsSlice } from './settings'
// import { createTripsSlice } from './trips'
import type { StateCreatorWithSubscribe, StateFromFunctions } from './types'

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
    // typeof createMapSlice,
    typeof createClockSlice,
    typeof createDevelopmentSlice,
    // typeof createTripsSlice,
    // typeof createSettingsSlice,
  ]
>

export const useUbahnStore = create<State>()(
  subscribeWithSelector<State>((...a) => ({
    // ...createMapSlice(...a),
    ...createClockSlice(...a),
    ...createDevelopmentSlice(...a),
    // ...createTripsSlice(...a),
    // ...createSettingsSlice(...a),
  })),
)

// useStore.subscribe(
//   (_s): SettingsLocalStorage => ({
//     // displayStations: s.displayStations,
//     // displayStationNames: s.displayStationNames,
//     // showWater: s.showWater,
//   }),
//   (s) => setLocalStorage(s),
//   { equalityFn: shallow },
// )
