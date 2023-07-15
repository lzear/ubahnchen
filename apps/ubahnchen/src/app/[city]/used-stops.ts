import type { Stop } from '../../server/get-stops'

export type StopPair = {
  routes: {
    route_id: string
    route_name: string
    route_type: number
  }
  stop_pairs: {
    count: number
    idx: number
    route_id: string
    stop_id_1: string
    stop_id_2: string
  }
}

export const usedStopIds = (
  stopPairs: StopPair[],
  stopById: Record<string, Stop>,
  mergeStops: boolean,
) => {
  const usedStops = new Set<string>()

  for (const sp of stopPairs) {
    const s1 = stopById[sp.stop_pairs.stop_id_1]
    const s2 = stopById[sp.stop_pairs.stop_id_2]
    usedStops.add((mergeStops && s1.parent_station) || s1.stop_id)
    usedStops.add((mergeStops && s2.parent_station) || s2.stop_id)
  }
  return [...usedStops]
}

export const usedStops = (
  stopPairs: StopPair[],
  stopById: Record<string, Stop>,
  mergeStops: boolean,
) => {
  return usedStopIds(stopPairs, stopById, mergeStops).map(
    (stopId) => stopById[stopId],
  )
}
