import {
  INIT_APPROX_PX,
  INIT_HIDPI,
  INIT_RATE_MS,
  INIT_SHADOW,
} from '../trains/consts'
import { trainManager } from '../trains/train-manager'
import { StateCreatorWithSubscribe } from './types'
import { useStore } from './store'
import { fromStorage } from './local-storage'

interface SettingsSliceValues {
  displayStations: boolean
  displayStationNames: boolean
  shadow: number | undefined
  liveMode: boolean
  hidpi: boolean
  pathOffsetDelta: number
  opacityFade: boolean
  frameRateThrottle: number
  showWater: boolean
  devInfo: boolean
}

export interface SettingsSlice extends SettingsSliceValues {
  settingsSetter: (v: Partial<SettingsSliceValues>) => void
}

export const createSettingsSlice: StateCreatorWithSubscribe<SettingsSlice> = (
  set,
) => ({
  displayStations: fromStorage?.displayStations ?? true,
  displayStationNames: fromStorage?.displayStationNames ?? true,
  showWater: fromStorage?.showWater ?? true,
  shadow: INIT_SHADOW,
  liveMode: false,
  hidpi: INIT_HIDPI,
  pathOffsetDelta: INIT_APPROX_PX, // px
  opacityFade: true,
  frameRateThrottle: INIT_RATE_MS, // ms
  devInfo: false,

  settingsSetter: (v) => {
    if (v.pathOffsetDelta !== undefined) {
      trainManager.pathApprox.clear()
      trainManager.pathApproxDelta = v.pathOffsetDelta
    }
    if (v.frameRateThrottle !== undefined) {
      trainManager.throttle = v.frameRateThrottle
    }
    set(v)
  },
})

export const selectHidpi = (s: SettingsSlice) => s.hidpi
export const useHidpi = () => useStore(selectHidpi)
