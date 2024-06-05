export type License = {
  name: string
  author?: {
    name: string
    url?: string
  }
  source?: string
}

export type MapConfig = {
  name: string
  file: string
  source: string
  here: string
  routeTypes: number[]
  stopsFilter?: (stop: { stop_lat: number; stop_lon: number }) => boolean
  license?: License
}

export type LineColor = {
  bg: string
  text: string
}

export type GtfsConfig = {
  url: string
  lineColors: Record<string, LineColor>
  colors: string[]
  color: string
  font: { className: string }
}
