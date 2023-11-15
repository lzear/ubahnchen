import _ from 'lodash'

import type { City } from '@ubahnchen/cities'
import { cities } from '@ubahnchen/cities'

import { SelectUrlParam } from '../../../app/_components/url-params/select'
import { getUsedStops } from '../../../app/_server/gtfs/get-used-stops'
import type { StopPair } from '../../../app/_server/gtfs/types'
import { getStopPositions } from '../place-stops/save-points-positions.action'

import { PlacePathsClient } from './place-paths.client'

type Props = { city: City; map: string; routeName?: string }

const getPairKey = (sp: StopPair) =>
  [
    sp.routes.route_name,
    ...[sp.stop_pairs.stop_id_1, sp.stop_pairs.stop_id_2].sort((a, b) =>
      a.localeCompare(b),
    ),
  ].join('-')

export const PlacePathsServer = async ({ city, map, routeName }: Props) => {
  const cityConfig = cities[city]
  const mapConfig = cityConfig.maps[map]

  const { stopPairs } = await getUsedStops({
    city,
    onlyParents: true,
    mapConfig,
  })
  const routeNames = _.uniq(
    stopPairs.map((pair) => pair.routes.route_name),
  ).sort((a, b) => a.localeCompare(b))
  const targets = await getStopPositions(city, map)
  return (
    <>
      <div className="absolute left-0 top-0 z-30 flex flex-col gap-1 p-1">
        <SelectUrlParam
          label="Route"
          name="route-name"
          options={routeNames.map((value) => ({ value, label: value }))}
        />
        <p>Pairs: {_.uniqBy(stopPairs, getPairKey).length}</p>
      </div>

      <PlacePathsClient
        city={city}
        map={map}
        routeName={routeName}
        targets={targets}
        stopPairs={stopPairs}
      />
    </>
  )
}
