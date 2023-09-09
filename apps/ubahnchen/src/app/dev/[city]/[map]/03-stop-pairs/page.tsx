import { cities } from '@ubahnchen/cities'

import { getStopPositions } from '../../../../../components/client/place-stops/save-points-positions.action'
import { getUsedStops } from '../../../../_server/gtfs/get-used-stops'
import { UrlParameterValue } from '../../../../[city]/search-parameters'
import type { CityMapParam } from '../params'

import { StopPairsClient } from './stop-pairs.client'

const StopPairsComponent = async (props: { params: CityMapParam }) => {
  const { city, map } = props.params
  if (!map || !city) throw new Error('Need city and map!')
  const cityConfig = cities[city]
  const mapConfig = cityConfig.maps[map]
  const { stops, stopPairs } = await getUsedStops({
    city,
    onlyParents: true,
    mapConfig,
  })
  const stopPositions = await getStopPositions(city, map)
  return (
    <div>
      <main className="h-screen">
        <StopPairsClient
          stopPositions={stopPositions}
          stopPairs={stopPairs}
          lineColors={cityConfig.gtfs.lineColors}
          cityMap={props.params}
        />
      </main>
    </div>
  )
}

export default StopPairsComponent
