import { getDay, parse } from 'date-fns'
import { weekDays } from '../lib/lib/utils'
import { FindTripsCount } from '../lib/keyframe'
import { getDatabase } from './utils/get-database'
import { eachDay2 } from './each-day'

const countTripsDay = async (gtfsDay: string): Promise<FindTripsCount> => {
  const database = await getDatabase()
  const dateUtc = parse(gtfsDay, 'yyyyMMdd', new Date())
  const weekDay = weekDays[getDay(dateUtc)]

  const query = `
      SELECT    COUNT(trips.trip_id) as trip_count
      FROM      trips
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
  const { trip_count }: { trip_count: number } = stmt.get(parameters)

  return { date: gtfsDay, trip_count }
}

export const findTripsCount = async (): Promise<FindTripsCount[]> => {
  const days = await eachDay2()
  return Promise.all(days.map((day) => countTripsDay(day)))
}
