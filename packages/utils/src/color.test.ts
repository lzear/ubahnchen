import { colorDistance, findSimilarColor } from './color'

describe(findSimilarColor, () => {
  it('finds similar when same', () => {
    expect(findSimilarColor('#ff0000', ['#00ff00', '#ff0000', '#0000ff'])).toBe(
      '#ff0000',
    )
  })
  it('finds similar with rgb/hex', () => {
    expect(
      findSimilarColor('rgb(100, 0, 0)', ['#00ff00', '#ff0000', '#0000ff']),
    ).toBe('#ff0000')
  })
  it('finds similar with hex/rgb', () => {
    expect(
      findSimilarColor('#00ff00', [
        'rgb(100, 0, 0)',
        'rgb(0, 100, 0)',
        'rgb(0, 0, 100)',
      ]),
    ).toBe('rgb(0, 100, 0)')
  })
  it('finds similar with hex/text', () => {
    expect(findSimilarColor('#ff0000', ['red', 'green', 'blue'])).toBe('red')
  })
  it('finds similar with text/hex', () => {
    expect(
      findSimilarColor('yellow', ['#00ff00', '#ffff00', '#ff0000', '#0000ff']),
    ).toBe('#ffff00')
  })
  it('throws if no color', () => {
    expect(() => findSimilarColor('yellow', [])).toThrow(
      'Could not find most similar color',
    )
  })
  it('has color distance between 0 and 1', () => {
    expect(colorDistance('#f00', '#f00')).toBe(0)
    expect(colorDistance('#fff', '#000')).toBe(1)
    expect(colorDistance('#f00', '#0f0')).toBe(0.816_496_580_927_726_1)
    expect(colorDistance('#f00', '#00f')).toBe(0.816_496_580_927_726_1)
    expect(colorDistance('#f00', '#e00')).toBe(0.038_490_017_945_975_05)
  })
})
