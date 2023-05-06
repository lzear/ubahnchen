import type { FetchQueryOptions } from '@tanstack/react-query'
import { addHours } from 'date-fns'
import { truthy } from '../../lib/non-nullish'
import { TripNFrames } from '../../lib/keyframe'
import { trainTimeBuffer2 } from '../trains/train-time-buffer'
import routeNameById from '../../../src/generated/routes.json'
import { MapName } from '../../lib/enums'
import { useStore } from '../store/store'
import { queryClient } from '../../lib/client'
import { noRefetch } from './no-refetch'

type TripsHourKey = readonly ['trips', string, boolean, MapName]

const fetchTripsHour = async (
  isoDate: string,
  skipPrevious: boolean,
  mapName: MapName,
): Promise<TripNFrames[]> => {
  const skipPreviousParameter = skipPrevious ? '&skipPrevious=true' : ''
  const resp = await fetch(
    `/api/trips-hour?map=${mapName}&date=${isoDate}${skipPreviousParameter}`,
  )
  return await resp.json()
}

const queryOption = (
  isoDate: string,
  skipPrevious: boolean,
  mapName: MapName,
): FetchQueryOptions<TripNFrames[], unknown, TripNFrames[], TripsHourKey> => ({
  queryFn: ({ queryKey: [, isoDate, skipPrevious] }) =>
    fetchTripsHour(isoDate, skipPrevious, mapName),
  queryKey: ['trips', isoDate, skipPrevious, mapName],
  ...noRefetch,
})

const checkCache = (
  isoDate: string,
  skipPrevious: boolean,
  mapName: MapName,
) => {
  const options = queryOption(isoDate, skipPrevious, mapName)
  const queryCache = queryClient.getQueryCache()
  const queryKey = options.queryKey
  if (!queryKey) throw new Error('queryKey')
  const cacheHit = queryCache.find<TripNFrames[], unknown, TripNFrames[]>(
    // eslint-disable-next-line unicorn/no-array-callback-reference
    queryKey,
  )
  return cacheHit?.state.data
}

export const getTripsHourAndNextMaybePromises = (
  date: Date,
  mapName: MapName,
): (TripNFrames[] | Promise<TripNFrames[]>)[] => {
  const isoDatePre = addHours(date, -1).toISOString().replace(/:.*/, ':00:00Z')
  const isoDateNow = date.toISOString().replace(/:.*/, ':00:00Z')
  const isoDatePost = addHours(date, 1).toISOString().replace(/:.*/, ':00:00Z')

  const tripsPreCache =
    checkCache(isoDatePre, false, mapName) ||
    checkCache(isoDatePre, true, mapName)
  const tripsNowCache =
    checkCache(isoDateNow, false, mapName) ||
    (tripsPreCache && checkCache(isoDateNow, true, mapName))
  const tripNextCache =
    checkCache(isoDatePost, false, mapName) ||
    checkCache(isoDatePost, true, mapName)

  const tripsNow =
    tripsNowCache ||
    queryClient.fetchQuery(queryOption(isoDateNow, !!tripsPreCache, mapName))

  const tripsNext =
    tripNextCache ||
    queryClient.fetchQuery(queryOption(isoDatePost, true, mapName))

  // eslint-disable-next-line unicorn/no-array-callback-reference
  return [tripsPreCache, tripsNow, tripsNext].filter(truthy)
}

class TripsFetcher {
  private seri: string | undefined = undefined

  private trips: TripNFrames[] = []

  sortTrips = (trips: TripNFrames[]) =>
    trips.sort((a, b) => a.start_time - b.start_time)

  async runPromise({
    promises,
    alreadyFetchedTrips,
    dateString,
    isBuffered,
    mapName,
  }: {
    promises: Promise<TripNFrames[]>[]
    alreadyFetchedTrips: TripNFrames[]
    dateString: string
    isBuffered: boolean
    mapName: MapName
  }): Promise<void> {
    const newTrips = await Promise.all(promises)
    const seri = TripsFetcher.serializeParams({
      dateString,
      isBuffered,
      mapName,
    })
    if (this.seri === seri) {
      this.transformTrips(
        [...alreadyFetchedTrips, ...newTrips.flat()],
        isBuffered,
        mapName,
      )
      const { setIsLoadingTrains } = useStore.getState()
      setIsLoadingTrains(false)
    }
  }

  fetchActual(
    date: Date,
    dateString: string,
    isBuffered: boolean,
    mapName: MapName,
  ) {
    const maybePromises = getTripsHourAndNextMaybePromises(date, mapName)
    const promises: Promise<TripNFrames[]>[] = []
    const noprom: TripNFrames[] = []

    for (const v of maybePromises)
      if ('then' in v) promises.push(v)
      else noprom.push(...v)

    this.transformTrips(noprom, isBuffered, mapName)

    const { setIsLoadingTrains } = useStore.getState()
    if (promises.length > 0) {
      setIsLoadingTrains(true)
      void this.runPromise({
        promises,
        alreadyFetchedTrips: noprom,
        dateString,
        isBuffered,
        mapName,
      })
    } else setIsLoadingTrains(false)

    return this.trips
  }

  private transformTrips(
    trips: TripNFrames[],
    isBuffered: boolean,
    mapName: MapName,
  ) {
    const filteredTrips =
      mapName === MapName.U
        ? trips.filter((trip) =>
            (routeNameById as Record<string, string>)[
              trip.route_id
            ]?.startsWith('U'),
          )
        : trips

    const sortedTrips = this.sortTrips(filteredTrips)

    this.trips = isBuffered
      ? sortedTrips.map((element) => trainTimeBuffer2(element))
      : sortedTrips
  }

  private static serializeParams({
    dateString,
    isBuffered,
    mapName,
  }: {
    dateString: string
    isBuffered: boolean
    mapName: MapName
  }) {
    return JSON.stringify({ dateString, isBuffered, mapName })
  }

  fetch(date: Date, isBuffered: boolean, mapName: MapName) {
    const dateString = date.toISOString().replace(/:.*/, ':00:00Z')
    const seri = TripsFetcher.serializeParams({
      dateString,
      isBuffered,
      mapName,
    })
    if (this.seri === seri) return this.trips

    this.seri = seri
    return this.fetchActual(date, dateString, isBuffered, mapName)
  }
}

export const fetchTripsHourAndNext = new TripsFetcher()
