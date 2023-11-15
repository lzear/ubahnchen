import { inArray } from 'drizzle-orm'
import _ from 'lodash'

import { drizzleTables } from '@ubahnchen/database'

import type { SourceTarget } from './types'

export const filterTrips = ({ source, target }: SourceTarget) => {
  const { routes, trips } = drizzleTables
  const validRoutes = target.drizzled.select().from(routes).all()
  const validRouteIds = validRoutes.map((r) => r.route_id)
  const tripsToTake = source.drizzled
    .select()
    .from(trips)
    .where(inArray(trips.route_id, validRouteIds))
    .all()
  const chunks = _.chunk(tripsToTake, 1000)
  for (const chunk of chunks) {
    target.drizzled.insert(trips).values(chunk).run()
  }
}
