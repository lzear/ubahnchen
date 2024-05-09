import type { City } from '@ubahnchen/cities'
import { cities } from '@ubahnchen/cities'
import { mapAsset, MapAssetName, P } from '@ubahnchen/cities/node'
import { filterSvgFile } from '@ubahnchen/svg/node'
import { log2DArray, logStrings } from '@ubahnchen/utils'

import { X_ATTRIBUTE } from './consts'

export const getShapes = async (a: { city: City; map: string }) =>
  mapAsset(a.city, a.map, MapAssetName.SPLIT_SHAPES).read([])

export const filterLines = async (cc: City[]) => {
  const array = [] as [string, string, string][]
  for (const c of cc)
    for (const m of Object.keys(cities[c].maps))
      try {
        const shapes = await getShapes({ city: c, map: m })
        await filterSvgFile(
          P(c, m).SRC.SVG.ANNOTED_10,
          P(c, m).SRC.SVG.FILTLIN_11,
          (line) =>
            !!line.dataset[X_ATTRIBUTE] &&
            shapes.includes(line.dataset[X_ATTRIBUTE]),
        )
        array.push(['✅ ', c, m])
      } catch {
        array.push(['❌ ', c, m])
      }
  logStrings(log2DArray(array))
}
