import type { City } from '@ubahnchen/cities'
import { cities } from '@ubahnchen/cities'
import { P } from '@ubahnchen/cities/node'
import { splitSubpaths } from '@ubahnchen/svg/node'
import { log2DArray, logStrings } from '@ubahnchen/utils'

import { nodeSvg } from './node-svg'

export const splitPaths = async (cc: City[]) => {
  nodeSvg()
  const array = [] as [string, string, string][]
  for (const c of cc)
    for (const m of Object.keys(cities[c].maps))
      try {
        await splitSubpaths(
          P(c, m).SRC.SVG.STEP_11_LINES_STATIONS,
          P(c, m).SRC.SVG.STEP_12_SPLIT_PATHS,
        )
        array.push(['✅ ', c, m])
      } catch (error) {
        console.debug(error)
        array.push(['❌ ', c, m])
      }
  logStrings(log2DArray(array))
}
