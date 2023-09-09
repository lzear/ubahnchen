import type { City } from '@ubahnchen/cities'
import { cities } from '@ubahnchen/cities'

import { getStopPositions } from '../../../../../components/client/place-stops/save-points-positions.action'
import { getUsedStops } from '../../../../_server/gtfs/get-used-stops'

type Props = {
  city: City
  map: string
}

export const PlaceStopsInfo = async ({ city, map }: Props) => {
  const targets = await getStopPositions(city, map)
  const done = Object.keys(targets).length

  const cityConfig = cities[city]
  const mapConfig = cityConfig.maps[map]
  const { stops } = await getUsedStops({
    city,
    onlyParents: true,
    mapConfig,
  })
  const goal = stops.length
  return (
    <span className="pointer-events-none text-xs">
      {done === goal ? '✅' : '👷'} {done} / {goal}
    </span>
  )
}
