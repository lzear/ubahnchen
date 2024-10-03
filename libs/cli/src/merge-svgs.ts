import type { City } from '@ubahnchen/cities'
import { cities } from '@ubahnchen/cities'
import { P } from '@ubahnchen/cities/node'
import { mergeSvgFiles } from '@ubahnchen/svg/node'
import { log2DArray, logStrings } from '@ubahnchen/utils'

export const mergeSvgs = async (cc: City[], mm: string | undefined) => {
  const array = [] as [string, string, string][]
  for (const c of cc)
    for (const m of mm ? [mm] : Object.keys(cities[c].maps))
      try {
        await mergeSvgFiles(
          [
            P(c, m).SRC.SVG.STEP_31_JUST_LINES,
            P(c, m).SRC.SVG.STEP_32_JUST_STATIONS,
          ],
          P(c, m).SRC.SVG.STEP_30_JUST_LINES_N_STATIONS,
        )
        array.push(['✅ ', c, m])
      } catch {
        array.push(['❌ ', c, m])
      }
  logStrings(log2DArray(array))
}
