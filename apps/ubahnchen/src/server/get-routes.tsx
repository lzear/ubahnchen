import { drizzleTables } from '@ubahnchen/database'

import 'server-only'

import { getDatabaseForCity } from './get-database-for-city'
import { lru } from './singletons'

export type Route = { route_id: string; route_name: string; route_type: number }

const query = (city: string): Route[] => {
  const { routes } = drizzleTables

  const database = getDatabaseForCity(city)
  return database.drizzled.select().from(routes).all()
}

export const getRoutes = lru(query)
