import fs from 'node:fs'
import path from 'node:path'
import url from 'node:url'

//
import { splitSvgSubpaths } from './split-by-subpath'

describe(splitSvgSubpaths, () => {
  it('splits a path with multiple subpaths into multiple paths', async () => {
    const input = path.resolve(
      path.dirname(url.fileURLToPath(import.meta.url)),
      `./__tests__/s-unsplit.svg`,
    )

    const output = path.resolve(
      path.dirname(url.fileURLToPath(import.meta.url)),
      `./__tests__/s-unsplit-result.svg`,
    )

    const svg = fs.readFileSync(input, 'utf8')

    const svgElement = new DOMParser().parseFromString(svg, 'image/svg+xml')
      .documentElement as unknown as SVGSVGElement

    const result = splitSvgSubpaths(svgElement)

    expect(result).toMatchInlineSnapshot()

    const resultString = new XMLSerializer().serializeToString(result)

    await fs.promises.writeFile(output, resultString)
  })
})
