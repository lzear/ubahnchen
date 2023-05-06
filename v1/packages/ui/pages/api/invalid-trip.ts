import type { NextApiRequest, NextApiResponse } from 'next'
import { getInvalidTripByRouteId } from '../../src/api/schedule/get-invalid-trip-by-route-id'

const invalidTrip = async (
  request: NextApiRequest,
  response: NextApiResponse,
) => {
  const route_id = request.query['route_id']
  if (!route_id || Array.isArray(route_id))
    return response.status(400).json({ error: 'Need route_id' })

  return response
    .status(200)
    .json({ trips: await getInvalidTripByRouteId(route_id) })
}
export default invalidTrip
