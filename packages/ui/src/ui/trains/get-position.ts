import { MapName } from '../../lib/enums'
import { itineraries, SectionWithAbs } from '../../lib/intineraries'
import { stopIdByIndex } from './stop-idxs'

type Route = { sections: SectionWithAbs[] }

export const findRouteWithName = (
  route_name: string,
  stop_ids: string[],
  mapName: MapName,
) => {
  const route = itineraries[mapName].find((l) => {
    if (l.route_name !== route_name) return false
    const stops = l.sections.flatMap((s) => s.stops)
    return stop_ids.every((stop_id) => stops.some((s) => s.stop_id === stop_id))
  })
  if (!route) throw new Error(`Route not found: ${route_name} ${stop_ids}`)
  return route
}

export const getTrainPosition = ({
  stop_idx1,
  stop_idx2,
  ratio,
  route,
}: {
  stop_idx1: number
  stop_idx2: number
  ratio: number
  route: Route
}) => {
  const routeStops = route.sections.flatMap((s) => s.stops)

  const stop1 = routeStops.find((s) => s.stop_id === stopIdByIndex[stop_idx1])
  const stop2 = routeStops.find((s) => s.stop_id === stopIdByIndex[stop_idx2])

  if (!stop1 || !stop2) throw new Error('Stop not found')

  const absOffset = stop1.absOffset * (1 - ratio) + stop2.absOffset * ratio

  const section =
    route.sections.find(
      (s) => s.absStart <= absOffset && s.absEnd >= absOffset,
    ) || route.sections.at(-1)

  if (!section) {
    throw new Error('Section not found')
  }

  return {
    path: section.path,
    offset:
      section.start +
      (absOffset - section.absStart) * Math.sign(section.end - section.start),
  }
}
