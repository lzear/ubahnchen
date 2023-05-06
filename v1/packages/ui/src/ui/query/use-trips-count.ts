import { type FetchQueryOptions, useQuery } from '@tanstack/react-query'
import { FindTripsCount } from '../../lib/keyframe'
import { queryClient } from '../../lib/client'
import { noRefetch } from './no-refetch'

type TripsCountKey = readonly ['trips-count']

const fetchTripsCount = async (): Promise<FindTripsCount[]> => {
  const response = await fetch(`/api/trips-count`)
  return response.json()
}

const queryOption = (): FetchQueryOptions<
  FindTripsCount[],
  unknown,
  FindTripsCount[],
  TripsCountKey
> => ({
  queryFn: fetchTripsCount,
  queryKey: ['trips-count'],
  ...noRefetch,
})

export const useTripsCount = () =>
  useQuery<FindTripsCount[], unknown, FindTripsCount[], TripsCountKey>(
    queryOption(),
  )

export const getTripsCount = () => queryClient.fetchQuery(queryOption())
