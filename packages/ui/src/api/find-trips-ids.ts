import { getDay, parse } from 'date-fns'
import { weekDays } from '../lib/lib/utils'
import { getDatabase } from './utils/get-database'
import { eachDay2 } from './each-day'

export const dayTripsIds = async (
  gtfsDay: string,
): Promise<{ date: string; trip_ids: number[] }> => {
  const database = await getDatabase()
  const dateUtc = parse(gtfsDay, 'yyyyMMdd', new Date())
  const weekDay = weekDays[getDay(dateUtc)]

  const query = `
      SELECT    DISTINCT(trips.trip_id) as trip_id
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
  const rows: { trip_id: number }[] = stmt.all(parameters)

  return { date: gtfsDay, trip_ids: rows.map((r) => r.trip_id) }
}

export const findTripsIds = async (): Promise<
  {
    date: string
    trip_ids: number[]
  }[]
> => {
  const days = await eachDay2()
  return await Promise.all(days.map((day) => dayTripsIds(day)))
}
