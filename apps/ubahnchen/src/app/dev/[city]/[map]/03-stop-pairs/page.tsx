import { cities } from '@ubahnchen/cities'

import { getStopPositions } from '../../../../../components/client/place-stops/save-points-positions.action'
import { getUsedStops } from '../../../../_server/gtfs/get-used-stops'
import type { CityMapParam } from '../params'

import { StopPairsClient } from './stop-pairs.client'
import { StopPairsList } from './stop-pairs-list'

const StopPairsComponent = async (props: {
  params: CityMapParam
  searchParams: { 'route-name'?: string }
}) => {
  const { city, map } = props.params
  const routeName = props.searchParams['route-name']
  if (!map || !city) throw new Error('Need city and map!')
  const cityConfig = cities[city]
  const mapConfig = cityConfig.maps[map]
  const { stopPairs, stops } = await getUsedStops({
    city,
    onlyParents: true,
    mapConfig,
  })
  const stopPositions = await getStopPositions(city, map)
  return (
    <div>
      <main className="h-screen">
        <StopPairsList
          stopPairs={stopPairs}
          stops={stops}
          routeName={routeName}
        />
        <StopPairsClient
          stopPositions={stopPositions}
          stopPairs={stopPairs}
          lineColors={cityConfig.gtfs.lineColors}
          cityMap={props.params}
          routeName={routeName}
        />
      </main>
    </div>
  )
}

export default StopPairsComponent
