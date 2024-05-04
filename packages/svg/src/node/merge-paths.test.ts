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
      `"<svg xmlns="http://www.w3.org/2000/svg" width="1661" height="1004" fill="none"><path stroke="#7E5330" stroke-width="8" d="M740.256 445.979h600.224c9.11 0 14.1 5.809 14.1 5.809l56.62 56.621s4.74 5.809 14.11 5.809 14.23-5.922 14.23-5.922l171.82-171.827" data-ubhchn="3"/><path stroke="#224F86" stroke-width="8" d="M1018.06 809.578V425.545s.58-7.64-5.86-14.078c-3.29-3.284-88.796-88.795-188.577-188.576" data-ubhchn="4"/><path stroke="#8C6DAB" stroke-width="8" d="M900.304 938.59V439.909s.573-7.64-5.864"`,
    )
  })

  it('saves the other file', async () => {
    await mergePathsFile(svgFiltered, svgMerged)
    const f = await fs.promises.readFile(svgMerged, 'utf8')

    expect(f.slice(0, 500)).toMatchInlineSnapshot(
      `"<svg xmlns="http://www.w3.org/2000/svg" width="1661" height="1004" fill="none"><path stroke="#7E5330" stroke-width="8" d="M740.256 445.979h600.224c9.11 0 14.1 5.809 14.1 5.809l56.62 56.621s4.74 5.809 14.11 5.809 14.23-5.922 14.23-5.922l171.82-171.827" data-ubhchn="3"/><path stroke="#224F86" stroke-width="8" d="M1018.06 809.578V425.545s.58-7.64-5.86-14.078c-3.29-3.284-88.796-88.795-188.577-188.576" data-ubhchn="4"/><path stroke="#8C6DAB" stroke-width="8" d="M900.304 938.59V439.909s.573-7.64-5.864"`,
    )
  })
})
