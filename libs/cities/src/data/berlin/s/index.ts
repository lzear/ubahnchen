import type { MapConfig } from '../../types'

export const config = {
  name: 'Berlin S-Bahn',
  file: 'S-Bahn_Berlin_-_Netzplan.svg',
  source:
    'https://upload.wikimedia.org/wikipedia/commons/d/d7/S-Bahn_Berlin_-_Netzplan.svg',
  routeTypes: [109],
  here: import.meta.url,
  stopsFilter: (stop: { stop_lat: number; stop_lon: number }) =>
    stop.stop_lat > 52 && stop.stop_lon > 13,
} satisfies MapConfig
