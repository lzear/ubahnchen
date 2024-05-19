import { cache } from 'react'

import type { City } from '@ubahnchen/cities'
import type { UsedStopsResult } from '@ubahnchen/cities/node'
import { MapQueries } from '@ubahnchen/cities/node'

export const getUsedStops = cache(
  (city: City, map: string, onlyParents: boolean): UsedStopsResult =>
    new MapQueries(city).usedStops(map, onlyParents),
)
