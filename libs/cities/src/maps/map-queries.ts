import { eq, inArray, isNull } from 'drizzle-orm'
import _ from 'lodash'

import { drizzleTables, getDatabase } from '@ubahnchen/database'
import { truthy } from '@ubahnchen/utils'

import type { City, GTFS } from '../index'
import { getMap } from '../map'
import { paths } from '../paths'

import type { Stop, StopPair } from './types'

export const getDatabaseForCity = (city: City) =>
  getDatabase(paths(city).SQLITE_BIG)

export const getSmallDatabaseForCity = (city: City) =>
  getDatabase(paths(city).SQLITE_SMALL)

const { stopPairs, routes } = drizzleTables

export type UsedStopsResult = { stopPairs: StopPair[]; stops: Stop[] }

export class MapQueries {
  private database
  constructor(private city: City) {
    this.database = getDatabaseForCity(this.city)
  }

  routes() {
    return this.database.drizzled.select().from(routes).all()
  }

  stops({ onlyParents }: { onlyParents: boolean }): GTFS.Stop[] {
    const { stops } = drizzleTables
    const q = this.database.drizzled.select().from(stops)
    return onlyParents ? q.where(isNull(stops.parent_station)).all() : q.all()
  }

  stopPairs(route_types: number[]) {
    return this.database.drizzled
      .select()
      .from(routes)
      .where(inArray(routes.route_type, route_types))
      .innerJoin(stopPairs, eq(stopPairs.route_id, routes.route_id))
      .groupBy(stopPairs.stop_id_1, stopPairs.stop_id_2, routes.route_name)
      .orderBy(stopPairs.count)
      .all()
  }

  usedStops(map: string, onlyParents: boolean): UsedStopsResult {
    const { routeTypes, stopsFilter } = getMap(this.city, map)
    const stopPairs = this.stopPairs(routeTypes)
    const stops = this.stops({ onlyParents: false })
    const excluded = new Set<string>()
    if (stopsFilter)
      for (const stop of stops)
        if (!stopsFilter(stop)) excluded.add(stop.stop_id)
    const stopById = _.keyBy(stops, 'stop_id')
    const usedStops = new Set<string>()
    const newStopPairs = stopPairs
      .map((sp) => {
        const s1 = stopById[sp.stop_pairs.stop_id_1]
        const s2 = stopById[sp.stop_pairs.stop_id_2]
        if (!s1 || !s2) throw new Error('Missing')
        if (excluded.has(s1?.stop_id) || excluded.has(s2?.stop_id)) return null
        const stop_id_1 = (onlyParents && s1.parent_station) || s1.stop_id
        const stop_id_2 = (onlyParents && s2.parent_station) || s2.stop_id
        usedStops.add(stop_id_1)
        usedStops.add(stop_id_2)
        return {
          ...sp,
          stop_pairs: { ...sp.stop_pairs, stop_id_1, stop_id_2 },
        }
      })
      // eslint-disable-next-line unicorn/no-array-callback-reference
      .filter(truthy)

    return {
      stopPairs: newStopPairs,
      // eslint-disable-next-line unicorn/no-array-callback-reference
      stops: [...usedStops].map((stopId) => stopById[stopId]).filter(truthy),
    }
  }
}
