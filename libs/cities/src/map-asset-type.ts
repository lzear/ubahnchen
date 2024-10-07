import type { Point } from '@ubahnchen/utils'

export type StopsPositions = Record<
  string, // stop_id
  {
    stop_name: string
    stop_id: string
    point: Point
  }
>
