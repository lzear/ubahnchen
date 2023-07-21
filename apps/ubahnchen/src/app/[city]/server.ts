import _ from 'lodash'

import type { City } from '@ubahnchen/cities'

import 'server-only'

import { getRouteShapes } from '../../server/get-route-shapes'
import type { Route } from '../../server/get-routes'
import { getRoutes } from '../../server/get-routes'
import type { SP } from '../../server/get-stop-pairs'
import { getStopPairs } from '../../server/get-stop-pairs'
import type { Stop } from '../../server/get-stops'
import { getStops } from '../../server/get-stops'
import type { Shape } from '../../types/gtfs'

import type { parseUrlParameters } from './search-parameters'

type R = {
  selectedRouteTypes: number[]
  allRouteTypes: number[]
  routes: Route[]
  shapes?: Shape[]
  stopPairs: SP[]
  stops: Stop[]
  stopById: Record<string, Stop>
}
export const server = async (
  city: City,
  parameters: ReturnType<typeof parseUrlParameters>,
): Promise<R> => {
  const routes = await getRoutes(city)
  if (!routes) throw new Error(`No routes found for ${city}`)
  if (routes.length === 0) throw new Error(`No routes found for ${city}`)

  const allRouteTypes = _.uniq(routes.map((r) => r.route_type)).sort(
    (a, b) => a - b,
  )
  const selectedRouteTypes =
    parameters.RouteType ?? [allRouteTypes[0]].filter(Boolean)

  const stops = await getStops(city, true)
  const stopPairsGroups = await Promise.all(
    selectedRouteTypes.map((routeType) => getStopPairs(city, routeType)),
  )
  const stopPairs = stopPairsGroups.flat()
  const stopById = _.keyBy(stops, 'stop_id')
  const shapesGroups = parameters.StraightLines
    ? undefined
    : await Promise.all(
        selectedRouteTypes.map((routeType) => getRouteShapes(city, routeType)),
      )
  const shapes = shapesGroups?.flat()

  return {
    selectedRouteTypes,
    allRouteTypes,
    routes,
    shapes,
    stopById,
    stopPairs,
    stops,
  }
}

// export const server = (
//   city: string,
//   parameters: ReturnType<typeof parseUrlParameters>,
// ) => lru.run(city, parameters)