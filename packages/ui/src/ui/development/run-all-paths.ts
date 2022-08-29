import * as paper from 'paper'
import { getTrainPosition } from '../trains/get-position'
import { stopIndexById } from '../trains/stop-idxs'
import { useStore } from '../store/store'
import { selectPaths } from '../store/maps'
import type { SectionWithAbs } from '../../lib/intineraries'
import { paperView } from '../canvas/paper-view'

type LineStop = {
  route_name: string
  sections: SectionWithAbs[]
}

export const positionsForRatio = (linee: LineStop, ratio: number) => {
  const stop1 = linee.sections[0]?.stops[0]
  const stop2 = linee.sections.at(-1)?.stops.at(-1)

  if (!stop1 || !stop2) throw new Error('sdfsd')
  const stop_index1 = stopIndexById[stop1.stop_id]
  const stop_index2 = stopIndexById[stop2.stop_id]

  if (!stop_index1 || !stop_index2) throw new Error('sdfsd')
  return getTrainPosition({
    stop_idx1: stop_index1,
    stop_idx2: stop_index2,
    route: linee,
    ratio,
  })
}

export const runAllPaths = (lineStops: LineStop[]) => {
  const pt = new paper.Point(-10, -4)
  const state = useStore.getState()
  const paths = selectPaths(state)
  const intersectionGroup = new paper.Group()
  const printTrain = (train: {
    position: { path: string; offset: number }
  }) => {
    if (!paths) return
    const path = paths.get(train.position.path)
    if (!path) return
    const tang = path.getTangentAt(train.position.offset)
    const angl = tang.angle
    const running = new paper.Shape.Rectangle({
      point: path.getPointAt(train.position.offset),
      size: [20, 8],
      parent: intersectionGroup,
    })
    running.strokeColor = new paper.Color('black')
    running.translate(pt)
    running.rotate(angl)
    running.strokeWidth = 4
    running.opacity = 0.6
  }

  // frame: { count: number }

  const view = paperView()
  if (view)
    view.onFrame = async (f: { time: number }) => {
      if (!paths) {
        return
      }
      // if (frame.count % 10 !== 0 || ) {
      //   return
      // }
      const FRAMES = 10
      const ratio = (f.time / FRAMES) % 1

      intersectionGroup.removeChildren()
      for (const line of lineStops) {
        const position = positionsForRatio(line, ratio)
        printTrain({ position })
      }
    }
}
