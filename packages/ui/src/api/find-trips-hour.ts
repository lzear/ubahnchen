import { addDays, addHours, format, getDay } from 'date-fns'
import { toDate } from 'date-fns-tz'
import _ from 'lodash'
import { weekDays } from '../lib/lib/utils'
import { TripByHour, TripByHourRow, TripNFrames } from '../lib/keyframe'
import { MapName } from '../lib/enums'
import { getDatabase } from './utils/get-database'
import { tripKeyFrames, tripKeyFrames2 } from './trips-keyframes'

export const rowToTripByHourRow = ({
  tripStops,
  day,
}: {
  tripStops: TripByHourRow[]
  day: string
}): TripByHour => {
  const noon = toDate(`${day}T12:00:00`, { timeZone: 'Europe/Berlin' })
  const gtfsDayStart = addHours(noon, -12)
  const gtfsDayStartS = +gtfsDayStart / 1000
  const t = tripStops[0]

  if (!t) throw new Error('Error with trips')

  return {
    day,
    trip_id: t.trip_id,
    route_id: t.route_id,
    // service_id: t.service_id,
    // trip_headsign: t.trip_headsign,
    start_time: t.start_time + gtfsDayStartS,
    end_time: t.end_time + gtfsDayStartS,
    stops: tripStops.map((tripStop) => ({
      stop_id: tripStop.stop_id,
      stop_idx: tripStop.stop_idx,
      // stop_sequence: tripStop.stop_sequence,
      arrival_time: tripStop.arrival_time + gtfsDayStartS,
      departure_time: tripStop.departure_time + gtfsDayStartS,
    })),
  }
}

export const findTripsHourForDay = async ({
  day,
  date,
  skipPrevious,
  mapName,
}: {
  day: string // YYYY-MM-DD
  skipPrevious: boolean
  date: Date
  mapName: MapName
}): Promise<TripByHour[]> => {
  const database = await getDatabase()
  const noon = toDate(`${day}T12:00:00`, { timeZone: 'Europe/Berlin' })
  const gtfsDayStart = addHours(noon, -12)
  const gtfsDayStartS = +gtfsDayStart / 1000
  const startGtfsTime = +date / 1000 - gtfsDayStartS
  const gtfsDay = day.replaceAll('-', '')

  const weekDay = weekDays[getDay(noon)]
  if (weekDay === undefined) throw new Error('invalid weekday')

  const filterUbahns =
    mapName === MapName.U
      ? `
      JOIN            routes
      ON              routes.route_id = trips.route_id
      WHERE           routes.route_name LIKE 'U%' AND
      `
      : 'WHERE'

  let query = `
      SELECT          stop_times.*, trips.*, stops.stop_id
                      ${mapName === MapName.U ? ', routes.*' : ''}
      FROM            stop_times
      JOIN            trips
      ON              stop_times.trip_id = trips.trip_id
      JOIN            stops
      ON              stops.stop_idx = stop_times.stop_idx
      JOIN (SELECT service_id FROM calendar
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
      ${filterUbahns}
                      trips.start_time <= @endGtfsTime
      AND             trips.end_time >= @startGtfsTime
`
  if (skipPrevious)
    query += `
      AND             trips.start_time >= @startGtfsTime
  `
  const stmt = database.prepare(query)

  const parameters = {
    gtfsDay,
    startGtfsTime,
    endGtfsTime: startGtfsTime + 3600,
  }
  const rows: TripByHourRow[] = stmt.all(parameters)

  return Object.values(_.groupBy(rows, 'trip_id')).map((tripStops) =>
    rowToTripByHourRow({ tripStops, day }),
  )
}

export const findTripsHour = async (
  date: string,
  skipPrevious: boolean,
  mapName: MapName,
): Promise<TripNFrames[]> => {
  const berlinDate = toDate(date, { timeZone: 'Europe/Berlin' })
  const calendToday = format(berlinDate, 'yyyy-MM-dd')
  const calendYesterday = format(addDays(berlinDate, -1), 'yyyy-MM-dd')

  const tripsToday = await findTripsHourForDay({
    day: calendToday,
    date: berlinDate,
    skipPrevious,
    mapName,
  })

  const tripsYesterday = await findTripsHourForDay({
    day: calendYesterday,
    date: berlinDate,
    skipPrevious,
    mapName,
  })

  return [...tripsYesterday, ...tripsToday]
    .sort((a, b) => a.start_time - b.start_time)
    .map((trip) => {
      const keyframes = tripKeyFrames(trip, mapName)
      const keyframes2 = tripKeyFrames2(keyframes)
      const { stops, ...tripWithoutStops } = trip
      return {
        ...tripWithoutStops,
        keyframes2,
      }
    })
}
