import { useEffect } from 'react'
import { useQuery } from '@tanstack/react-query'
import { useShallow } from 'zustand/react/shallow'

import { useUbahnStore } from '@/store'
import type { City } from '@ubahnchen/cities'

import { getRouteTypes } from '../routes/routes'
import { computeVirtualTime, getVirtualTime } from '../time/virtual-time'

import { tripsFetcher } from './trips'

export const useTrips = (city: City, map: string) => {
  const { speed, virtualTimeZero, setAt, paused } = useUbahnStore(
    useShallow((state) => ({
      speed: state.speed,
      virtualTimeZero: state.virtualTimeZero,
      setAt: state.setAt,
      paused: state.paused,
    })),
  )

  const virtualDate = computeVirtualTime({
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
      .then(() => {
        return useUbahnStore.setState({
          loading: false,
          paused: false,
        })
      })

    const int = setInterval(() => {
      const date = getVirtualTime()
      void tripsFetcher.fetch({
        date,
        city,
        routeTypes: routeTypesStr.split(',').map(Number),
      })
    }, 1000)

    return () => {
      clearInterval(int)
    }
  }, [city, routeTypes, routeTypesStr, unpause])
  return tripsFetcher.getTrains()
}
