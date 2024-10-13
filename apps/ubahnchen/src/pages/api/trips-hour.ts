import { isValid, parseISO } from 'date-fns'
import type { NextApiRequest, NextApiResponse } from 'next'

import { isCity } from '@ubahnchen/cities'

import { findTripsHour } from './_find-trips-hour'
import type { TripByHour } from './_keyframes'

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
  response: NextApiResponse<TripByHour[] | { error: string }>,
) => {
  const queryDate = Array.isArray(request.query.date)
    ? undefined
    : request.query.date

  if (
    request.query.skipPrevious !== 'true' &&
    request.query.skipPrevious !== 'false'
  )
    return response
      .status(400)
      .json({ error: 'skipPrevious must be "false" or "true"' })

  if (!queryDate?.endsWith(':00:00Z'))
    return response
      .status(400)
      .json({ error: 'date param must be present and end with :00:00Z' })

  const city = request.query.city

  if (!isCity(city)) return response.status(400).json({ error: 'invalid city' })

  const routeTypesStr = request.query.routeTypes

  const routeTypes = Array.isArray(routeTypesStr)
    ? routeTypesStr.map(Number)
    : routeTypesStr?.split(',')?.map(Number)

  if (!routeTypes?.length || routeTypes.some((t) => Number.isNaN(t))) {
    return response.status(400).json({ error: 'invalid routeTypes' })
  }

  const date = parseISO(queryDate)
  if (!isValid(date))
    return response.status(400).json({ error: 'invalid date' })
  const skipPrevious = request.query.skipPrevious === 'true'

  const data = findTripsHour({
    date: queryDate,
    skipPrevious,
    routeTypes,
    city,
  })

  setCachingHeader(response)
  return response.status(200).json(data)
}

export default api
