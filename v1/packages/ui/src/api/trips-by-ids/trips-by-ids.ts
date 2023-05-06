import { addHours, getDay } from 'date-fns'
import { toDate } from 'date-fns-tz'
import _ from 'lodash'
import { weekDays } from '../../lib/lib/utils'
import { getDatabase } from '../utils/get-database'

type Row = {
  trip_id: number
  arrival_time: number
  departure_time: number
  stop_idx: number
  stop_sequence: number
  route_id: string
  service_id: number
  trip_headsign: number
  start_time: number
  end_time: number
}

export const tripsByIds = async ({
  day,
  trip_ids,
}: {
  day: string // YYYY-MM-DD
  trip_ids: string[]
}) => {
  const database = await getDatabase()
  const noon = toDate(`${day}T12:00:00`, { timeZone: 'Europe/Berlin' })
  const gtfsDayStart = addHours(noon, -12)
  const gtfsDayStartS = +gtfsDayStart / 1000

  const weekDay = weekDays[getDay(noon)]
  if (weekDay === undefined) throw new Error('invalid weekday')

  const query = `
      SELECT    *
      FROM      stop_times
      JOIN      trips
      ON        stop_times.trip_id = trips.trip_id
      WHERE     trips.trip_id IN (${trip_ids.join(',')})
`
  const stmt = database.prepare(query)

  const rows: Row[] = stmt.all()

  return Object.values(_.groupBy(rows, 'trip_id')).map((tripStops) => {
    const t = tripStops[0]
    if (!t) throw new Error('Error with trips')
    return {
      trip_id: t.trip_id,
      route_id: t.route_id,
      service_id: t.service_id,
      trip_headsign: t.trip_headsign,
      start_time: t.start_time + gtfsDayStartS,
      end_time: t.end_time + gtfsDayStartS,
      stops: tripStops.map((tripStop) => ({
        stop_idx: tripStop.stop_idx,
        stop_sequence: tripStop.stop_sequence,
        arrival_time: tripStop.arrival_time + gtfsDayStartS,
        departure_time: tripStop.departure_time + gtfsDayStartS,
      })),
    }
  })
}
