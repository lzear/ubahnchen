import type { MapConfig } from '../../types'

export const config = {
  name: 'Berlin S-Bahn',
  file: 'S-Bahn_Berlin_-_Netzplan.svg',
  source:
    'https://upload.wikimedia.org/wikipedia/commons/d/d7/S-Bahn_Berlin_-_Netzplan.svg',
  routeTypes: [109],
  here: import.meta.url,
} satisfies MapConfig
