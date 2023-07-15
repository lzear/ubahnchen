import { eq } from 'drizzle-orm'

import { drizzleTables } from '@ubahnchen/database'

import 'server-only'

import { getDatabaseForCity } from './get-database-for-city'
import { lru } from './singletons'

export type SP = {
  routes: { route_id: string; route_name: string; route_type: number }
  stop_pairs: {
    route_id: string
    idx: number
    stop_id_1: string
    stop_id_2: string
    count: number
    is_one_way: number
  }
}

const query = (city: string, route_type: number): SP[] => {
  const { stopPairs, routes } = drizzleTables
  const database = getDatabaseForCity(city)
  return database.drizzled
    .select()
    .from(routes)
    .where(eq(routes.route_type, route_type))
    .innerJoin(stopPairs, eq(stopPairs.route_id, routes.route_id))
    .groupBy(stopPairs.stop_id_1, stopPairs.stop_id_2)
    .orderBy(stopPairs.count)
    .all()
}

export const getStopPairs = lru(query)
