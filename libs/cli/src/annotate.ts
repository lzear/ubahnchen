import type { City } from '@ubahnchen/cities'
import { cities } from '@ubahnchen/cities'
import { P } from '@ubahnchen/cities/node'
import { annotateSvgFile } from '@ubahnchen/svg/node'
import { log2DArray, logStrings } from '@ubahnchen/utils'

import { X_ATTRIBUTE } from './consts'

export const annotate = async (cc: City[]) => {
  const array = [] as [string, string, string][]
  for (const c of cc)
    for (const m of Object.keys(cities[c].maps))
      try {
        await annotateSvgFile(
          P(c, m).SRC.SVG.SVGOMGD_02,
          P(c, m).SRC.SVG.ANNOTED_10,
          X_ATTRIBUTE,
        )
        array.push(['✅ ', c, m])
      } catch {
        array.push(['❌ ', c, m])
      }
  logStrings(log2DArray(array))
}
