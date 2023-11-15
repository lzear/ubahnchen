import type { MapConfig } from '../../types'

export const config = {
  name: 'Berlin U-Bahn',
  file: 'U-Bahn_Berlin_-_Netzplan.svg',
  source:
    'https://de.wikipedia.org/wiki/U-Bahn_Berlin#/media/Datei:U-Bahn_Berlin_-_Netzplan.svg',
  routeTypes: [400],
  here: import.meta.url,
} satisfies MapConfig
