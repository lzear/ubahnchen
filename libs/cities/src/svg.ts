import path from 'node:path'
import { fileURLToPath } from 'node:url'

import type { MapConfig } from './data/types'

export const getSvg = (mapConfig: MapConfig): string => {
  const here: string = mapConfig.here
  if (here) {
    return path.join(path.dirname(fileURLToPath(here)), 'map.svg')
  }
  throw new Error(`No SVG found for ${mapConfig.name})`)
}
