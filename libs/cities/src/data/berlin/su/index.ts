import type { MapConfig } from '../../types'

export const config = {
  name: 'Berlin U-Bahn und S-Bahn',
  file: 'U-Bahn_Berlin_-_Netzplan.svg',
  source:
    'https://de.m.wikipedia.org/wiki/Datei:S-_und_U-Bahn-Linien_Berlin.svg',
  routeTypes: [109, 400],
  here: import.meta.url,
  stopsFilter: (stop: { stop_lat: number; stop_lon: number }) =>
    stop.stop_lat > 52 && stop.stop_lon > 13,
} satisfies MapConfig
