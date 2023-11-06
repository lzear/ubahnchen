import { toTuples } from './tuple.js'

describe(toTuples, () => {
  it('tuples', () => {
    expect(toTuples([1, 2, 3, 4, 5, 6], 3)).toEqual([
      [1, 2, 3],
      [4, 5, 6],
    ])
    expect(() => toTuples([1, 2, 3, 4, 5, 6, 7], 3)).toThrow(
      'list.length % n != 0 (7 % 3 == 1)',
    )
  })
})
