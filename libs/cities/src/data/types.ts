export type MapConfig = {
  name: string
  file: string
  source: string
  here: string
  routeTypes: number[]
  stopsFilter?: (stop: { stop_lat: number; stop_lon: number }) => boolean
}

export type GtfsConfig = {
  url: string
  lineColors: Record<string, string>
}
