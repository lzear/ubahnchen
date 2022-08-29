import Paper from 'paper'
import { importSvg } from '../canvas/animate-lines'
import { getLines, getStations, getULines } from '../canvas/map-elements'
import { useStore } from '../store/store'
import { MapName } from '../../lib/enums'
import { OnInitPayload } from '../store/maps'
import { Singleton } from '../../lib/singleton'

const mapByName = <T extends paper.Item>(items: T[]) => {
  const map = new Map<string, T>()
  for (const item of items) map.set(item.name.split(' ')[0]!, item)
  return map
}

export const insertWater_ = async (gMap: paper.Item) => {
  const { setMaps } = useStore.getState()
  const suWater = await importSvg('berlin/su-city.svg', gMap, {
    insert: true,
  })
  suWater?.sendToBack()
  setMaps({ suWater })
  return suWater
}

const singleton = new Singleton(insertWater_, () => '')

export const insertWater = (g: paper.Item) => singleton.exec(g)

export const insertMaps = async (mapName: MapName): Promise<OnInitPayload> => {
  const { displayStations } = useStore.getState()
  const activeLayer = Paper.project.activeLayer

  const gMap = activeLayer.addChild(new Paper.Group())
  gMap.opacity = 0
  const suMap = await importSvg('berlin/su.svg', gMap, { insert: true })
  const uMap = await importSvg('berlin/u.svg', gMap, { insert: true })

  // @ts-ignore
  const U = suMap.children?.lines?.children?.U
  // @ts-ignore
  const S = suMap.children?.lines?.children?.S
  // @ts-ignore
  const stations = suMap.children?.stations

  if (!U || !S || !stations) throw new Error('sdf')

  if (mapName === MapName.SU) {
    U.opacity = 1
    S.opacity = 1
    stations.opacity = displayStations ? 1 : 0
    uMap.opacity = 0
  } else {
    U.opacity = 0
    S.opacity = 0
    stations.opacity = 0
    uMap.opacity = 1
  }

  // @ts-ignore
  const ustations = uMap.children[0]?.children?.stations
  if (ustations) ustations.opacity = displayStations ? 1 : 0

  const uLinesArray = getULines(uMap)
  const suLinesArray = getLines(suMap)

  const uStationsArray = getStations(uMap)
  const suStationsArray = getStations(suMap)

  const aniMap = new Paper.Group()
  activeLayer.addChild(aniMap)

  const aniU = new Paper.Group({ name: 'U' })
  aniMap.addChild(aniU)

  for (const u of uLinesArray) u.copyTo(aniU)

  aniMap.opacity = 0

  const aniLinesArray = getULines(aniMap)
  const gStationNames = activeLayer.addChild(new Paper.Group())
  const gTrains = activeLayer.addChild(new Paper.Group())
  // onInit(payload)

  gMap.opacity = 1
  return {
    gMap,
    gTrains,
    gStationNames,
    suMap,
    uMap,
    aniMap,
    uStations: mapByName(uStationsArray),
    suStations: mapByName(suStationsArray),
    uPaths: mapByName(uLinesArray),
    suPaths: mapByName(suLinesArray),
    aniPaths: mapByName(aniLinesArray),
  }
}
