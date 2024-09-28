import type { City, MapConfig } from './index'
import { cities } from '.'

export const getMap = (city: City, mapName: string): MapConfig => {
  const mapConfig = cities[city].maps[mapName]
  if (!mapConfig) throw new Error(`${city} doesn't have map ${mapName}`)
  return mapConfig
}
