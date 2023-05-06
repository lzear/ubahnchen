import { type FetchQueryOptions, useQuery } from '@tanstack/react-query'
import { FindTripsCount } from '../../lib/keyframe'
import { queryClient } from '../../lib/client'
import { noRefetch } from './no-refetch'
type TripsDayKey = readonly ['trips-day', string]

const fetchTripsDay = async (gtfsDay: string): Promise<FindTripsCount[]> => {
  const response = await fetch(`/api/trips-day?day=${gtfsDay}`)
  return response.json()
}

const queryOption = (
  gtfsDay: string,
): FetchQueryOptions<
  FindTripsCount[],
  unknown,
  FindTripsCount[],
  TripsDayKey
> => ({
  queryFn: ({ queryKey }: { queryKey: TripsDayKey }) =>
    fetchTripsDay(queryKey[1]),
  queryKey: ['trips-day', gtfsDay],
  ...noRefetch,
})

export const useTripsDay = (gtfsDay: string) =>
  useQuery<FindTripsCount[], unknown, FindTripsCount[], TripsDayKey>(
    queryOption(gtfsDay),
  )

export const getTripsDay = (gtfsDay: string) =>
  queryClient.fetchQuery(queryOption(gtfsDay))
