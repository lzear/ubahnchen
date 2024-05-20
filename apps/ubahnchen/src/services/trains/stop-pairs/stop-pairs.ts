import { useQuery } from '@tanstack/react-query'

import type { Pair } from '@/pages/api/pairs'
import type { RoutesDao } from '@/pages/api/routes-dao'
import type { City } from '@ubahnchen/cities'

export const useStopPairs = (city: City, map: string) => {
  return useQuery({
    queryKey: ['stop-pairs', city, map],
    queryFn: async () => {
      const response = await fetch(`/api/stop-pairs?city=${city}&map=${map}`)
      return (await response.json()) as Promise<Pair[]>
    },
  })
}

export const useRoutes = (city: City, map: string) => {
  return useQuery({
    queryKey: ['routes', city, map],
    queryFn: async () => {
      const response = await fetch(`/api/routes?city=${city}&map=${map}`)
      return (await response.json()) as Promise<RoutesDao[]>
    },
  })
}
