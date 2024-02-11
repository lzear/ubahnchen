import * as fs from 'node:fs'

import { expect } from '@jest/globals'

import { P } from '@ubahnchen/cities/node'
import { Temporary } from '@ubahnchen/node'

import { annotateSvg } from './annotate-svg'

describe(annotateSvg, () => {
  it('has data-ubhchn attributes', () => {
    const temporary = new Temporary()
    const output = `${temporary.directory()}/output.svg`
    annotateSvg(P('berlin', 'u').SRC.SVG.INITIAL_00, output, 'ubhchn')
    const svgString = fs.readFileSync(output, 'utf8')
    expect(svgString.slice(5000, 6000)).toMatchInlineSnapshot(`
      "14.1028,5.8089 9.3692,0 14.2304,-5.9221 14.2304,-5.9221 l 171.8271,-171.8269" id="path4495-1-7-7" inkscape:connector-curvature="0" sodipodi:nodetypes="ccscscc" data-ubhchn="13"/>
              <path style="fill:none;stroke:#224f86;stroke-width:8;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" d="M 5386.7812,1537.8275 V 1153.795 c 0,0 0.574,-7.6404 -5.8635,-14.0779 -3.2842,-3.2841 -88.7947,-88.795 -188.5758,-188.57603" id="path7255-4-0" inkscape:connector-curvature="0" sodipodi:nodetypes="cccc" data-ubhchn="14"/>
              <path style="fill:none;stroke:#8c6dab;stroke-width:8;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" d="m 5269.0224,1666.8405 v -498.6816 c 0,0 0.574,-7.6403 -5.8635,-14.0778 -6.4375,-6.4375 -226.1742,-226.17432 -226.1742,-226.17432" id="path4495-0-9" inkscape:connector-curvature="0" sodipodi:nodetypes="ccsc" data-ubhchn="15"/>
              <path style="fill:none;stroke:#8c6"
    `)
  })
})
