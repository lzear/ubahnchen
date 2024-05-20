'use client'

import { useParams } from 'next/navigation'

import {
  useRoutes,
  useStopPairs,
} from '@/services/trains/stop-pairs/stop-pairs'
import { useTripsHour } from '@/services/trips/use-trips'
import type { City } from '@ubahnchen/cities'

import { useOnFrame } from './use-on-frame'

export const Trips = () => {
  const params = useParams<{ city: City; map: string }>()
  if (!params) throw new Error('params not found')

  const { city, map } = params
  const trains = useTripsHour(city, map)

  const pairs = useStopPairs(city, map)

  const routes = useRoutes(city, map)
  useOnFrame(pairs?.data, routes?.data)
  return (
    <div>
      trips
      <div>
        {/*{trips.isLoading && 'Loading...'}*/}
        {/*{trips.isError && 'Error'}*/}
        {/*{trips.isSuccess && 'Success'}*/}
        {/* eslint-disable-next-line @typescript-eslint/no-unsafe-member-access */}
        {trains?.size}
      </div>
    </div>
  )
}
