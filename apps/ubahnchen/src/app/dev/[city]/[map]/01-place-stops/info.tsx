import { getUsedStops } from '@/app/_server/gtfs/queries'
import { getStopPositions } from '@/components/dev/client/place-stops/save-points-positions.action'
import type { City } from '@ubahnchen/cities'

type Props = {
  city: City
  map: string
}

export const PlaceStopsInfo = async ({ city, map }: Props) => {
  const targets = await getStopPositions(city, map)
  const done = Object.keys(targets).length

  const { stops } = getUsedStops(city, map, true)
  const goal = stops.length
  return (
    <span className="pointer-events-none text-xs">
      {done === goal ? '✅' : '👷'} {done} / {goal}
    </span>
  )
}
