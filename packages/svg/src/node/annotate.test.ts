import fs from 'node:fs'
import path from 'node:path'
import url from 'node:url'

import { Temporary } from '@ubahnchen/node'

import { annotateSvgFile } from './annotate'

const svgOmgPath = path.resolve(
  path.dirname(url.fileURLToPath(import.meta.url)),
  '../__tests__/02-svgomg.svg',
)

const annotedPath = path.resolve(
  path.dirname(url.fileURLToPath(import.meta.url)),
  '../__tests__/10-annoted.svg',
)

describe(annotateSvgFile, () => {
  it('should annotate the svg', async () => {
    const temporary = new Temporary()
    const annotated = temporary.file('berlin-annotated.svg')
    await annotateSvgFile(svgOmgPath, annotated, 'data-ubhchn')

    const f = await fs.promises.readFile(annotated, 'utf8')

    expect(f.slice(0, 500)).toMatchInlineSnapshot(
      `"<svg xmlns="http://www.w3.org/2000/svg" width="1661" height="1004" fill="none" data-ubhchn="1"><path fill="#fff" d="M1660.09 0H0v1003.69h1660.09V0Z" data-ubhchn="2"/><path fill="#8C6DAB" d="M694.364 180.049h-16.696a2.652 2.652 0 0 0-2.652 2.652v8.696a2.652 2.652 0 0 0 2.652 2.652h16.696a2.652 2.652 0 0 0 2.652-2.652v-8.696a2.652 2.652 0 0 0-2.652-2.652Z" data-ubhchn="3"/><path fill="#fff" d="M678.997 182.813h1.734v4.652c0 .739.021 1.217.065 1.436.074.351.251.634.53.846.279.213.661.32 1.146.32.49"`,
    )
  })

  it('saves the other file', async () => {
    await annotateSvgFile(svgOmgPath, annotedPath, 'data-ubhchn')
    const f = await fs.promises.readFile(annotedPath, 'utf8')

    expect(f.slice(0, 500)).toMatchInlineSnapshot(
      `"<svg xmlns="http://www.w3.org/2000/svg" width="1661" height="1004" fill="none" data-ubhchn="1"><path fill="#fff" d="M1660.09 0H0v1003.69h1660.09V0Z" data-ubhchn="2"/><path fill="#8C6DAB" d="M694.364 180.049h-16.696a2.652 2.652 0 0 0-2.652 2.652v8.696a2.652 2.652 0 0 0 2.652 2.652h16.696a2.652 2.652 0 0 0 2.652-2.652v-8.696a2.652 2.652 0 0 0-2.652-2.652Z" data-ubhchn="3"/><path fill="#fff" d="M678.997 182.813h1.734v4.652c0 .739.021 1.217.065 1.436.074.351.251.634.53.846.279.213.661.32 1.146.32.49"`,
    )
  })
})
