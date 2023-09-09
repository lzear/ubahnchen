import { cache } from 'react'
import { isNull } from 'drizzle-orm'

import type { City } from '@ubahnchen/cities'
import { drizzleTables } from '@ubahnchen/database'

import 'server-only'

import { getDatabaseForCity } from '../../../components/server/get-database-for-city'

import type { Stop } from './types'

const query = async ({
  city,
  onlyParents,
}: {
  city: City
  onlyParents: boolean
  // eslint-disable-next-line @typescript-eslint/require-await
}): Promise<Stop[]> => {
  const { stops } = drizzleTables
  const database = getDatabaseForCity(city)
  let q = database.drizzled.select().from(stops)
  if (onlyParents) q = q.where(isNull(stops.parent_station))
  return q.all()
}
export const getStops = cache(query)
