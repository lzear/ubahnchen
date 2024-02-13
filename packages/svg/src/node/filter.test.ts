import fs from 'node:fs'
import path from 'node:path'
import url from 'node:url'

import { expect } from '@jest/globals'

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
  // @ts-ignore
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
        `"<svg xmlns="http://www.w3.org/2000/svg" width="1661" height="1004" fill="none"><path stroke="#7E5330" stroke-width="8" d="M740.256 445.979h600.224c9.11 0 14.1 5.809 14.1 5.809l56.62 56.621s4.74 5.809 14.11 5.809 14.23-5.922 14.23-5.922l171.82-171.827" data-ubhchn="3"/><path stroke="#224F86" stroke-width="8" d="M1018.06 809.578V425.545s.58-7.64-5.86-14.078c-3.29-3.284-88.796-88.795-188.577-188.576" data-ubhchn="4"/><path stroke="#8C6DAB" stroke-width="8" d="M900.304 938.59V439.909s.573-7.64-5.864"`,
      )
    })
    it('saves the other file', async () => {
      await filterSvgFile(annotedPath, filteredPath, theFilter)
      const f = await fs.promises.readFile(filteredPath, 'utf8')
      // eslint-disable-next-line unicorn/template-indent
      expect(f.slice(0, 500)).toMatchInlineSnapshot(
        `"<svg xmlns="http://www.w3.org/2000/svg" width="1661" height="1004" fill="none"><path stroke="#7E5330" stroke-width="8" d="M740.256 445.979h600.224c9.11 0 14.1 5.809 14.1 5.809l56.62 56.621s4.74 5.809 14.11 5.809 14.23-5.922 14.23-5.922l171.82-171.827" data-ubhchn="3"/><path stroke="#224F86" stroke-width="8" d="M1018.06 809.578V425.545s.58-7.64-5.86-14.078c-3.29-3.284-88.796-88.795-188.577-188.576" data-ubhchn="4"/><path stroke="#8C6DAB" stroke-width="8" d="M900.304 938.59V439.909s.573-7.64-5.864"`,
      )
    })
  })
})
