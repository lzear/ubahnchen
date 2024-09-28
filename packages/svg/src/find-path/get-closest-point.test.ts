import { createSVGWindow } from 'svgdom'

import { getClosestPoint } from './get-closest-point'

describe(getClosestPoint, () => {
  it('finds with simple example', () => {
    const window = createSVGWindow()

    const doc = window.document
    const svgPath = doc.createElementNS('http://www.w3.org/2000/svg', 'path')
    svgPath.setAttribute('d', 'M0,0h10v5')
    expect(getClosestPoint(svgPath, [2, 2])).toStrictEqual({
      distance: 2,
      pathLength: 2,
      point: [1.999_999_999_999_999_6, 0],
    })
  })
  it('finds with complex example', () => {
    const window = createSVGWindow()

    const doc = window.document
    const svgPath = doc.createElementNS('http://www.w3.org/2000/svg', 'path')
    // path having curves and all (C A S Q T M L H V Z ...)
    svgPath.setAttribute(
      'd',
      'M0,5 C10,80 30,20 90,30 S40,50 60,60 Q40,70 80,80 T50,90 L110,110 H120 V120 Z',
    )
    expect(getClosestPoint(svgPath, [45, 2])).toStrictEqual({
      distance: 31.186_301_829_691_278,
      pathLength: 91,
      point: [53.420_324_065_517_05, 32.028_046_297_491_29],
    })
  })
})
