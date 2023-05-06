import { getRoutes } from './get-routes'
import { getInvalidTripByRouteId } from './get-invalid-trip-by-route-id'

export const getInvalidTripsByRouteIds = async () => {
  const routes = await getRoutes()
  return Promise.all(
    routes.map((route) => getInvalidTripByRouteId(route.route_id)),
  )
}
