import _ from 'lodash'

import type { Point } from '@ubahnchen/utils'

import type { Vector } from '../utils'

export const linearish = (vectors: Vector[]) => {
  return ([x, y]: Point): Point => {
    const weights = vectors.map(([origin]) => {
      const d = Math.hypot(x - origin[0], y - origin[1])
      return d < 1 ? 1_000_000 : 1 / d
    })
    const totalWeight = _.sum(weights)
    const normalizedWeights = weights.map((weight) => weight / totalWeight)

    let t: Point = [0, 0]
    for (const [index, vector] of vectors.entries()) {
      const [origin, target] = vector
      const dx = target[0] - origin[0]
      const dy = target[1] - origin[1]
      t = [
        t[0] + dx * normalizedWeights[index]!,
        t[1] + dy * normalizedWeights[index]!,
      ]
    }
    return [x + t[0], y + t[1]]
  }
}
