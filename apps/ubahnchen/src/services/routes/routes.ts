import type { City } from '@ubahnchen/cities'
import { getMap } from '@ubahnchen/cities'

export const getRouteTypes = (city: City, map: string) => {
  const mapConfig = getMap(city, map)
  return mapConfig.routeTypes
}
