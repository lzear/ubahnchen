import { log2DArray, logStrings, prettyNumber } from './log'

describe(prettyNumber, () => {
  it('formats number with maximum fraction digits', () => {
    expect(prettyNumber(1234.5678, { maximumFractionDigits: 2 })).toBe(
      '1,234.57',
    )
  })

  it('formats number as integer', () => {
    expect(prettyNumber(1234.5678, { integer: true })).toBe('1,235')
  })
})

describe(logStrings, () => {
  let consoleLogSpy: jest.SpiedFunction<typeof console.log>

  beforeEach(() => {
    consoleLogSpy = jest.spyOn(console, 'log')
    consoleLogSpy.mockImplementation(() => null)
  })

  afterEach(() => {
    consoleLogSpy.mockRestore()
  })

  it('logs strings with prefix', () => {
    logStrings(['test1', 'test2'], 'prefix')
    expect(consoleLogSpy).toHaveBeenCalledWith('prefixtest1')
    expect(consoleLogSpy).toHaveBeenCalledWith('prefixtest2')
  })

  it('logs strings with different lengths', () => {
    logStrings(['test', 'testing'])
    expect(consoleLogSpy).toHaveBeenCalledWith('test   ')
    expect(consoleLogSpy).toHaveBeenCalledWith('testing')
  })
})

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
    ).toEqual([' a  b  c', ' d  e  f'])
  })
  it('should log the array with equal column width', () => {
    expect(
      log2DArray([
        ['aaaaa', 'b', 'cc'],
        ['d', 'eeeee', 'f'],
      ]),
    ).toMatchInlineSnapshot(`
      [
        " aaaaa      b  cc",
        "     d  eeeee   f",
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
        " aaaaa  |       b  |   cc",
        "     d  |   eeeee  |    f",
      ]
    `)
  })
  it('returns the same array if it contains only undefined values', () => {
    expect(
      log2DArray([
        [undefined, undefined],
        [undefined, undefined],
      ]),
    ).toEqual([' undefined  undefined', ' undefined  undefined'])
  })

  it('logs the array with different data types', () => {
    expect(
      log2DArray([
        ['aaaaa', 1, null],
        [undefined, 'eeeee', 'f'],
      ]),
    ).toEqual(['     aaaaa      1  null', ' undefined  eeeee     f'])
  })
})
