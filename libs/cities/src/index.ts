import type { GtfsConfig, MapConfig } from './data/types'
import * as generated from './generated'

export type { GtfsConfig, LineColor, MapConfig } from './data/types'
export { logLineTag } from './log-line-tag'
export { getMap } from './map'
export type { StopsPositions } from './map-asset-type'
export type * as GTFS from './maps/types'
export * from './maps/types'

export type City = (typeof generated.citiesList)[number]
export const isCity = (city: unknown): city is City =>
  citiesList.includes(city as City)

export const citiesList = generated.citiesList

export type CityConfig = {
  name: string
  gtfs: GtfsConfig
  maps: Record<string, MapConfig>
}

export const cities: Record<City, CityConfig> = generated.cities
