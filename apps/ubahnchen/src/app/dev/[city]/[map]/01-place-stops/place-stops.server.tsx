import React from 'react'
import _ from 'lodash'

import type { City } from '@ubahnchen/cities'
import { cities } from '@ubahnchen/cities'

import 'server-only'

import { getStopPositions } from '../../../../../components/client/place-stops/save-points-positions.action'
import { getUsedStops } from '../../../../_server/gtfs/get-used-stops'

import { PlaceStopsInfo } from './info'
import { PlaceStopsClient } from './place-stops.client'

type Props = { city: City; map: string }

export const PlaceStopsServer = async ({ city, map }: Props) => {
  const cityConfig = cities[city]
  const mapConfig = cityConfig.maps[map]
  const { stops, stopPairs } = await getUsedStops({
    city,
    onlyParents: true,
    mapConfig,
  })

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
