export type MapConfig = {
  name: string
  file: string
  source: string
  here: string
  routeTypes: number[]
}

export type GtfsConfig = {
  url: string
}

export type CityConfig = {
  gtfs: GtfsConfig
  maps: Record<string, MapConfig>
}
