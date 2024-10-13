'use client'

import { useTripsHour } from '@/services/trips/use-trips'

import { useOnFrame } from './use-on-frame'

export const Trips = () => {
  useOnFrame()
  useTripsHour()
  return (
    <div>
      trips
      <div>
        {/*{trips.isLoading && 'Loading...'}*/}
        {/*{trips.isError && 'Error'}*/}
        {/*{trips.isSuccess && 'Success'}*/}
        {/* eslint-disable-next-line @typescript-eslint/no-unsafe-member-access */}
      </div>
    </div>
  )
}
