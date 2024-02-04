'use server'

import { revalidatePath } from 'next/cache'

import type { City, StopsPositions } from '@ubahnchen/cities'
import { mapAsset, MapAssetName } from '@ubahnchen/cities/node'

export const getStopPositions = async (city: City, map: string) =>
  mapAsset(city, map, MapAssetName.PLACE_STOPS).read({})

export const recordStopPosition = async (params: {
  city: City
  map: string
  stops: StopsPositions
}) => {
  await mapAsset(params.city, params.map, MapAssetName.PLACE_STOPS).write(
    params.stops,
  )
  revalidatePath(
    `/dev/${params.city}/${params.map}/${MapAssetName.PLACE_STOPS}`,
  )
}
