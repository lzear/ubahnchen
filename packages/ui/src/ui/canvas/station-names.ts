import paper from 'paper'
import { useStore } from '../store/store'
import { MapName } from '../../lib/enums'
import stopsById from '../../generated/stops-by-id.json'

export const hideStationNames = () => {
  const { mapsObjs } = useStore.getState()
  if (!mapsObjs) return
  mapsObjs.gStationNames.removeChildren()
}
export const doShowStationNames = (colorMode: 'light' | 'dark') => {
  hideStationNames()
  const { mapsObjs, mapName, displayStationNames } = useStore.getState()
  if (!mapsObjs || !displayStationNames) return

  const gStations =
    mapName === MapName.U ? mapsObjs.uStations : mapsObjs.suStations

  for (const [, gStation] of gStations) {
    const stationName = (stopsById as Record<string, string>)[gStation.name]
    if (!stationName) throw new Error('Missing station ' + gStation.name)
    const t = new paper.PointText({
      content: stationName.replace(/^(U|S|S\+U) /, '').trim(),
      fillColor: colorMode === 'light' ? '#111' : '#eee',
      // fontFamily: 'Courier New',
      fontWeight: 'bold',
      shadowColor: colorMode === 'light' ? '#fff' : '#000',
      shadowBlur: 2,
      shadowOffset: [0, 0],
      ...(mapName === MapName.U
        ? {
            rotation: -8,
            fontSize: 6,
            point: [gStation.position.x + 5, gStation.position.y + 1],
          }
        : {
            fontSize: 5,
            point: [gStation.position.x + 3, gStation.position.y + 2],
          }),
    })
    mapsObjs.gStationNames.addChild(t)
  }
}
