import type { Point } from '@ubahnchen/utils'

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
