import { extractSVGPaths } from './get-svg-paths'

describe('extractSVGPaths', () => {
  it('should extract paths from an SVG string loose', () => {
    const svgString = `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
        <path d="M10 10 H 90 V 90 H 10 L 10 10"/>
        <path d="M30 30 A 20 20 0 0 1 70 70"/>
      </svg>
    `
    const pathData = extractSVGPaths(svgString, false)
    expect(pathData).toEqual([
      { id: undefined, d: 'M10 10 H 90 V 90 H 10 L 10 10', color: undefined },
      { id: undefined, d: 'M30 30 A 20 20 0 0 1 70 70', color: undefined },
    ])
  })
  it('should extract paths from an SVG string strict', () => {
    const svgString = `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
        <path d="M10 10 H 90 V 90 H 10 L 10 10" stroke="black" id="2"/>
        <path d="M30 30 A 20 20 0 0 1 70 70" stroke="yellow" id="9"/>
      </svg>
    `
    const pathData = extractSVGPaths(svgString, true)
    expect(pathData).toEqual([
      { id: '2', d: 'M10 10 H 90 V 90 H 10 L 10 10', color: 'black' },
      { id: '9', d: 'M30 30 A 20 20 0 0 1 70 70', color: 'yellow' },
    ])
  })
  it('extract paths from an SVG string strict throws', () => {
    const svgString = `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
        <path d="M10 10 H 90 V 90 H 10 L 10 10" stroke="black" id="2"/>
        <path d="M30 30 A 20 20 0 0 1 70 70" id="9"/>
      </svg>
    `
    expect(() => extractSVGPaths(svgString, true)).toThrowError(
      'Missing attributes',
    )
  })
})
