import shallow from 'zustand/shallow'
import { MapName } from '../../lib/enums'
import { useStore } from './store'

export const selectStations = (s: MapSlice) => {
  if (!s.mapsObjs) return
  return s.mapName === MapName.U ? s.mapsObjs.uStations : s.mapsObjs.suStations
}

export const selectPaths = (s: MapSlice) => {
  if (!s.mapsObjs) return
  return s.mapName === MapName.U ? s.mapsObjs.uPaths : s.mapsObjs.suPaths
}

const selectIsInitialized = (s: MapSlice) => !!s.mapsObjs
export const useIsInitialized = () => useStore(selectIsInitialized, shallow)

const selectOnInit = (s: MapSlice) => s.onInit
export const useOnInit = () => useStore(selectOnInit, shallow)

const selectMapsObject = (s: MapSlice) => s.mapsObjs
export const useMapsObjects = () => useStore(selectMapsObject, shallow)

export type MapsObjects = {
  gMap: paper.Item
  uMap: paper.Item
  suMap: paper.Item
  aniMap: paper.Item
  gTrains: paper.Item
  gStationNames: paper.Item
  uPaths: Map<string, paper.Path>
  suPaths: Map<string, paper.Path>
  aniPaths: Map<string, paper.Path>
  uStations: Map<string, paper.Item>
  suStations: Map<string, paper.Item>
}
interface MapSliceValues {
  mapName: MapName
  animationFinishedAt: number
  suWater?: paper.Item
  mapsObjs: MapsObjects | undefined
}

export type OnInitPayload = {
  gMap: paper.Item
  uMap: paper.Item
  suMap: paper.Item
  aniMap: paper.Item
  gTrains: paper.Item
  gStationNames: paper.Item

  uStations: Map<string, paper.Item>
  suStations: Map<string, paper.Item>

  uPaths: Map<string, paper.Path>
  suPaths: Map<string, paper.Path>
  aniPaths: Map<string, paper.Path>
}
export type Oninit = (v?: OnInitPayload) => void

export interface MapSlice extends MapSliceValues {
  setMaps: (v: Partial<Omit<MapSliceValues, 'mapName'>>) => void
  stopAnimate?: () => void
  setMapForce: (mapName: MapName) => void
  onInit: Oninit
}
