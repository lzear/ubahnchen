import { cache } from 'react'

import type { City, GTFS } from '@ubahnchen/cities'
import type { UsedStopsResult } from '@ubahnchen/cities/node'
import { MapQueries } from '@ubahnchen/cities/node'

export const getRoutes = cache((city: City) => new MapQueries(city).routes())

export const getStopPairs = cache((city: City, route_types: number[]) =>
  new MapQueries(city).stopPairs(route_types),
)

export const getStops = cache((city: City, onlyParents: boolean): GTFS.Stop[] =>
  new MapQueries(city).stops({ onlyParents }),
)

export const getUsedStops = cache(
  (city: City, map: string, onlyParents: boolean): UsedStopsResult =>
    new MapQueries(city).usedStops(map, onlyParents),
)
