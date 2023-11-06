import { inArray } from 'drizzle-orm'
import _ from 'lodash'

import { drizzleTables } from '@ubahnchen/database'

import type { SourceTarget } from './types.js'

export const filterStopTimes = ({ source, target }: SourceTarget) => {
  const { trips, stopTimes } = drizzleTables
  const validTrips = target.drizzled.select().from(trips).all()
  const validRouteIds = _.uniq(validTrips.map((t) => t.route_id))

  for (const routeId of validRouteIds) {
    const tripsInRoute = validTrips.filter((t) => t.route_id === routeId)
    const stopTimesToTake = source.drizzled
      .select()
      .from(stopTimes)
      .where(
        inArray(
          stopTimes.trip_id,
          tripsInRoute.map((t) => t.trip_id),
        ),
      )
      .all()
    const chunks = _.chunk(stopTimesToTake, 1000)
    for (const chunk of chunks) {
      target.drizzled.insert(stopTimes).values(chunk).run()
    }
  }
}
