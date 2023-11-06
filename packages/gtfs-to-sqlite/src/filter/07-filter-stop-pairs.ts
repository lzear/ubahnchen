import { inArray } from 'drizzle-orm'
import _ from 'lodash'

import { drizzleTables } from '@ubahnchen/database'

import type { SourceTarget } from './types.js'

export const filterStopPairs = ({ source, target }: SourceTarget) => {
  const { routes, stopPairs } = drizzleTables
  const validRoutes = target.drizzled.select().from(routes).all()
  const validRouteIds = validRoutes.map((r) => r.route_id)
  const pairsToTake = source.drizzled
    .select()
    .from(stopPairs)
    .where(inArray(stopPairs.route_id, validRouteIds))
    .all()
  const chunks = _.chunk(pairsToTake, 1000)
  for (const chunk of chunks) {
    target.drizzled.insert(stopPairs).values(chunk).run()
  }
}
