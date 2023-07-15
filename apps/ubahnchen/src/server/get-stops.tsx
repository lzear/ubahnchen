import { isNull } from 'drizzle-orm'

import type { City } from '@ubahnchen/cities'
import { drizzleTables } from '@ubahnchen/database'

import 'server-only'

import { getDatabaseForCity } from './get-database-for-city'
import { lru } from './singletons'

export type Stop = {
  stop_id: string
  stop_name: string
  stop_lat: number
  stop_lon: number
  parent_station: string | null
}
export const query = (city: City, includeChildren: boolean): Stop[] => {
  const { stops } = drizzleTables
  const database = getDatabaseForCity(city)
  let q = database.drizzled.select().from(stops)
  if (!includeChildren) {
    q = q.where(isNull(stops.parent_station))
  }
  return q.all()
}

export const getStops = lru(query)
