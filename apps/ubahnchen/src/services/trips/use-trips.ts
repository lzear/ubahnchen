import { useEffect } from 'react'
import { useQuery } from '@tanstack/react-query'
import { useShallow } from 'zustand/react/shallow'

import { getRouteTypes } from '@/services/routes/routes'
import { getVirtualTimeObject } from '@/services/time/virtual-time'
import { tripsFetcher } from '@/services/trips/trips'
import { useUbahnStore } from '@/store'
import type { City } from '@ubahnchen/cities'

export const useTrips = (city: City, map: string) => {
  const { speed, virtualTimeZero, setAt, paused } = useUbahnStore(
    useShallow((state) => ({
      speed: state.speed,
      virtualTimeZero: state.virtualTimeZero,
      setAt: state.setAt,
      paused: state.paused,
    })),
  )

  const { virtualDate } = getVirtualTimeObject({
    virtualTimeZero,
    setAt,
    speed,
    paused,
  })
  const date = virtualDate.toISOString().replace(/:.*/, ':00:00Z')

  const urlParamStr = new URLSearchParams({ city, map, date }).toString()
  return useQuery({
    queryKey: ['trips-hour', urlParamStr],
    queryFn: async () => {
      const response = await fetch(`/api/trips-hour?${urlParamStr}`)
      return response.json()
    },
  })
}

export const useTripsHour = (city: City, map: string) => {
  const routeTypes = getRouteTypes(city, map)
  const routeTypesStr = routeTypes.join(',')
  const unpause = useUbahnStore((s) => s.unpause)
  useEffect(() => {
    void tripsFetcher
      .fetch({
        date: new Date(),
        city,
        routeTypes: routeTypesStr.split(',').map(Number),
      })
      .then((t) => {
        return unpause()
      })
  }, [city, routeTypes, routeTypesStr, unpause])
  return tripsFetcher.getTrips()
}
