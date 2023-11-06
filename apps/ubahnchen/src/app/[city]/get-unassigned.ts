'use server'

import type { City } from '@ubahnchen/cities'

import type { Stop, StopPair } from '../_server/gtfs/types.js'

import { getMapData } from './actions.js'
import { usedStops } from './used-stops.js'

export const getUnassignedStopsFilePath = async (
  city: City,
  map: string,
  stopById: Record<string, Stop>,
  stopPairs: StopPair[],
) => {
  const json = await getMapData(city, map)
  return usedStops({ stopPairs, stopById, onlyParents: true })
    .filter((stop) => !json.stops[stop.stop_id])
    .sort((a, b) => {
      if (a.parent_station && !b.parent_station) return -1
      if (!a.parent_station && b.parent_station) return 1
      return a.stop_lat - b.stop_lat
    })
}

export const getUnassignedStopPairsFilePath = async (
  city: City,
  map: string,
  stopPairs: StopPair[],
) => {
  const json = await getMapData(city, map)
  return stopPairs.filter((sp) => !json.stopPairs?.[sp.stop_pairs.idx])
}
