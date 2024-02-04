import type { Stop } from '@ubahnchen/cities'

import type { Point } from '../../../app/_components/geometry/utils'

export type StopsWithCoord = Stop & { point: Point }

export type Size = { height: number; width: number }
