import _ from 'lodash'
import { getInvalidTripsByRouteIds } from './get-invalid-trips-by-route-ids'

export const getInvalidTripsByRouteNames = async () => {
  const trips = await getInvalidTripsByRouteIds()

  const groups = _.groupBy(trips, 'route_name')

  return Object.values(groups).map((g) => {
    if (!g[0]) throw new Error('lwkehf')
    return {
      route_name: g[0]?.route_name,
      route_ids: g.map((r) => r.route_id),
      trip_ids: g.flatMap((r) => r.trip_ids),
    }
  })
}
