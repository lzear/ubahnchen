import type { Point } from '../../../app/_components/geometry/utils'
import type { Stop } from '../../../app/_server/gtfs/types'

export type StopsWithCoord = Stop & { point: Point }

export type Size = { height: number; width: number }
