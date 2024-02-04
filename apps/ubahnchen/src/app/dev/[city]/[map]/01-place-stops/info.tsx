import type { City } from '@ubahnchen/cities'

import { getStopPositions } from '../../../../../components/client/place-stops/save-points-positions.action'
import { getUsedStops } from '../../../../_server/gtfs/queries'

type Props = {
  city: City
  map: string
}

export const PlaceStopsInfo = async ({ city, map }: Props) => {
  const targets = await getStopPositions(city, map)
  const done = Object.keys(targets).length

  const { stops } = await getUsedStops(city, map, true)
  const goal = stops.length
  return (
    <span className="pointer-events-none text-xs">
      {done === goal ? '✅' : '👷'} {done} / {goal}
    </span>
  )
}
