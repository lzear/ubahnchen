import fs from 'node:fs'
import path from 'node:path'
import url from 'node:url'

import { describe, expect } from '@jest/globals'

import { Temporary } from '@ubahnchen/node'

import { mergePathsFile } from './merge-paths'

describe(mergePathsFile, () => {
  describe('basic data asdf', () => {
    const files = [
      'example-u2',
      // 'example-2-lines',
      // 'example-3-lines',
      // 'example-2-lines-gap',
      // 'example-2-lines-big-gap',
    ]

    it.each(files)('%p', async (file) => {
      console.log(`antoinelog should merge the paths basic`)

      console.log(`antoinelog file`, file)

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

    // const svgFiltered = path.resolve(
    //   path.dirname(url.fileURLToPath(import.meta.url)),
    //   '../__tests__/20-filtered.svg',
    // )
    //
    // const svgMerged = path.resolve(
    //   path.dirname(url.fileURLToPath(import.meta.url)),
    //   '../__tests__/30-merged.svg',
    // )
    //
    // it('should annotate the svg', async () => {
    //   const temporary = new Temporary()
    //   const merged = temporary.file('berlin-filtered.svg')
    //   await mergePathsFile(svgFiltered, merged)
    //
    //   const f = await fs.promises.readFile(merged, 'utf8')
    //
    //   expect(f.slice(0, 500)).toMatchInlineSnapshot(
    //     `"<svg xmlns="http://www.w3.org/2000/svg" width="1661" height="1004" fill="none"><path stroke="#7E5330" stroke-width="8" d="M740.256 445.979h600.224c9.11 0 14.1 5.809 14.1 5.809l56.62 56.621s4.74 5.809 14.11 5.809 14.23-5.922 14.23-5.922l171.82-171.827" data-ubhchn="3"/><path stroke="#224F86" stroke-width="8" d="M1018.06,809.578v-384.033c0,0 0.58,-7.64 -5.86,-14.078c-3.29,-3.284 -88.796,-88.795 -188.577,-188.576l-2.148,-2.168l-100.245,-100.245c-6.437,-6.437 -5.863,-14.078 -5.863,-14.078v-78.563" d"`,
    //   )
    // })
    //
    // it('saves the other file', async () => {
    //   await mergePathsFile(svgFiltered, svgMerged)
    //   const f = await fs.promises.readFile(svgMerged, 'utf8')
    //
    //   expect(f.slice(0, 500)).toMatchInlineSnapshot(
    //     `"<svg xmlns="http://www.w3.org/2000/svg" width="1661" height="1004" fill="none"><path stroke="#7E5330" stroke-width="8" d="M740.256 445.979h600.224c9.11 0 14.1 5.809 14.1 5.809l56.62 56.621s4.74 5.809 14.11 5.809 14.23-5.922 14.23-5.922l171.82-171.827" data-ubhchn="3"/><path stroke="#224F86" stroke-width="8" d="M1018.06,809.578v-384.033c0,0 0.58,-7.64 -5.86,-14.078c-3.29,-3.284 -88.796,-88.795 -188.577,-188.576l-2.148,-2.168l-100.245,-100.245c-6.437,-6.437 -5.863,-14.078 -5.863,-14.078v-78.563" d"`,
    //   )
    // })
  })

  // describe('berlin u', () => {
  //   it('should merge the paths', async () => {
  //     const svgMerged = path.resolve(
  //       path.dirname(url.fileURLToPath(import.meta.url)),
  //       '../__tests__/30-merged-berlin.svg',
  //     )
  //     const svgFiltered = P('berlin', 'u').SRC.SVG.FILTLIN_11
  //     await mergePathsFile(svgFiltered, svgMerged)
  //
  //     const f = await fs.promises.readFile(svgMerged, 'utf8')
  //     expect(f).toMatchInlineSnapshot(`
  //       "<svg xmlns="http://www.w3.org/2000/svg" width="1661" height="1004" fill="none">
  //           <path stroke="#7E5330" stroke-width="8" d="M740.256 445.979h600.224c9.11 0 14.1 5.809 14.1 5.809l56.62 56.621s4.74 5.809 14.11 5.809 14.23-5.922 14.23-5.922l171.82-171.827" data-ubhnchn="3"/>
  //           <path stroke="#224F86" stroke-width="8" d="M823.623,222.891c99.781,99.781 185.287,185.292 188.577,188.576c6.44,6.438 5.86,14.078 5.86,14.078v384.033zM821.475,220.723l-100.245,-100.245c-6.437,-6.437 -5.863,-14.078 -5.863,-14.078v-78.563z" data-ubhnchn="4"/>
  //           <path stroke="#8C6DAB" stroke-width="8" d="M900.304 938.59V439.909s.573-7.64-5.864-14.078L668.266 199.657" data-ubhnchn="5"/>
  //           <path stroke="#528DBA" stroke-width="8" d="M685.089,719.286h53.548c0,0 7.647,0.613 14.127,-5.867l76.421,-76.421c0,0 5.06,-5.848 14.164,-5.848c0,0 7.834,-0.418 14.146,5.895c6.313,6.312 57.403,57.756 57.403,57.756c0,0 4.889,5.827 14.139,5.826h128.393c0,0 7.79,-0.504 14.13,5.84c6.35,6.344 256.42,256.414 256.42,256.414zM711.521,719.273h-232.68c0,0 -7.744,0.57 -14.174,-5.861l-24.587,-24.587c0,0 -5.893,-4.988 -5.893,-14.176v-89.79305zM434.187,584.85595l-358.747,-173.87595h338.705c1.679,0 7.954,-0.353 14.23,5.922c6.275,6.276 5.812,14.065 5.812,14.065z" data-ubhnchn="7"/>
  //
  //           <path stroke="#F3791D" stroke-width="8" d="M579.209,840.345c0,0 0.543,7.737 -5.832,14.112l-40.831,40.831l46.663,-300.358v-121.691c0,0 -0.662,-7.635 5.834,-14.131l237.897,-237.897l-243.731,385.133z" data-ubhnchn="9"/>
  //
  //
  //           <path stroke="#007A5B" stroke-linejoin="round" stroke-width="8" d="m296.02 942.985 317.787-317.787s5.265-5.87 14.171-5.87h542.152" data-ubhnchn="12"/>
  //           <path stroke="#7DAD4C" stroke-width="8" d="M511.575 607.394h659.255" data-ubhnchn="20"/>
  //           <path stroke="#DA421E" stroke-linejoin="round" stroke-width="8" d="M434.651,532.205h117.558c9.126,0 14.139,5.828 14.139,5.828l44.81111,44.81197l-304.57811,-50.63997c0,0 -7.474,0.861 -14.147,-5.813l-71.612,-71.611l456.03059,75.20828zM611.15911,582.84497l79.2302,13.17303l-57.75531,0c-8.906,0 -14.171,-5.869 -14.171,-5.869zM700.778,596.018c0,0 5.37156,-0.11572 10.44519,3.4639l-20.83387,-3.4639zM711.22319,599.4819l74.74981,12.4281c-0.00072,0.04062 -0.088,9.92322 -0.088,13.613c0.001,8.812 -5.312,13.625 -5.812,14.125c-0.5,0.5 -5.25,5.875 -14.188,5.875c-8.937,0 -14.114,-5.864 -14.114,-5.864l-38.197,-38.198c-0.7615,-0.76109 -1.55247,-1.41585 -2.35081,-1.9791zM785.973,611.91l0,0c0,-0.00017 0,-0.00017 0,0zM676.85259,529.98928l122.96748,-1.12494c-2.47706,0.78613 -5.37934,2.24792 -8.09508,4.96366c-6.094,6.094 -5.839,14.143 -5.839,14.143zM805.912,527.954h78.13l186.138,-271.925v129.539c0,8.972 -5.83,14.113 -5.83,14.113l-122.473,122.473c-6.124,6.126 -14.104,5.8 -14.104,5.8h-28.443l-99.50992,0.91034c3.08044,-0.97763 5.50327,-0.91034 6.09192,-0.91034z" data-ubhnchn="41"/>
  //
  //           <path stroke="#F0D722" stroke-width="8" d="M685.124 620.566v181.935" data-ubhnchn="44"/>
  //       </svg>"
  //     `)
  //   })
  // })
})
