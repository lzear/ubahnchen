import type { License, MapConfig } from '../../types'

const license: License = {
  name: 'CC BY-SA 4.0',
  author: {
    name: 'Arbalete',
    url: 'https://commons.wikimedia.org/wiki/User:Arbalete',
  },
  source:
    'https://commons.wikimedia.org/wiki/File:S-Bahn_Berlin_-_Netzplan.svg',
}

export const config = {
  name: 'Berlin S-Bahn',
  file: 'S-Bahn_Berlin_-_Netzplan.svg',
  source:
    'https://upload.wikimedia.org/wikipedia/commons/d/d7/S-Bahn_Berlin_-_Netzplan.svg',
  routeTypes: [109],
  here: import.meta.url,
  stopsFilter: (stop: { stop_lat: number; stop_lon: number }) =>
    stop.stop_lat > 52 && stop.stop_lon > 13,
  license,
} satisfies MapConfig
