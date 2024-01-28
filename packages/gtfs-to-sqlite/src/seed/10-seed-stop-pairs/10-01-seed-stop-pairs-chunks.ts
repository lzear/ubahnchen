import { eq } from 'drizzle-orm'
import type { BetterSQLite3Database } from 'drizzle-orm/better-sqlite3'
import type { Ora } from 'ora'
import { oraPromise } from 'ora'
import pLimit from 'p-limit'

import { defaultTextPerf, successText } from '@ubahnchen/csv'
import { drizzleTables } from '@ubahnchen/database'
import { chunkify, Perf, wait } from '@ubahnchen/utils'

import type { DefaultOptions } from '../00-seed'

const { stopTimes, trips, routes, stopPairs } = drizzleTables

const CHUNK_SIZE = 2000
const CONCURRENCY = 2

type StopPairPayload = {
  stop_id_1: string
  stop_id_2: string
  route_id: string
  count: number
  is_one_way: number
}
type StopTimesDatum = {
  stop_times: { stop_id: string } | null
  trips: { trip_id: string } | null
  routes: { route_id: string; route_name: string } | null
}
type RouteDatum = { route_id: string; route_name: string; route_type: number }
type StopPairKey = { stopId1: string; stopId2: string /* routeId: string */ }

const displayPerf = ({
  perfRoutes,
  perfInsert,
  defaultText,
}: {
  perfRoutes: Perf
  perfInsert: Perf
  defaultText: typeof defaultTextPerf | typeof successText
}) =>
  [
    defaultText({ ora: { text: `stop_pairs`.padEnd(14) }, perf: perfInsert }),
    defaultText({ ora: { text: `routes` }, perf: perfRoutes }),
  ].join('   ◆   ')

const getStopTimesForRoute = async (
  drizzled: BetterSQLite3Database,
  routeId: string,
): Promise<StopTimesDatum[]> =>
  drizzled
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

const countStopPairs = (
  stopTimesData: StopTimesDatum[],
): Map<string, { stopPairKey: StopPairKey; count: number }> => {
  const map = new Map<string, { stopPairKey: StopPairKey; count: number }>()

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
      const stopPairKey = {
        stopId1: previousStop.stop_times.stop_id,
        stopId2: datum.stop_times.stop_id,
        // routeId: datum.routes.route_id,
      }
      const key = JSON.stringify(stopPairKey)
      const existing = map.get(key)
      map.set(key, { stopPairKey, count: (existing?.count ?? 0) + 1 })
    }
    previousStop = datum
  }
  return map
}

const insertStopPairsForRoute = async ({
  drizzled,
  route,
  pusher,
}: {
  drizzled: BetterSQLite3Database
  route: RouteDatum
  pusher: (v: StopPairPayload) => Promise<unknown> | void
}) => {
  const stopTimesData = await getStopTimesForRoute(drizzled, route.route_id)
  const stopPairsCounts = countStopPairs(stopTimesData)
  for (const value of stopPairsCounts.values())
    void pusher({
      stop_id_1: value.stopPairKey.stopId1,
      stop_id_2: value.stopPairKey.stopId2,
      route_id: route.route_id,
      count: value.count,
      is_one_way: 1,
    })
}

export const seedStopPairsBasicInner = async ({
  options,
  ora,
  perfRoutes,
  perfInsert,
}: {
  options: DefaultOptions
  ora: Ora
  perfRoutes: Perf
  perfInsert: Perf
}) => {
  const { drizzled, database } = options
  const routesData = await drizzled.select().from(routes)

  database.pragma('foreign_keys = OFF')
  database.pragma('synchronous = OFF')
  database.pragma('journal_mode = OFF')

  const inserter = chunkify(
    (v: StopPairPayload[]) => drizzled.insert(stopPairs).values(v),
    async (pusher_) => {
      const pusher = (sp: StopPairPayload) => {
        pusher_(sp)
        perfInsert.tick(1)
      }

      const processRoutes_ = async (route: RouteDatum) => {
        await wait(0)
        await insertStopPairsForRoute({ drizzled, route, pusher })
        perfRoutes.tick(1)
        ora.text = displayPerf({
          defaultText: defaultTextPerf,
          perfInsert,
          perfRoutes,
        })
      }
      const l = pLimit(CONCURRENCY)
      const processRoutes = (route: RouteDatum) =>
        l(() => processRoutes_(route))
      await Promise.all(routesData.map((element) => processRoutes(element)))
    },
    CHUNK_SIZE,
  )

  const r = await inserter

  database.pragma('foreign_keys = ON')
  database.pragma('synchronous = ON')
  database.pragma('journal_mode = ON')

  return r
}

export const seedStopPairsOraChunk = async (options: DefaultOptions) => {
  const perfRoutes = new Perf({
    totalCount: options.drizzled.select().from(routes).all().length,
    sampleDurationMs: 100,
  })
  const perfInsert = new Perf()
  perfRoutes.go()
  perfInsert.go()
  return oraPromise(
    (ora) =>
      seedStopPairsBasicInner({
        options,
        ora,
        perfRoutes,
        perfInsert,
      }),
    {
      text: 'stop_pairs'.padEnd(14),
      successText: () =>
        displayPerf({
          defaultText: successText,
          perfInsert,
          perfRoutes,
        }),
    },
  )
}
