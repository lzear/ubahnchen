import { eq } from 'drizzle-orm'

import type { TripByHourRow, TripSegment } from '@/pages/api/_keyframes'
import type { City } from '@ubahnchen/cities'
import { getDatabaseForCity } from '@ubahnchen/cities/node'
import type { DrizzleTypes } from '@ubahnchen/database'
import { drizzleTables } from '@ubahnchen/database'

const { stopPairs, stopPairsSvgPaths } = drizzleTables

type Paaair = {
  stop_pairs: DrizzleTypes['stopPairs']
  stop_pairs_svg_paths: DrizzleTypes['stopPairsSvgPaths']
}

export const makePairMap = (city: City, map: string): Map<string, Paaair> => {
  const { drizzled } = getDatabaseForCity(city)

  const pairs = drizzled
    .select()
    .from(stopPairsSvgPaths)
    .innerJoin(stopPairs, eq(stopPairsSvgPaths.stop_pair_idx, stopPairs.idx))
    .where(eq(stopPairsSvgPaths.map, map))
    .all()

  console.log(`antoinelog pairs[0]`, pairs[0])

  const maap = new Map<string, Paaair>()
  const mkey = (p: Paaair) =>
    `${p.stop_pairs.route_id}-${p.stop_pairs.stop_id_1}-${p.stop_pairs.stop_id_2}`
  for (const pair of pairs) maap.set(mkey(pair), pair)
  return maap
}

export const makeSegments = (
  tripStops: TripByHourRow[],
  pairMap: Map<string, DrizzleTypes['stopPairs']>,
): TripSegment[] => {
  const segments: TripSegment[] = []

  let prev: { stopId: string; time: number } | undefined = undefined

  for (const tripStop of tripStops) {
    if (prev) {
      const pair = pairMap.get(
        `${tripStop.route_id}-${prev.stopId}-${tripStop.stop_id}`,
      )
      if (!pair) throw new Error('pair not found')
      segments.push({
        type: 'running',
        start_time: prev.time,
        end_time: tripStop.departure_time,
        start_stop_id: prev.stopId,
        end_stop_id: tripStop.stop_id,
        stop_pair_idx: pair.idx,
      })
    }
    if (tripStop.arrival_time !== tripStop.departure_time)
      segments.push({
        type: 'paused',
        start_time: tripStop.departure_time,
        end_time: tripStop.arrival_time,
        stop_id: tripStop.stop_id,
      })
    prev = { stopId: tripStop.stop_id, time: tripStop.departure_time }
  }

  return segments
}
