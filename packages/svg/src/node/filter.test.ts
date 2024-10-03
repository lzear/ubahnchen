import fs from 'node:fs'
import path from 'node:path'
import url from 'node:url'

import { Temporary } from '@ubahnchen/node'

import { filterSvg } from '../filter'
import { stringToDom } from '../string-to-dom'

import { filterSvgFile } from './filter'

const idsToKeep = new Set([20, 41, 42, 12, 44, 3, 5, 7, 8, 4, 11, 9, 10])

const countElements = (svg: string) => {
  const dom = stringToDom(svg)
  const document = dom.window.document
  return document.querySelectorAll<SVGElement>('svg *').length
}

const annotedPath = path.resolve(
  path.dirname(url.fileURLToPath(import.meta.url)),
  '../__tests__/10-annoted.svg',
)

const filteredPath = path.resolve(
  path.dirname(url.fileURLToPath(import.meta.url)),
  '../__tests__/20-filtered.svg',
)

const theFilter = (el: SVGElement) =>
  // @ts-expect-error
  idsToKeep.has(Number.parseInt(el?.dataset?.ubhchn))

describe(filterSvg, () => {
  it('should filter the svg', async () => {
    const input = await fs.promises.readFile(annotedPath, 'utf8')
    expect(countElements(input)).toBe(361)
    const output = filterSvg(input, theFilter)
    expect(idsToKeep.size).toBe(13)
    expect(countElements(output)).toBe(13)
  })

  describe(filterSvgFile, () => {
    it('should filter the svg', async () => {
      const temporary = new Temporary()
      const output = temporary.file('output.svg')
      await filterSvgFile(annotedPath, output, theFilter)
      const f = await fs.promises.readFile(output, 'utf8')
      // eslint-disable-next-line unicorn/template-indent
      expect(f.slice(0, 500)).toMatchInlineSnapshot(
        `"<svg xmlns="http://www.w3.org/2000/svg" width="1661" height="1004" fill="none" data-ubhchn="1"><path fill="#8C6DAB" d="M694.364 180.049h-16.696a2.652 2.652 0 0 0-2.652 2.652v8.696a2.652 2.652 0 0 0 2.652 2.652h16.696a2.652 2.652 0 0 0 2.652-2.652v-8.696a2.652 2.652 0 0 0-2.652-2.652Z" data-ubhchn="3"/><path fill="#fff" d="M678.997 182.813h1.734v4.652c0 .739.021 1.217.065 1.436.074.351.251.634.53.846.279.213.661.32 1.146.32.492 0 .863-.101 1.113-.302.25-.201.4-.448.451-.741.051-.293.076-.779.076-"`,
      )
    })
    it('saves the other file', async () => {
      await filterSvgFile(annotedPath, filteredPath, theFilter)
      const f = await fs.promises.readFile(filteredPath, 'utf8')
      // eslint-disable-next-line unicorn/template-indent
      expect(f.slice(0, 500)).toMatchInlineSnapshot(
        `"<svg xmlns="http://www.w3.org/2000/svg" width="1661" height="1004" fill="none" data-ubhchn="1"><path fill="#8C6DAB" d="M694.364 180.049h-16.696a2.652 2.652 0 0 0-2.652 2.652v8.696a2.652 2.652 0 0 0 2.652 2.652h16.696a2.652 2.652 0 0 0 2.652-2.652v-8.696a2.652 2.652 0 0 0-2.652-2.652Z" data-ubhchn="3"/><path fill="#fff" d="M678.997 182.813h1.734v4.652c0 .739.021 1.217.065 1.436.074.351.251.634.53.846.279.213.661.32 1.146.32.492 0 .863-.101 1.113-.302.25-.201.4-.448.451-.741.051-.293.076-.779.076-"`,
      )
    })
  })
})
