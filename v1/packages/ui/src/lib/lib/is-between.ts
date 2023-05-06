import _ from 'lodash'

export const isBetween = (
  value: number,
  [a, b]: [number, number],
  epsilon = 0,
) => {
  if (a <= b) return a - epsilon <= value && value <= b + epsilon
  return b - epsilon <= value && value <= a + epsilon
}
export const looseClamp = (value: number, [a, b]: [number, number]) => {
  if (a <= b) return _.clamp(value, a, b)
  return _.clamp(value, b, a)
}
