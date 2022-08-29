import { getDay, parse } from 'date-fns'
import { weekDays } from '../lib/lib/utils'
import { getDatabase } from './utils/get-database'

type TripDay = {
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

export const findTripsDay = async (gtfsDay: string) => {
  const database = await getDatabase()
  const date = parse(gtfsDay, 'yyyyMMdd', new Date())

  const weekDay = weekDays[getDay(date)]

  const query = `
      SELECT          *
      FROM            trips
      JOIN (
            SELECT service_id FROM calendar
                WHERE start_date <= @gtfsDay
                    AND end_date >= @gtfsDay
                    AND ${weekDay} = 1
            UNION
            SELECT service_id FROM calendar_dates
                WHERE date = @gtfsDay
                    AND is_removing = 0
            EXCEPT
            SELECT service_id FROM calendar_dates
                WHERE date = @gtfsDay
                    AND is_removing = 1
      ) ASI ON ASI.service_id = trips.service_id
`

  const stmt = database.prepare(query)
  const parameters = { gtfsDay }
  const rows: TripDay[] = stmt.all(parameters)
  return rows
}
