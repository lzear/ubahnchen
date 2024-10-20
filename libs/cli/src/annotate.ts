import type { City } from '@ubahnchen/cities'
import { cities } from '@ubahnchen/cities'
import { P } from '@ubahnchen/cities/node'
import { annotateSvgFile } from '@ubahnchen/svg/node'
import { log2DArray, logStrings } from '@ubahnchen/utils'

export const annotate = async (cc: City[], mm: string | undefined) => {
  const array = [] as [string, string, string][]
  for (const c of cc)
    for (const m of mm ? [mm] : Object.keys(cities[c].maps))
      try {
        await annotateSvgFile(
          P(c, m).SRC.SVG.STEP_10_SIMPLIFIED,
          P(c, m).SRC.SVG.STEP_20_ANNOTATED,
          'id',
          'id-',
        )
        array.push(['✅ ', c, m])
      } catch {
        array.push(['❌ ', c, m])
      }
  logStrings(log2DArray(array))
}
