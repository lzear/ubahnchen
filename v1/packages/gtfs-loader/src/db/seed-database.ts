import { Stop } from 'gtfs-types'
import { oraPromise } from 'ora'
import _ from 'lodash'
import { streamCsv3 } from '../csv/stream-csv'
import { GTFS_CSV_FILTERED_MODES } from '../data'
import { getDatabase } from './get-database'
import { groupStops } from './group-stops'

export const gtfsTimeToSec = (time: string): number => {
  const [hh, mm, ss] = time.split(':').map(Number)
  return (60 * hh + mm) * 60 + ss
}

const seedStops = async ({
  parentStopById,
}: {
  parentStopById: { [stopId: string]: Stop }
}) => {
  const database = getDatabase()
  const s = await database.prepare(
    `INSERT INTO stops ( stop_id, stop_name)
                VALUES (@stop_id,@stop_name)`,
  )
  const stops: (Stop & { idx: number })[] = []
  let index = 0
  await streamCsv3({
    oraText: 'seed stops',
    filePath: `${GTFS_CSV_FILTERED_MODES}/stops.txt`,
    func: async (row) => {
      if (parentStopById[row.stop_id].stop_id === row.stop_id) {
        await s.run(parentStopById[row.stop_id])
        stops.push({ ...parentStopById[row.stop_id], idx: index++ })
      }
    },
  })
  return stops
}
const seedCalendar = async () => {
  const database = getDatabase()
  const s = await database.prepare(
    `INSERT INTO calendar (service_id, monday, tuesday, wednesday, thursday, friday, saturday, sunday, start_date, end_date)
                VALUES (@service_id, @monday, @tuesday, @wednesday, @thursday, @friday, @saturday, @sunday, @start_date, @end_date)`,
  )
  return streamCsv3({
    oraText: 'seed calendar',
    filePath: `${GTFS_CSV_FILTERED_MODES}/calendar.txt`,
    func: (row) => s.run(row),
  })
}

const seedCalendarDates = async () => {
  const database = getDatabase()
  const s = await database.prepare(
    `INSERT INTO calendar_dates (service_id,date,is_removing)
                          VALUES (@service_id, @date, @is_removing)`,
  )
  return streamCsv3({
    oraText: 'seed calendar_dates',
    filePath: `${GTFS_CSV_FILTERED_MODES}/calendar_dates.txt`,
    func: async (row) => {
      await s.run({
        service_id: row.service_id,
        date: row.date,
        is_removing: row.exception_type === '2' ? 1 : 0,
      })
    },
  })
}

const seedStopTimes = async ({
  parentStopById,
}: {
  parentStopById: { [stopId: string]: Stop }
}) => {
  const database = getDatabase()
  const stopsQ = await database.prepare(`SELECT * FROM stops`)
  const ss: { stop_idx: number; stop_id: string }[] = stopsQ.all()

  const byStopId = _.keyBy(ss, 'stop_id')

  const insert =
    await database.prepare(`INSERT INTO stop_times (trip_id,arrival_time,departure_time, stop_idx)
                          VALUES (@trip_id, @arrival_time, @departure_time, @stop_idx
                          )`)

  const tripStartEnd: {
    [trip_id: string]: {
      start: number
      end: number
    }
  } = {}
  await streamCsv3({
    oraText: 'seed stop_times',
    filePath: `${GTFS_CSV_FILTERED_MODES}/stop_times.txt`,
    func: async (row) => {
      const stop = parentStopById[row.stop_id]
      const arrival_time = gtfsTimeToSec(row.arrival_time)
      const departure_time = gtfsTimeToSec(row.departure_time)

      const startEnd = tripStartEnd[row.trip_id]
      if (startEnd) {
        if (startEnd.start > arrival_time) startEnd.start = arrival_time
        if (startEnd.end < arrival_time) startEnd.end = arrival_time
      } else
        tripStartEnd[row.trip_id] = {
          start: arrival_time,
          end: arrival_time,
        }
      const s = byStopId[stop.stop_id]
      insert.run({
        ...row,
        arrival_time,
        departure_time,
        stop_idx: s.stop_idx,
      })
    },
  })
  return { tripStartEnd }
}

const seedTrips = async () => {
  const database = getDatabase()
  const trip_headsigns: string[] = []
  const trip_headsigns_reverse: Record<string, number> = {}
  const s = await database.prepare(
    `INSERT INTO trips (route_id,service_id,trip_id,trip_headsign,start_time,end_time)
     VALUES (@route_id, @service_id, @trip_id, @trip_headsign, @start_time, @end_time)`,
  )
  await streamCsv3({
    oraText: 'seed trips',
    filePath: `${GTFS_CSV_FILTERED_MODES}/trips.txt`,
    func: async (row) => {
      // if (!(row.trip_headsign in trip_headsigns_reverse)) {
      //   trip_headsigns.push(row.trip_headsign)
      //   trip_headsigns_reverse[row.trip_headsign] = trip_headsigns.length - 1
      // }
      await s.run({
        ...row,
        start_time: undefined,
        end_time: undefined,
      })
    },
  })

  // await fs.promises.writeFile(
  //   `${TEMP}/trip_headsigns.json`,
  //   JSON.stringify(trip_headsigns),
  // )
  return { trip_headsigns, trip_headsigns_reverse }
}

const seedRoutes = async () => {
  const database = getDatabase()
  const s = await database.prepare(
    `INSERT INTO routes (route_id,route_name) VALUES (@route_id, @route_name)`,
  )
  await streamCsv3({
    filePath: `${GTFS_CSV_FILTERED_MODES}/routes.txt`,
    func: (row) =>
      s.run({
        route_id: row.route_id,
        route_name: row.route_short_name,
      }),
    oraText: 'Gather routes',
  })
}

const updateTrips = async ({
  tripStartEnd,
}: {
  tripStartEnd: {
    [trip_id: string]: {
      start: number
      end: number
    }
  }
}) => {
  const database = getDatabase()
  const s = await database.prepare(
    `UPDATE trips
       SET start_time = @start_time,
           end_time   = @end_time
       WHERE trip_id = @trip_id
  `,
  )
  for (const trip_id of Object.keys(tripStartEnd))
    await s.run({
      trip_id,
      start_time: tripStartEnd[trip_id].start,
      end_time: tripStartEnd[trip_id].end,
    })
}

const makeIndexes = async () => {
  const database = getDatabase()
  return oraPromise(async () => {
    await database.exec(
      `CREATE INDEX idx_trip_id
    ON stop_times (trip_id);`,
    )
    await database.exec(
      `CREATE INDEX idx_arrival_time
    ON stop_times (arrival_time);`,
    )
    await database.exec(
      `CREATE INDEX idx_departure_time
    ON stop_times (departure_time);`,
    )
  }, 'Build DB indexes')
}
export const seedDatabase = async () => {
  const parentStopById = await groupStops()
  await seedStops({ parentStopById })
  await seedRoutes()
  await seedCalendar()
  await seedCalendarDates()
  await seedTrips()
  const { tripStartEnd } = await seedStopTimes({ parentStopById })
  await updateTrips({ tripStartEnd })
  await makeIndexes()
}
