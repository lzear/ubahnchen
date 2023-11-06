import { findSimilarColor } from './color.js'

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
})
