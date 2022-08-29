import { useQuery, type UseQueryOptions } from '@tanstack/react-query'
import { Trip } from 'hafas-client'
import { noRefetch } from './no-refetch'

type HafasTripKey = readonly ['hafas-trip', string, string]

const fetchHafasTrip = async (
  jid: string,
  routeName: string,
): Promise<Trip> => {
  const resp = await fetch(`/api/hafas-trip?jid=${jid}&route_name=${routeName}`)
  return await resp.json()
}

const queryOption = (
  jid: string,
  routeName: string,
): UseQueryOptions<Trip, unknown, Trip, HafasTripKey> => ({
  queryFn: ({ queryKey: [, jid, routeName] }) => fetchHafasTrip(jid, routeName),
  queryKey: ['hafas-trip', jid, routeName],
  enabled: !!jid,
  ...noRefetch,
})

export const useHafasTrip = (routeName: string, jid?: string) =>
  useQuery<Trip, unknown, Trip, HafasTripKey>(queryOption(jid || '', routeName))
