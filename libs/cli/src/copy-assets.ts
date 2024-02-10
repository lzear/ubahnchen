import fs from 'node:fs'

import type { City } from '@ubahnchen/cities'
import { cities } from '@ubahnchen/cities'
import { P, svgArray } from '@ubahnchen/cities/node'
import { log2DArray, logStrings } from '@ubahnchen/utils'

export const copyPublicAssets = async (cc: City[]) => {
  const array = [] as [string, string, string, string][]
  for (const c of cc)
    for (const m of Object.keys(cities[c].maps))
      for (const svg of svgArray)
        try {
          const p = P(c, m)
          await fs.promises.mkdir(p.PUBLIC.SVG.DIR, { recursive: true })
          await fs.promises.copyFile(p.SRC.SVG[svg], p.PUBLIC.SVG[svg])
          array.push(['✅ ', c, m, svg])
        } catch {
          array.push(['❌ ', c, m, svg])
        }
  logStrings(log2DArray(array))
}
