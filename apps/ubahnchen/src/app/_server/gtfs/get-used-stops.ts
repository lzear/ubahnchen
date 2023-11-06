import _ from 'lodash'

import type { City } from '@ubahnchen/cities'
import type { MapConfig } from '@ubahnchen/cities/src/data/types'
import { truthy } from '@ubahnchen/utils'

import { getStopPairs } from './get-stop-pairs.js'
import { getStops } from './get-stops.js'
import type { Stop, StopPair } from './types.js'

export const getUsedStops = async ({
  city,
  onlyParents,
  mapConfig,
}: {
  city: City
  mapConfig: MapConfig
  onlyParents: boolean
}): Promise<{ stops: Stop[]; stopPairs: StopPair[] }> => {
  const routeTypes = mapConfig.routeTypes
  const stopPairs = await getStopPairs(city, routeTypes)
  const stops = await getStops({ city, onlyParents: false })

  const stopsFilter = mapConfig.stopsFilter
  const excludedStopIds = stopsFilter
    ? stops.filter((stop) => !stopsFilter(stop)).map((stop) => stop.stop_id)
    : []
  const stopById = _.keyBy(stops, 'stop_id')

  const usedStops = new Set<string>()

  const newStopPairs = stopPairs
    .map((sp) => {
      const s1 = stopById[sp.stop_pairs.stop_id_1]
      const s2 = stopById[sp.stop_pairs.stop_id_2]
      if (
        excludedStopIds.includes(s1.stop_id) ||
        excludedStopIds.includes(s2.stop_id)
      ) {
        return null
      }
      const newId1 = onlyParents ? s1.parent_station || s1.stop_id : s1.stop_id
      const newId2 = onlyParents ? s2.parent_station || s2.stop_id : s2.stop_id
      usedStops.add(newId1)
      usedStops.add(newId2)
      return {
        ...sp,
        stop_pairs: {
          ...sp.stop_pairs,
          stop_id_1: newId1,
          stop_id_2: newId2,
        },
      }
    })
    // eslint-disable-next-line unicorn/no-array-callback-reference
    .filter(truthy)

  const newStops = [...usedStops].map((stopId) => stopById[stopId])

  return { stopPairs: newStopPairs, stops: newStops }
}
