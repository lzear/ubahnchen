import fs from 'node:fs'
import path from 'node:path'
import url from 'node:url'

import { optimize } from 'svgo'

const map = 'berlin/su'

describe('svg-optimize', () => {
  it('svg-optimize', () => {
    const inputPath = path.resolve(
      path.dirname(url.fileURLToPath(import.meta.url)),
      'data',
      map,
      'svg/01-place-stop-input.svg',
    )
    const outputPath = path.resolve(
      inputPath,
      '..',
      '02-place-stop-input-svgo.svg',
    )
    const svgString = fs.readFileSync(inputPath, 'utf8')
    const result2 = optimize(svgString, {
      path: inputPath,
      multipass: true,
      plugins: [
        {
          name: 'preset-default',
          params: { overrides: { mergePaths: false } },
        },
      ],
    })
    fs.writeFileSync(outputPath, result2.data)
  })
})
