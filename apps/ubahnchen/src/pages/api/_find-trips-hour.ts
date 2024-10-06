import { addDays, addHours, format, getDay } from 'date-fns'
import { toDate } from 'date-fns-tz'
import { inArray } from 'drizzle-orm'
import _ from 'lodash'

import type { City } from '@ubahnchen/cities'
import { P } from '@ubahnchen/cities/node'
import { drizzleTables, getDatabase } from '@ubahnchen/database'

import { weekDays } from './_date-utils'
import type { Pair, TripByHour, TripByHourRow, TripSegment } from './_keyframes'

export const rowToTripByHourRow = ({
  tripStops,
  day,
  pairs,
}: {
  tripStops: TripByHourRow[]
  day: string
  pairs: Pair[]
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
      // stop_idx: tripStop.stop_idx,
      // stop_sequence: tripStop.stop_sequence,
      arrival_time: tripStop.arrival_time + gtfsDayStartS,
      departure_time: tripStop.departure_time + gtfsDayStartS,
    })),
    segments: makeSegments(tripStops, pairs).map(
      ({ start_time, end_time, ...rest }) => ({
        start_time: start_time + gtfsDayStartS,
        end_time: end_time + gtfsDayStartS,
        ...rest,
      }),
    ),
  }
}

const makeSegments = (
  tripStops: TripByHourRow[],
  pairs: Pair[],
): TripSegment[] => {
  const segments: TripSegment[] = []

  let prev: { stopId: string; time: number } | undefined = undefined

  for (const tripStop of tripStops) {
    if (prev) {
      const pair = pairs.find(
        (p) =>
          p.route_id === tripStop.route_id &&
          p.stop_id_1 === prev!.stopId &&
          p.stop_id_2 === tripStop.stop_id,
      )
      if (!pair) throw new Error('pair not found')
      segments.push({
        type: 'running',
        start_time: prev.time,
        end_time: tripStop.departure_time,
        start_stop_id: prev.stopId,
        end_stop_id: tripStop.stop_id,
        stop_pair_idx: pair.idx,
      })
    }
    if (tripStop.arrival_time !== tripStop.departure_time)
      segments.push({
        type: 'paused',
        start_time: tripStop.departure_time,
        end_time: tripStop.arrival_time,
        stop_id: tripStop.stop_id,
      })
    prev = { stopId: tripStop.stop_id, time: tripStop.departure_time }
  }

  return segments
}

export const findTripsHourForDay = ({
  day,
  date,
  skipPrevious,
  routeTypes,
  city,
}: {
  day: string // YYYY-MM-DD
  skipPrevious: boolean
  date: Date
  routeTypes: number[]
  city: City
}): TripByHour[] => {
  const database = getDatabase(P(city).SQLITE.BIG)
  const noon = toDate(`${day}T12:00:00`, { timeZone: 'Europe/Berlin' })
  const gtfsDayStart = addHours(noon, -12)
  const gtfsDayStartS = +gtfsDayStart / 1000
  const startGtfsTime = +date / 1000 - gtfsDayStartS
  const gtfsDay = day.replaceAll('-', '')

  const weekDay = weekDays[getDay(noon)]
  if (weekDay === undefined) throw new Error('invalid weekday')

  let query = `
      SELECT          stop_times.*, trips.*, stops.stop_id
      FROM            stop_times
      JOIN            trips
      ON              stop_times.trip_id = trips.trip_id
      JOIN            stops
      ON              stops.stop_id = stop_times.stop_id
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
       
      JOIN            routes
      ON              routes.route_id = trips.route_id
      WHERE           routes.route_type IN (@routeTypes) AND
                      trips.start_time <= @endGtfsTime
      AND             trips.end_time >= @startGtfsTime
`
  if (skipPrevious)
    query += `
      AND             trips.start_time >= @startGtfsTime
  `

  type Params = {
    gtfsDay: string
    startGtfsTime: number
    endGtfsTime: number
    routeTypes: string
  }
  const stmt = database.database.prepare<Params, TripByHourRow>(query)

  const parameters: Params = {
    gtfsDay,
    startGtfsTime,
    endGtfsTime: startGtfsTime + 3600,
    routeTypes: routeTypes.join(','),
  }
  const rows = stmt.all(parameters)

  const stopPairs = drizzleTables.stopPairs

  const routeIds = rows.map((r) => r.route_id)
  const uniqueRouteIds = [...new Set(routeIds)]

  const pairs = database.drizzled
    .select()
    .from(stopPairs)
    .where(inArray(stopPairs.route_id, uniqueRouteIds))
    .all()

  return Object.values(_.groupBy(rows, 'trip_id')).map((tripStops) =>
    rowToTripByHourRow({ tripStops, day, pairs }),
  )
}

export const findTripsHour = ({
  date,
  skipPrevious,
  routeTypes,
  city,
}: {
  date: string
  skipPrevious: boolean
  routeTypes: number[]
  city: City
}): TripByHour[] => {
  const berlinDate = toDate(date, { timeZone: 'Europe/Berlin' })
  const calendToday = format(berlinDate, 'yyyy-MM-dd')
  const calendYesterday = format(addDays(berlinDate, -1), 'yyyy-MM-dd')

  const tripsToday = findTripsHourForDay({
    day: calendToday,
    date: berlinDate,
    skipPrevious,
    city,
    routeTypes,
  })

  const tripsYesterday = findTripsHourForDay({
    day: calendYesterday,
    date: berlinDate,
    skipPrevious,
    city,
    routeTypes,
  })

  return [...tripsYesterday, ...tripsToday]
  //   .sort((a, b) => a.start_time - b.start_time)
  //   .map((trip) => {
  //     const keyframes = tripKeyFrames(trip, mapName)
  //     const keyframes2 = tripKeyFrames2(keyframes)
  //     const { stops, ...tripWithoutStops } = trip
  //     return {
  //       ...tripWithoutStops,
  //       keyframes2,
  //     }
  //   })
}
