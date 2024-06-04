import type { License, MapConfig } from '../../types'

const license: License = {
  name: 'CC BY-SA 4.0',
  author: {
    name: 'S. Gollin',
  },
  source: 'https://de.wikipedia.org/wiki/Datei:S-_und_U-Bahn-Linien_Berlin.svg',
}

export const config = {
  name: 'Berlin U-Bahn und S-Bahn',
  file: 'U-Bahn_Berlin_-_Netzplan.svg',
  source: 'https://de.wikipedia.org/wiki/Datei:S-_und_U-Bahn-Linien_Berlin.svg',
  routeTypes: [109, 400],
  here: import.meta.url,
  stopsFilter: (stop: { stop_lat: number; stop_lon: number }) =>
    stop.stop_lat > 52 && stop.stop_lon > 13,
  license,
} satisfies MapConfig
