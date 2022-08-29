import routesStops from '../../lib/lib/data/01-stops-for-route-names.json'
import { getDatabase } from '../utils/get-database'

export const invalidTripIdsForRoute = async (route: {
  route_id: string
  route_name: string
}) => {
  const database = await getDatabase()

  const validStops = routesStops.find(
    (r) => r.route_name === route.route_name,
  )?.stops

  if (!validStops) throw new Error(`Missing route ${route.route_name}`)

  const stopIdsCondition = `stops.stop_id NOT IN(
    ${validStops.map((s) => `'${s.stop_id}'`).join(',')}
  )`

  const findOneIllegalTrip = `
  SELECT DISTINCT trips.trip_id
    FROM trips
    JOIN            stop_times
      ON              trips.trip_id = stop_times.trip_id
    JOIN            stops
      ON              stops.stop_idx = stop_times.stop_idx
  WHERE trips.route_id = @route_id
    AND (${stopIdsCondition})
  `

  const illegalOneStmt = database.prepare<{ route_id: string }>(
    findOneIllegalTrip,
  )
  const rows: { trip_id: number }[] = illegalOneStmt.all({
    route_id: route.route_id,
  })

  return rows.map((r) => r.trip_id)
}
