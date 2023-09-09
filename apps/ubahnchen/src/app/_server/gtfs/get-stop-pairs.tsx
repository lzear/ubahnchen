import { cache } from 'react'
import { eq, inArray } from 'drizzle-orm'

import { drizzleTables } from '@ubahnchen/database'

import 'server-only'

import { getDatabaseForCity } from '../../../components/server/get-database-for-city'

import type { StopPair } from './types'

const query = async (
  city: string,
  route_types: number[],
  // eslint-disable-next-line @typescript-eslint/require-await
): Promise<StopPair[]> => {
  const { stopPairs, routes } = drizzleTables
  const database = getDatabaseForCity(city)
  return (
    database.drizzled
      .select()
      .from(routes)
      .where(inArray(routes.route_type, route_types))
      .innerJoin(stopPairs, eq(stopPairs.route_id, routes.route_id))
      .groupBy(stopPairs.stop_id_1, stopPairs.stop_id_2, routes.route_name)
      // .groupBy(stopPairs.stop_id_1, stopPairs.stop_id_2)
      .orderBy(stopPairs.count)
      .all()
  )
}

export const getStopPairs = cache(query)
