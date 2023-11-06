import { cache } from 'react'

import { drizzleTables } from '@ubahnchen/database'

import 'server-only'

import { getDatabaseForCity } from '../../../components/server/get-database-for-city.js'

import type { Route } from './types.js'

// eslint-disable-next-line @typescript-eslint/require-await
const query = async (city: string): Promise<Route[]> => {
  const { routes } = drizzleTables
  const database = getDatabaseForCity(city)
  return database.drizzled.select().from(routes).all()
}

export const getRoutes = cache(query)
