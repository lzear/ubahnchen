import fs from 'node:fs'
import path from 'node:path'
import url from 'node:url'

import { expect } from '@jest/globals'

import { Temporary } from '@ubahnchen/node'

import { mergePathsFile } from './merge-paths'

const svgFiltered = path.resolve(
  path.dirname(url.fileURLToPath(import.meta.url)),
  '../__tests__/20-filtered.svg',
)

const svgMerged = path.resolve(
  path.dirname(url.fileURLToPath(import.meta.url)),
  '../__tests__/30-merged.svg',
)

describe(mergePathsFile, () => {
  it('should annotate the svg', async () => {
    const temporary = new Temporary()
    const merged = temporary.file('berlin-filtered.svg')
    await mergePathsFile(svgFiltered, merged)

    const f = await fs.promises.readFile(merged, 'utf8')

    expect(f.slice(0, 500)).toMatchInlineSnapshot(
      `"<svg xmlns="http://www.w3.org/2000/svg" width="1661" height="1004" fill="none"><path fill="#fff" d="M1660.09 0H0v1003.69h1660.09V0Z" data-ubhchn="0"/><path fill="#8C6DAB" d="M694.364 180.049h-16.696a2.652 2.652 0 0 0-2.652 2.652v8.696a2.652 2.652 0 0 0 2.652 2.652h16.696a2.652 2.652 0 0 0 2.652-2.652v-8.696a2.652 2.652 0 0 0-2.652-2.652Z" data-ubhchn="1"/><path fill="#fff" d="M678.997 182.813h1.734v4.652c0 .739.021 1.217.065 1.436.074.351.251.634.53.846.279.213.661.32 1.146.32.492 0 .863-.101 1."`,
    )
  })

  it('saves the other file', async () => {
    await mergePathsFile(svgFiltered, svgMerged)
    const f = await fs.promises.readFile(svgMerged, 'utf8')

    expect(f.slice(0, 500)).toMatchInlineSnapshot(
      `"<svg xmlns="http://www.w3.org/2000/svg" width="1661" height="1004" fill="none"><path fill="#fff" d="M1660.09 0H0v1003.69h1660.09V0Z" data-ubhchn="0"/><path fill="#8C6DAB" d="M694.364 180.049h-16.696a2.652 2.652 0 0 0-2.652 2.652v8.696a2.652 2.652 0 0 0 2.652 2.652h16.696a2.652 2.652 0 0 0 2.652-2.652v-8.696a2.652 2.652 0 0 0-2.652-2.652Z" data-ubhchn="1"/><path fill="#fff" d="M678.997 182.813h1.734v4.652c0 .739.021 1.217.065 1.436.074.351.251.634.53.846.279.213.661.32 1.146.32.492 0 .863-.101 1."`,
    )
  })
})
