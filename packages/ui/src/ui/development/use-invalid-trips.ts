import { useQuery } from '@tanstack/react-query'
import { InvalidTripsPayload } from '../../lib/lib/contracts/invalid-trips'

export const invalidTripCount = (
  route_name: string,
  payload: InvalidTripsPayload,
) => {
  const route = payload.data.find((r) => r.route_name === route_name)
  return route?.trip_ids.length
}

export const useInvalidTrips = () => {
  const { data } = useQuery(
    ['invalid-trips'],
    async (): Promise<InvalidTripsPayload> => {
      const response = await fetch(`/api/invalid-trips`)
      return response.json()
    },
  )
  return data
}
