import _ from 'lodash'

import type { City } from '@ubahnchen/cities'

import 'server-only'

import { getRouteShapes } from '../../components/server/get-route-shapes.js'
import { getRoutes } from '../_server/gtfs/get-routes.js'
import { getStopPairs } from '../_server/gtfs/get-stop-pairs.js'
import { getStops } from '../_server/gtfs/get-stops.js'
import type { Route, Shape, Stop, StopPair } from '../_server/gtfs/types.js'

import type { parseUrlParameters } from './search-parameters.js'

type R = {
  selectedRouteTypes: number[]
  allRouteTypes: number[]
  routes: Route[]
  shapes?: Shape[]
  stopPairs: StopPair[]
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

  const stops = await getStops({ city, onlyParents: false })
  const stopPairsGroups = await Promise.all(
    selectedRouteTypes.map((routeType) => getStopPairs(city, [routeType])),
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
