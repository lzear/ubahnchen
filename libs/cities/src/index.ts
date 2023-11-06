import type { GtfsConfig, MapConfig } from './data/types.js'
import * as generated from './generated/index.js'

export type City = (typeof generated.citiesList)[number]

export const isCity = (city: string): city is City =>
  citiesList.includes(city as City)

export const citiesList = generated.citiesList

export type CityConfig = {
  name: string
  gtfs: GtfsConfig
  maps: Record<string, MapConfig>
}

export const cities: Record<City, CityConfig> = generated.cities

export { type GtfsConfig, type MapConfig } from './data/types.js'
