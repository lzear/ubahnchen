import type { NextApiRequest, NextApiResponse } from 'next'
import { InvalidTripsPayload } from '../../src/lib/lib/contracts/invalid-trips'
import { getInvalidTripsByRouteNames } from '../../src/api/schedule/get-invalid-trips-by-route-names'

const invalidTrips = async (
  _request: NextApiRequest,
  response: NextApiResponse,
) => {
  const data = await getInvalidTripsByRouteNames()
  const payload: InvalidTripsPayload = {
    data,
    invalid_trips_count: data.flatMap((d) => d.trip_ids).length,
  }
  return response.status(200).json(payload)
}

export default invalidTrips
