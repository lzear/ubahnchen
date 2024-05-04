import _ from 'lodash'

import type { City, Route, Shape, Stop, StopPair } from '@ubahnchen/cities'

import 'server-only'

import { getRouteShapes } from '../../components/server/get-route-shapes'
import { getRoutes, getStopPairs, getStops } from '../_server/gtfs/queries'

import type { parseUrlParameters } from './search-parameters'

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
  const routes = getRoutes(city)
  if (!routes) throw new Error(`No routes found for ${city}`)
  if (routes.length === 0) throw new Error(`No routes found for ${city}`)

  const allRouteTypes = _.uniq(routes.map((r) => r.route_type)).sort(
    (a, b) => a - b,
  )
  const selectedRouteTypes =
    parameters.RouteType ?? [allRouteTypes[0]].filter(Boolean)

  const stops = getStops(city, false)
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
