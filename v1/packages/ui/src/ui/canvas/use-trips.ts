import { type FetchQueryOptions, useQuery } from '@tanstack/react-query'
import { TripsResponse } from '../../lib/lib/contracts/trips'
import { queryClient } from '../../lib/client'
import { noRefetch } from '../query/no-refetch'

type TripsKey = readonly ['trips', string]

const fetchTrips = async (iso: string): Promise<TripsResponse> => {
  const resp = await fetch(`/api/trips?date=${iso}`)
  return resp.json()
}

const queryOption = (
  iso: string,
): FetchQueryOptions<TripsResponse, unknown, TripsResponse, TripsKey> => ({
  queryFn: ({ queryKey }: { queryKey: TripsKey }) => fetchTrips(queryKey[1]),
  queryKey: ['trips', iso],
  ...noRefetch,
})

export const useTrips = (date: Date) => {
  const iso = date.toISOString().replace(/:.*/, ':00:00Z')
  useQuery<TripsResponse, unknown, TripsResponse, TripsKey>(queryOption(iso))
}

export const getTrips = (date: Date) => {
  const iso = date.toISOString().replace(/:.*/, ':00:00Z')
  return queryClient.fetchQuery(queryOption(iso))
}
