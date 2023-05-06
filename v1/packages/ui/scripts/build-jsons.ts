#!/usr/bin/node

import path from 'node:path'
import process from 'node:process'
import _ from 'lodash'
import { getRoutes } from '../src/api/schedule/get-routes'
import { getStops } from '../src/api/schedule/get-stops'
import { writeFile } from './file'

const makeRoutesJson = async () => {
  const ROUTES_JSON = path.resolve(process.cwd(), 'src/generated/routes.json')
  const routes = await getRoutes()
  const keyedByRouteId = _.keyBy(routes, 'route_id')
  const routeNameByRouteId = _.mapValues(keyedByRouteId, (r) => r.route_name)
  await writeFile(ROUTES_JSON, JSON.stringify(routeNameByRouteId))
}

const makeStopsJson = async () => {
  const STOPS_BY_ID_JSON = path.resolve(
    process.cwd(),
    'src/generated/stops-by-id.json',
  )
  // const STOPS_BY_IDX_JSON = path.resolve(
  //   process.cwd(),
  //   'src/generated/stops-by-idx.json',
  // )
  const routes = await getStops()
  const keyedByStopId = _.keyBy(routes, 'stop_id')
  // const keyedByStopIndex = _.keyBy(routes, 'stop_id')
  const stopNameById = _.mapValues(keyedByStopId, (s) =>
    s.stop_name.replaceAll('(Berlin)', '').trim(),
  )
  await writeFile(STOPS_BY_ID_JSON, JSON.stringify(stopNameById))
}

const main = async () => {
  await Promise.all([makeRoutesJson(), makeStopsJson()])
  process.exit(0)
}

main()
