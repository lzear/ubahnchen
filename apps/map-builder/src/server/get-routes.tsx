import { drizzleTables } from '@ubahnchen/database'

import 'server-only'

import { getDatabaseForCity } from './get-database-for-city'

export const getRoutes = (city: string) => {
  const { routes } = drizzleTables

  const database = getDatabaseForCity(city)
  return database.drizzled.select().from(routes).all()
}
