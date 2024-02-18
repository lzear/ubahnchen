import fs from 'node:fs'
import path from 'node:path'
import url from 'node:url'

import { describe, expect } from '@jest/globals'

// eslint-disable-next-line import/no-extraneous-dependencies
import { P } from '@ubahnchen/cities/node'
import { Temporary } from '@ubahnchen/node'

import { mergePathsFile } from './merge-paths'

describe(mergePathsFile, () => {
  describe('basic data asdf', () => {
    const files = [
      'example-u2',
      'example-2-lines',
      'example-3-lines',
      'example-2-lines-gap',
      'example-2-lines-big-gap',
    ]

    it.each(files)('%p', async (file) => {
      const input = path.resolve(
        path.dirname(url.fileURLToPath(import.meta.url)),
        `../__tests__/${file}.svg`,
      )
      const output = path.resolve(
        path.dirname(url.fileURLToPath(import.meta.url)),
        `../__tests__/${file}-merged.svg`,
      )

      await mergePathsFile(input, output)

      const f = await fs.promises.readFile(output, 'utf8')

      expect(f.slice(0, 20)).toBe('<svg fill="none" xml')
    })

    const svgFiltered = path.resolve(
      path.dirname(url.fileURLToPath(import.meta.url)),
      '../__tests__/20-filtered.svg',
    )

    const svgMerged = path.resolve(
      path.dirname(url.fileURLToPath(import.meta.url)),
      '../__tests__/30-merged.svg',
    )

    it('should annotate the svg', async () => {
      const temporary = new Temporary()
      const merged = temporary.file('berlin-filtered.svg')
      await mergePathsFile(svgFiltered, merged)

      const f = await fs.promises.readFile(merged, 'utf8')

      expect(f.slice(0, 500)).toMatchInlineSnapshot(
        `"<svg xmlns="http://www.w3.org/2000/svg" width="1661" height="1004" fill="none"><path stroke="#7E5330" stroke-width="8" d="M740.256 445.979h600.224c9.11 0 14.1 5.809 14.1 5.809l56.62 56.621s4.74 5.809 14.11 5.809 14.23-5.922 14.23-5.922l171.82-171.827" data-ubhchn="3"/><path stroke="#224F86" stroke-width="8" d="M1018.06,809.578v-384.033c0,0 0.58,-7.64 -5.86,-14.078c-3.29,-3.284 -88.796,-88.795 -188.577,-188.576l-2.148,-2.168l-100.245,-100.245c-6.437,-6.437 -5.863,-14.078 -5.863,-14.078v-78.563" d"`,
      )
    })

    it('saves the other file', async () => {
      await mergePathsFile(svgFiltered, svgMerged)
      const f = await fs.promises.readFile(svgMerged, 'utf8')

      expect(f.slice(0, 500)).toMatchInlineSnapshot(
        `"<svg xmlns="http://www.w3.org/2000/svg" width="1661" height="1004" fill="none"><path stroke="#7E5330" stroke-width="8" d="M740.256 445.979h600.224c9.11 0 14.1 5.809 14.1 5.809l56.62 56.621s4.74 5.809 14.11 5.809 14.23-5.922 14.23-5.922l171.82-171.827" data-ubhchn="3"/><path stroke="#224F86" stroke-width="8" d="M1018.06,809.578v-384.033c0,0 0.58,-7.64 -5.86,-14.078c-3.29,-3.284 -88.796,-88.795 -188.577,-188.576l-2.148,-2.168l-100.245,-100.245c-6.437,-6.437 -5.863,-14.078 -5.863,-14.078v-78.563" d"`,
      )
    })
  })

  describe('berlin u', () => {
    it('should merge the paths', async () => {
      const svgMerged = path.resolve(
        path.dirname(url.fileURLToPath(import.meta.url)),
        '../__tests__/30-merged-berlin.svg',
      )
      const svgFiltered = P('berlin', 'u').SRC.SVG.FILTLIN_11
      await mergePathsFile(svgFiltered, svgMerged)

      const f = await fs.promises.readFile(svgMerged, 'utf8')
      expect(f).toMatchInlineSnapshot(
        `"<svg xmlns="http://www.w3.org/2000/svg" width="1661" height="1004" fill="none"><path stroke="#7E5330" stroke-width="8" d="M740.26 445.98h600.22c9.11 0 14.1 5.8 14.1 5.8l56.62 56.63s4.74 5.8 14.11 5.8 14.23-5.91 14.23-5.91l171.82-171.83" data-ubhnchn="3"/><path stroke="#224F86" stroke-width="8" d="M715.37,27.84v78.56c0,0 -0.58,7.64 5.86,14.08l100.25,100.24l2.14,2.17l188.58,188.58c6.44,6.43 5.86,14.07 5.86,14.07v384.04" data-ubhnchn="4"/><path stroke="#8C6DAB" stroke-width="8" d="M900.3 938.59V439.91s.58-7.64-5.86-14.08L668.27 199.66" data-ubhnchn="5"/><path stroke="#528DBA" stroke-width="8" d="M75.44,410.98h338.7c1.68,0 7.96,-0.35 14.24,5.92c6.27,6.27 5.8,14.07 5.8,14.07v243.68c0,9.18 5.9,14.18 5.9,14.18l24.59,24.58c6.43,6.43 14.17,5.86 14.17,5.86h232.68l-26.43,0.02h53.55c0,0 7.64,0.6 14.12,-5.87l76.42,-76.42c0,0 5.07,-5.85 14.17,-5.85c0,0 7.83,-0.42 14.14,5.9c6.32,6.3 57.4,57.75 57.4,57.75c0,0 4.9,5.83 14.15,5.83h128.39c0,0 7.79,-0.5 14.13,5.84l256.42,256.41" data-ubhnchn="7"/><path stroke="#F3791D" stroke-width="8" d="M532.55,895.29l40.83,-40.83c6.37,-6.38 5.83,-14.12 5.83,-14.12v-245.4l-0.01,11.4v-133.1c0,0 -0.65,-7.64 5.84,-14.13l237.9,-237.9" data-ubhnchn="9"/><path stroke="#007A5B" stroke-linejoin="round" stroke-width="8" d="m296.02 942.99 317.79-317.8s5.26-5.86 14.17-5.86h542.15" data-ubhnchn="12"/><path stroke="#7DAD4C" stroke-width="8" d="M511.57 607.4h659.26" data-ubhnchn="20"/><path stroke="#DA421E" stroke-linejoin="round" stroke-width="8" d="M220.83,454.78l71.6,71.62c6.68,6.67 14.15,5.8 14.15,5.8h126.3l1.77,0h117.56c9.13,0 14.14,5.83 14.14,5.83l52.11,52.12c0,0 5.27,5.87 14.17,5.87h68.15c0,0 7.2,-0.16 12.8,5.44l38.2,38.2c0,0 5.17,5.86 14.1,5.86c8.94,0 13.7,-5.37 14.2,-5.87c0.5,-0.5 5.8,-5.31 5.8,-14.13c0,-3.7 0.1,-13.65 0.1,-13.61l-0.09,-4.01v-59.93c0,0 -0.26,-8.05 5.84,-14.14c6.09,-6.1 13.12,-5.88 14.18,-5.88h93.42h-15.29h43.73c0,0 7.98,0.33 14.1,-5.8l122.48,-122.47c0,0 5.83,-5.14 5.83,-14.11v-129.54" data-ubhnchn="41"/><path stroke="#F0D722" stroke-width="8" d="M685.12 620.57V802.5" data-ubhnchn="44"/></svg>"`,
      )
    })
  })
})
