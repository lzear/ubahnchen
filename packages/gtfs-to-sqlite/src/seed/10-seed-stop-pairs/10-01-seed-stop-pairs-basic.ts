/**
 * `
 *     SELECT
 *         trips.trip_id,
 *         stop_times.stop_id,
 *         routes.route_name
 *     FROM stop_times
 *     JOIN
 *         trips
 *         ON stop_times.trip_id = trips.trip_id
 *     JOIN
 *         routes
 *         ON trips.route_id = routes.route_id
 *     ORDER BY
 *         trips.trip_id,
 *         stop_times.stop_sequence
 *   `)
 */

import { eq } from 'drizzle-orm'
import type { BetterSQLite3Database } from 'drizzle-orm/better-sqlite3'

import { drizzleTables } from '@ubahnchen/database'
import { Perf } from '@ubahnchen/utils'

import type { DefaultOptions } from '../00-seed'

type StopTimesDatum = {
  stop_times: { stop_id: string } | null
  trips: { trip_id: string } | null
  routes: { route_id: string; route_name: string } | null
}

const { stopTimes, trips, routes, stopPairs } = drizzleTables
const getStopTimesForRoute = (
  drizzled: BetterSQLite3Database,
  routeId: string,
): StopTimesDatum[] => {
  // const q = drizzled
  //   .select({
  //     trips: { trip_id: trips.trip_id },
  //     stop_times: { stop_id: stopTimes.trip_id },
  //     routes: { route_id: routes.route_id },
  //   })
  //   .from(routes)
  //   .where(eq(routes.route_id, routeId))
  //   .leftJoin(trips, eq(routes.route_id, trips.route_id))
  //   .leftJoin(stopTimes, eq(stopTimes.trip_id, trips.trip_id))
  //   .orderBy(trips.trip_id, stopTimes.stop_sequence)

  const q2 = drizzled
    .select({
      trips: { trip_id: trips.trip_id },
      stop_times: { stop_id: stopTimes.stop_id },
      routes: { route_id: routes.route_id, route_name: routes.route_name },
    })
    .from(routes)
    .where(eq(routes.route_id, routeId))
    .leftJoin(trips, eq(routes.route_id, trips.route_id))
    .leftJoin(stopTimes, eq(stopTimes.trip_id, trips.trip_id))
    .orderBy(trips.trip_id, stopTimes.stop_sequence)
  // console.log('🦺 antoinelog q.', q.toSQL())

  // const results0: StopTimesDatum[] = q.all()

  // console.log('🦺 antoinelog results0.length', results0.length)

  const results: StopTimesDatum[] = q2.all()

  return results
}

const countStopTimesDate = (
  stopTimesData: StopTimesDatum[],
): Map<string, { stopId1: string; stopId2: string; count: number }> => {
  const map = new Map<
    string,
    { stopId1: string; stopId2: string; count: number }
  >()

  let previousStop: StopTimesDatum | undefined

  for (const datum of stopTimesData) {
    if (!datum.trips?.trip_id) throw new Error('trip_id is undefined')
    if (!datum.routes?.route_id) throw new Error('route_id is undefined')
    if (!datum.stop_times?.stop_id) throw new Error('stop_times is undefined')

    if (previousStop && previousStop?.trips?.trip_id !== datum.trips.trip_id)
      previousStop = undefined

    if (previousStop) {
      if (!previousStop.trips?.trip_id) throw new Error('trip_id is undefined')
      if (!previousStop.routes?.route_id)
        throw new Error('route_id is undefined')
      if (!previousStop.stop_times?.stop_id)
        throw new Error('stop_times is undefined')

      const separator = '-'

      const v1 = {
        stopId1: previousStop.stop_times.stop_id,
        stopId2: datum.stop_times.stop_id,
        routeId: datum.routes.route_id,
      }

      for (const v of Object.values(v1))
        if (v.includes(separator))
          throw new Error(`separator is in value! ${v}`)

      const key = JSON.stringify(v1)
      const existing = map.get(key) || { ...v1, count: 0 }
      map.set(key, { ...existing, count: existing.count + 1 })
    }

    previousStop = datum
  }
  return map
}
export const seedStopPairsBasicInner = (
  options: DefaultOptions,
  logger?: (message: string) => void,
  debug?: (message: string) => void,
) => {
  const { drizzled } = options

  const routesData = drizzled.select().from(routes).all()

  debug?.(`iterating ${routesData.length} routes`)

  for (const routesDatum of routesData) {
    debug?.(`${routesDatum.route_id}: ${routesDatum.route_name}`)

    const stopTimesData: StopTimesDatum[] = getStopTimesForRoute(
      drizzled,
      routesDatum.route_id,
    )

    debug?.(`${routesDatum.route_id}: ${stopTimesData.length} stop_times`)

    const map = countStopTimesDate(stopTimesData)

    debug?.(`${routesDatum.route_id}: counted ${map.size} stop_pairs`)

    for (const [_key, item] of map) {
      drizzled
        .insert(stopPairs)
        .values({
          stop_id_1: item.stopId1,
          stop_id_2: item.stopId2,
          route_id: routesDatum.route_id,
          count: item.count,
          is_one_way: 1,
        })
        .run()
    }

    logger?.(
      `${routesDatum.route_id}: inserted ${map.size} stop_pairs for ${routesDatum.route_name}`,
    )
  }
}

export const seedStopPairsBasic = (options: DefaultOptions) => {
  const perf = new Perf()
  perf.go()
  return seedStopPairsBasicInner(
    options,
    (m) => perf.log(m),
    (m) => perf.log(m),
  )
}
