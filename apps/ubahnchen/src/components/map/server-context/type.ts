import type { ReactNode } from 'react'

import type { RoutesDao } from '@/pages/api/routes-dao'
import type { City, CityConfig, StopsPositions } from '@ubahnchen/cities'
import type { MapPaths } from '@ubahnchen/cities/node'

export type WP = {
  pathId: number
  lengths: [number, number]
}

export type StopPairSvg = {
  stopPairIdx: number
  waypoints: WP[]
  length: number
}

export type StopPair = {
  route_id: string
  idx: number
  stop_id_1: string
  stop_id_2: string
  count: number
  is_one_way: number
}

export type Stop = {
  stop_name: string
  stop_id: string
  stop_lat: number
  stop_lon: number
  parent_station: string | null
}

export interface ServerContextProps {
  city: City
  map: string
  stopPositions: StopsPositions
  stopPairSvgs: StopPairSvg[]
  mapPaths: MapPaths
  routeIds: string[]
  routes: RoutesDao[]
  stopPairs: StopPair[]
  stops: Stop[]
  // mapConfig: MapConfig
  // cityConfig: CityConfig
  gtfs: CityConfig['gtfs']
}

export type ServerContextProviderProps = {
  value: ServerContextProps
  children: ReactNode
}
