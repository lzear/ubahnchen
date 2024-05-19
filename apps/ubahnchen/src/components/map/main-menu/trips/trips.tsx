'use client'

import { useParams, usePathname } from 'next/navigation'

import { useTrips, useTripsHour } from '@/services/trips/use-trips'
import { useUbahnStore } from '@/store'
import type { City } from '@ubahnchen/cities'

export const Trips = () => {
  // const city = useUbahnStore((state) => state.)

  // console.log(
  //   `%cantoinelog%ctrips`,
  //   `color:#fff;background:pink;`,
  //   `color:#000;background:#f779aa;border-radius:5px;font-weight:bold;padding:3px;margin-left:-2px;`,
  //   trips,
  // )

  const p = usePathname()
  console.log(`antoinelog p`, p)
  const params = useParams<{ city: City; map: string }>()
  if (!params) throw new Error('params not found')

  const { city, map } = params
  const trips = useTripsHour(city, map)

  return (
    <div>
      trips
      <div>
        {/*{trips.isLoading && 'Loading...'}*/}
        {/*{trips.isError && 'Error'}*/}
        {/*{trips.isSuccess && 'Success'}*/}
        {/* eslint-disable-next-line @typescript-eslint/no-unsafe-member-access */}
        {trips?.size}
      </div>
    </div>
  )
}
