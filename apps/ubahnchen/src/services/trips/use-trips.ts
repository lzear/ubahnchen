import { useEffect } from 'react'
import { useQuery } from '@tanstack/react-query'
import { useShallow } from 'zustand/react/shallow'

import { useMapContext } from '@/components/map/server-context/client'
import { useUbahnStore } from '@/store'
import type { City } from '@ubahnchen/cities'
import type { DrizzleTypes } from '@ubahnchen/database'

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
      return response.json() as Promise<unknown>
    },
  })
}

export const useTripsHour = () => {
  const { city, map, routes } = useMapContext()
  const routeTypesStr = getRouteTypes(city, map).join(',')
  const unpause = useUbahnStore((s) => s.unpause)
  useEffect(() => {
    const routeTypes = routeTypesStr.split(',').map(Number)
    const routeMap = new Map<string, DrizzleTypes['routes']>()
    for (const route of routes) routeMap.set(route.route_id, route)
    const f = () =>
      tripsFetcher.fetch({ date: getVirtualTime(), city, routeTypes }, routeMap)
    void f().then(() =>
      useUbahnStore.setState({ loading: false, paused: false }),
    )
    const int = setInterval(() => void f(), 1000)
    return () => clearInterval(int)
  }, [city, routeTypesStr, routes, unpause])
}
