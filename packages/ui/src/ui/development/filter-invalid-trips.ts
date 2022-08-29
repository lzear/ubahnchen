import alternativeStops from '../../lib/lib/data/02-stops-for-route-names-alternatives.json'

export const getInvalidTripsForStops = (
  route_name: string,
  stop_ids: string[],
) =>
  alternativeStops.filter((a) => {
    if (a.route_name !== route_name) return false

    const aStops = new Set(a.stops.map((s) => s.stop_id))

    return stop_ids.every((s) => aStops.has(s))
  })
