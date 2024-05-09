import type { License, MapConfig } from '../../types'

const license: License = {
  name: 'CC BY-SA 4.0',
  author: {
    name: 'Arbalete',
    url: 'https://commons.wikimedia.org/wiki/User:Arbalete',
  },
  source:
    'https://commons.wikimedia.org/wiki/File:U-Bahn_Berlin_-_Netzplan.svg',
}

export const config = {
  name: 'Berlin U-Bahn',
  file: 'U-Bahn_Berlin_-_Netzplan.svg',
  source:
    'https://de.wikipedia.org/wiki/U-Bahn_Berlin#/media/Datei:U-Bahn_Berlin_-_Netzplan.svg',
  routeTypes: [400],
  here: import.meta.url,
  license,
} satisfies MapConfig
