import { log2DArray } from './log'

describe(log2DArray, () => {
  it('should return the same array if it is empty', () => {
    expect(log2DArray([])).toEqual([])
  })

  it('should return the same array if it is empty empty', () => {
    expect(log2DArray([[]])).toEqual([''])
  })

  it('should return the same array if it is empty empty empty', () => {
    expect(log2DArray([[], []])).toEqual(['', ''])
  })

  it('should log the array', () => {
    expect(
      log2DArray([
        ['a', 'b', 'c'],
        ['d', 'e', 'f'],
      ]),
    ).toEqual(['a b c', 'd e f'])
  })
  it('should log the array with equal column width', () => {
    expect(
      log2DArray([
        ['aaaaa', 'b', 'cc'],
        ['d', 'eeeee', 'f'],
      ]),
    ).toMatchInlineSnapshot(`
      [
        "aaaaa     b cc",
        "    d eeeee  f",
      ]
    `)
  })
  it('should log the array with separator', () => {
    expect(
      log2DArray(
        [
          ['aaaaa', 'b', 'cc'],
          ['d', 'eeeee', 'f'],
        ],

        '  |  ',
      ),
    ).toMatchInlineSnapshot(`
      [
        "aaaaa  |      b  |  cc",
        "    d  |  eeeee  |   f",
      ]
    `)
  })
})
