import Paper, * as paper from 'paper'
import { Path } from 'paper'
import { useStore } from '../store/store'
import { selectStations } from '../store/maps'

let gdots: paper.Item | undefined

const highlightEdge = (stop_ids: string[], gdots: paper.Item) => {
  const s = useStore.getState()

  const stations = selectStations(s)

  const foundStations = stop_ids.map((sid) => stations?.get(sid))

  const iterator = foundStations.entries()

  let current = iterator.next()
  let next = iterator.next()
  while (!next.done) {
    const index: number = current.value[0]
    const [a, b] = [current.value[1], next?.value?.[1]]

    if (!b) break

    gdots.addChild(
      new Path({
        segments: [a.position, b.position],
        strokeColor: new paper.Color(
          index / foundStations.length,
          1 - index / foundStations.length,
          0.4,
        ),
        strokeWidth: 9,
        opacity: 0.75,
      }),
    )
    current = next
    next = iterator.next()
  }
}

export const highlightEdges = (stop_ids: string[][]) => {
  if (!gdots) {
    const activeLayer = Paper?.project?.activeLayer

    if (!activeLayer) return

    gdots = activeLayer.addChild(new paper.Group())
    gdots.name = 'dots2'
  }
  gdots.removeChildren()

  for (const s of stop_ids) highlightEdge(s, gdots)
}
