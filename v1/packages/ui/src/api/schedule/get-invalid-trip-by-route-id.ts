import { getRoutes } from './get-routes'
import { invalidTripIdsForRoute } from './invalid-trip-ids-for-route'

export const getInvalidTripByRouteId = async (route_id: string) => {
  const routes = await getRoutes()

  const route = routes.find((r) => r.route_id === route_id)

  if (!route) throw new Error(`Route not found: ${route_id}`)

  return {
    ...route,
    trip_ids: await invalidTripIdsForRoute(route),
  }
}
