import { expect } from '@jest/globals'
import { createSVGWindow } from 'svgdom'

import { getClosestPoint } from './get-closest-point'

describe(getClosestPoint, () => {
  it('normalize paths', () => {
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
})
