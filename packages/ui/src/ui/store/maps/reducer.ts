import { StateCreatorWithSubscribe } from '../types'
import { INIT_MAPNAME } from '../../trains/consts'
import { MapSlice } from '../maps'

export const createMapSlice: StateCreatorWithSubscribe<MapSlice> = (set) => {
  return {
    animationFinishedAt: 0,
    mapName: INIT_MAPNAME,
    mapsObjs: undefined,
    stopAnimate: undefined,
    onInit: (mapsObjs) => set({ mapsObjs }),
    setMapForce: (mapName) => set({ mapName }),
    setMaps: (v) => set(v),
  }
}
