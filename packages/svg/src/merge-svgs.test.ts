import { mergeSvgs } from './merge-svgs'

describe(mergeSvgs, () => {
  it('should merge the svgs', () => {
    const backgroundSvg = `
<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100">
  <path d="M0 0h100v100H0z" fill="#000"/>
</svg>`

    const foregroundSvg = `
<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100">
  <path d="M50 0v100M0 50h100" fill="none" stroke="#f00"/>
</svg>`

    const result = mergeSvgs(backgroundSvg, foregroundSvg)

    expect(result).toMatchInlineSnapshot(`
      "
      "
    `)
  })
})
