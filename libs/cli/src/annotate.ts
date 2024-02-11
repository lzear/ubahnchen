import type { City } from '@ubahnchen/cities'
import { cities } from '@ubahnchen/cities'
import { P } from '@ubahnchen/cities/node'
import { log2DArray, logStrings } from '@ubahnchen/utils'

import { annotateSvg } from './annotate-svg'

export const annotate = (cc: City[]) => {
  const array = [] as [string, string, string][]
  for (const c of cc)
    for (const m of Object.keys(cities[c].maps))
      try {
        annotateSvg(P(c, m).SRC.SVG.INITIAL_00, P(c, m).SRC.SVG.ANNOTED_10)
        array.push(['✅ ', c, m])
      } catch {
        array.push(['❌ ', c, m])
      }
  logStrings(log2DArray(array))
}
