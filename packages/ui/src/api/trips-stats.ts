import _ from 'lodash'

const BUCKET_SIZE = 30

const makeRange = (start: number, end: number) =>
  _.range(start, end, BUCKET_SIZE)

const makeMinutes = () => {
  const initMinutes: Record<number, number> = {}
  for (const minute of makeRange(0, 24 * 60)) initMinutes[minute] = 0
  return initMinutes
}

export const tripsStats = (
  trips: {
    start_time: number
    end_time: number
    routes: { route_name: string }
    stop_times: { stops: { stop_id: string } }[]
  }[],
) => {
  const stats: Record<
    string,
    {
      count: number
      minutes: Record<number, number>
      stops: Record<string, number>
    }
  > = {}
  for (const trip of trips) {
    const routeStats = stats[trip.routes.route_name] || {
      count: 0,
      minutes: makeMinutes(),
      stops: {},
    }

    const range = makeRange(
      Math.floor(trip.start_time / 60 / BUCKET_SIZE) * BUCKET_SIZE,
      Math.floor(trip.end_time / 60 / BUCKET_SIZE) * BUCKET_SIZE,
    )

    routeStats.count += 1

    for (const r of range) routeStats.minutes[r % (24 * 60)] += 1
    for (const s of trip.stop_times)
      routeStats.stops[s.stops.stop_id] =
        (routeStats.stops[s.stops.stop_id] || 0) + 1

    stats[trip.routes.route_name] = routeStats
  }
  return stats
}
