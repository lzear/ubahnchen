import { makeRandomPoints as randomPointsGrid2 } from './01-random-points-with-worker'
import { makeRandomPoints as randomPointsGrid } from './02-sort'

export const makeRandomPoints = {
  WITH_WORKER: randomPointsGrid2,
  SORT: randomPointsGrid,
}
