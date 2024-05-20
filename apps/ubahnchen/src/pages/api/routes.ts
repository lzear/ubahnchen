import { inArray } from 'drizzle-orm'
import type { NextApiRequest, NextApiResponse } from 'next'

import { getRouteTypes } from '@/services/routes/routes'
import { isCity } from '@ubahnchen/cities'
import { P } from '@ubahnchen/cities/node'
import { drizzleTables, getDatabase } from '@ubahnchen/database'

import type { RoutesDao } from './routes-dao'

const ONE_WEEK = 86_400 * 7

export const setCachingHeader = (
  response: NextApiResponse,
  maxAge = ONE_WEEK,
) =>
  response.setHeader(
    'Cache-Control',
    `public, max-age=${maxAge}, s-maxage=${maxAge}`,
  )
const api = (
  request: NextApiRequest,
  response: NextApiResponse<RoutesDao[] | { error: string }>,
) => {
  const city = request.query.city

  if (!isCity(city)) return response.status(400).json({ error: 'invalid city' })

  const map = request.query.map

  if (!map || Array.isArray(map))
    return response.status(400).json({ error: 'invalid map' })
  const routeTypes = getRouteTypes(city, map)

  if (!routeTypes?.length || routeTypes.some((t) => Number.isNaN(t))) {
    return response.status(400).json({ error: 'invalid routeTypes' })
  }

  const db = getDatabase(P(city).SQLITE.BIG)

  const { routes } = drizzleTables

  const routesData = db.drizzled
    .select({
      route_id: routes.route_id,
      route_name: routes.route_name,
      route_type: routes.route_type,
    })
    .from(routes)
    .where(inArray(routes.route_type, routeTypes))
    .all()

  setCachingHeader(response)
  return response.status(200).json(routesData)
}

export default api
