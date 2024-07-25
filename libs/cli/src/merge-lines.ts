import type { City } from '@ubahnchen/cities'
import { cities } from '@ubahnchen/cities'
import { mapAsset, MapAssetName, P } from '@ubahnchen/cities/node'
import { mergePathsFile } from '@ubahnchen/svg/node'
import { log2DArray, logStrings } from '@ubahnchen/utils'

export const getShapes = async (a: { city: City; map: string }) =>
  mapAsset(a.city, a.map, MapAssetName.SPLIT_SHAPES).read([])

export const mergeLines = async (cc: City[], map?: string) => {
  const array = [] as [string, string, string][]
  for (const c of cc)
    for (const m of map ? [map] : Object.keys(cities[c].maps))
      try {
        await mergePathsFile(
          P(c, m).SRC.SVG.STEP_20_LINES_ONLY,
          P(c, m).SRC.SVG.STEP_21_LINES_MERGED,
        )
        array.push(['✅ ', c, m])
      } catch (error) {
        console.error(error)
        array.push(['❌ ', c, m])
      }
  logStrings(log2DArray(array))
}
