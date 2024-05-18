import type { FetchQueryOptions } from '@tanstack/react-query'

import type { TripByHour } from '@/pages/api/_keyframes'
import { KeyEncoder } from '@/services/react-query/key-encode'
import { noRefetch } from '@/services/react-query/no-refetch'
import { queryClient } from '@/services/react-query/query-client'
import { TimeGranola } from '@/services/time/time-granola'
import type { City } from '@ubahnchen/cities'
import { truthy } from '@ubahnchen/utils'

type TripsHourKey = readonly ['trips', string, boolean, City, string]

interface ParamsOuter {
  date: Date
  city: City
  routeTypes: number[]
}

interface ParamsInner {
  date: TimeGranola
  city: City
  routeTypes: number[]
}

interface ParamsRQuery extends ParamsInner {
  skipPrevious: boolean
}

const keyEncode = new KeyEncoder<TripsHourKey, ParamsRQuery>(
  (params) => [
    'trips',
    params.date.dateStr,
    params.skipPrevious,
    params.city,
    params.routeTypes.sort().join(','),
  ],
  ([, dateStr, skipPrevious, city, routeTypesStr]) => ({
    date: new TimeGranola(dateStr),
    skipPrevious,
    city,
    routeTypes: routeTypesStr.split(',').map(Number),
  }),
)

const fetchTripsHour = async ({
  date,
  skipPrevious,
  city,
  routeTypes,
}: ParamsRQuery): Promise<TripByHour[]> => {
  const params = new URLSearchParams({
    date: date.dateStr,
    city,
    routeTypes: routeTypes.sort().join(','),
    skipPrevious: skipPrevious ? 'true' : 'false',
  })
  const resp = await fetch(`/api/trips-hour?${params.toString()}`)
  return (await resp.json()) as TripByHour[]
}

const queryOption = (
  params: ParamsRQuery,
): FetchQueryOptions<TripByHour[], unknown, TripByHour[], TripsHourKey> => ({
  queryFn: ({ queryKey }) => fetchTripsHour(keyEncode.decode(queryKey)),
  queryKey: keyEncode.encode(params),
  ...noRefetch,
})

const checkCache = (params: ParamsRQuery) => {
  const options = queryOption(params)
  const queryCache = queryClient.getQueryCache()
  const queryKey = options.queryKey
  if (!queryKey) throw new Error('queryKey')
  const cacheHit = queryCache.find<TripByHour[], unknown, TripByHour[]>({
    queryKey,
  })
  return cacheHit?.state.data
}

export const getTripsHourAndNextMaybePromises = (
  params: ParamsInner,
): (TripByHour[] | Promise<TripByHour[]>)[] => {
  const { date } = params
  const datePrev = date.previous()
  const dateNext = date.next()

  const tripsPreCache =
    checkCache({ ...params, date: datePrev, skipPrevious: false }) ??
    checkCache({ ...params, date: datePrev, skipPrevious: true })

  const tripsNowCache =
    checkCache({ ...params, skipPrevious: false }) ||
    (tripsPreCache && checkCache({ ...params, skipPrevious: true }))

  const tripsNextCache =
    checkCache({ ...params, date: dateNext, skipPrevious: false }) ??
    checkCache({ ...params, date: dateNext, skipPrevious: true })

  const tripsNow =
    tripsNowCache ??
    queryClient.fetchQuery(
      queryOption({
        ...params,
        skipPrevious: !!tripsPreCache,
      }),
    )

  const tripsNext =
    tripsNextCache ??
    queryClient.fetchQuery(
      queryOption({
        ...params,
        date: dateNext,
        skipPrevious: true,
      }),
    )

  // eslint-disable-next-line unicorn/no-array-callback-reference
  return [tripsPreCache, tripsNow, tripsNext].filter(truthy)
}

const tripKey = (trip: TripByHour) => {
  return `${trip.day}|${trip.trip_id}`
}

class TripsFetcher {
  private date: Date | undefined = undefined

  private trips = new Map<string, TripByHour>()

  private isExpired(trip: TripByHour) {
    if (!this.date) return false
    const endDate = new Date(trip.end_time * 1000)
    return endDate < this.date
  }

  private addTrips(trips: TripByHour[]) {
    for (const trip of trips)
      if (this.trips.has(tripKey(trip))) continue
      else if (this.isExpired(trip)) continue
      else this.trips.set(tripKey(trip), trip)

    if (this.date)
      for (const [tripKey, trip] of this.trips)
        if (this.isExpired(trip)) this.trips.delete(tripKey)
  }

  async fetch(paramsOuter: ParamsOuter) {
    this.date = paramsOuter.date
    const paramsInner = {
      ...paramsOuter,
      date: new TimeGranola(paramsOuter.date),
    }
    const maybePromises = getTripsHourAndNextMaybePromises(paramsInner)
    const awaitedTrips = await Promise.all(maybePromises)
    this.addTrips(awaitedTrips.flat())
    return this.trips
  }

  public getTrips() {
    return this.trips
  }
}

export const tripsFetcher = new TripsFetcher()
