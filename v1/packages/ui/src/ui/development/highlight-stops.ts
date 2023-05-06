import Paper, * as paper from 'paper'
import { useStore } from '../store/store'
import { selectStations } from '../store/maps'

let gdots: paper.Item | undefined

export const highlightStops = (stop_ids: string[]) => {
  if (!gdots) {
    const activeLayer = Paper?.project?.activeLayer

    if (!activeLayer) return

    gdots = activeLayer.addChild(new paper.Group())
    gdots.name = 'dots'
  }
  gdots.removeChildren()
  const s = useStore.getState()

  const stations = selectStations(s)

  const foundStations = stop_ids.map((sid) => stations?.get(sid))

  for (const [index, station] of foundStations.entries()) {
    if (!station) continue

    const circle = gdots.addChild(
      new paper.Shape.Circle({
        center: station.position,
        radius: 10,
      }),
    )
    circle.strokeColor = new paper.Color(
      index / foundStations.length,
      1 - index / foundStations.length,
      0.4,
    )
    circle.strokeWidth = 4
  }
}
