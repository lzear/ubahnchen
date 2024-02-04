'use server'

import type { City } from '@ubahnchen/cities'
import { mapAsset, MapAssetName } from '@ubahnchen/cities/node'

export const saveShapes = async ({
  city,
  map,
  shapeIds,
}: {
  city: City
  map: string
  shapeIds: string[]
}) => mapAsset(city, map, MapAssetName.SPLIT_SHAPES).write(shapeIds)

export const getShapes = async (a: { city: City; map: string }) =>
  mapAsset(a.city, a.map, MapAssetName.SPLIT_SHAPES).read([])
