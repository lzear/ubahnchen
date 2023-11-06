import type { Point } from '../../../app/_components/geometry/utils.js'

export const translate1 =
  (selectedPoint: { index: number; pos: Point }) => (index: number) => {
    if (index === selectedPoint.index)
      return {
        x: selectedPoint.pos[0],
        y: selectedPoint.pos[1],
        color: 'blue',
        immediate: true,
      }
  }
