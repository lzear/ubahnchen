import path from 'node:path'
import url from 'node:url'

import { annotateSvg } from './annotate-svg.js'

const map = 'berlin/u'

describe('Annotate the svg', () => {
  it('should annotate the svg', () => {
    annotateSvg(
      path.resolve(
        path.dirname(url.fileURLToPath(import.meta.url)),
        'data',
        map,
        'svg/20-svgomg.svg',
      ),

      path.resolve(
        path.dirname(url.fileURLToPath(import.meta.url)),
        'data',
        map,
        'svg/20-annotated.svg',
      ),
      'ubhchn',
    )
  })
})
