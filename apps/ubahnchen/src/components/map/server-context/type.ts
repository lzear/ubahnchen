import type { ReactNode } from 'react'

import type { RoutesDao } from '@/pages/api/routes-dao'
import type { City, CityConfig, StopsPositions } from '@ubahnchen/cities'
import type { MapPaths } from '@ubahnchen/cities/node'
import type { DrizzleTypes, StopPairsSvgPaths } from '@ubahnchen/database'

export interface ServerContextProps {
  city: City
  map: string
  stopPositions: StopsPositions
  stopPairSvgs: StopPairsSvgPaths[]
  mapPaths: MapPaths
  routeIds: string[]
  routes: RoutesDao[]
  stopPairs: DrizzleTypes['stopPairs'][]
  stops: DrizzleTypes['stops'][]
  // mapConfig: MapConfig
  // cityConfig: CityConfig
  gtfs: CityConfig['gtfs']
}

export type ServerContextProviderProps = {
  value: ServerContextProps
  children: ReactNode
}
