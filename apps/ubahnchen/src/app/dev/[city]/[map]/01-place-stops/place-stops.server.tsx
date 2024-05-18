import React from 'react'
import _ from 'lodash'

import { getUsedStops } from '@/app/_server/gtfs/queries'
import { getStopPositions } from '@/components/dev/client/place-stops/save-points-positions.action'
import type { City } from '@ubahnchen/cities'

import 'server-only'

import { PlaceStopsInfo } from './info'
import { PlaceStopsClient } from './place-stops.client'

type Props = { city: City; map: string }

export const PlaceStopsServer = async ({ city, map }: Props) => {
  const { stops, stopPairs } = getUsedStops(city, map, true)

  const stopById = _.keyBy(stops, 'stop_id')
  const targets = await getStopPositions(city, map)
  return (
    <>
      <PlaceStopsClient
        map={map}
        city={city}
        stopById={stopById}
        stopPairs={stopPairs}
        targets={targets}
      />
      <PlaceStopsInfo city={city} map={map} />
    </>
  )
}
