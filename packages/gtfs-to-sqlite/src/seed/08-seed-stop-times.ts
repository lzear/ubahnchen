// import _ from 'lodash'

import { gtfsTimeToSeconds } from '@ubahnchen/gtfs-helpers'

import type { DefaultOptions } from './00-seed'
// import { groupStops } from './01-group-stops'

export const seedStopTimes = async ({
  gtfsIterator,
  database,
  // gtfsDirectory,
  databasePath,
  // database,
  inserter,
}: DefaultOptions): Promise<{
  tripStartEnd: Map<string, { start: number; end: number }>
}> => {
  // const parentStopById = await groupStops(gtfsDirectory)

  // const stopsQ = await database.prepare(`SELECT * FROM stops`)
  // const ss: { stop_id: string }[] = stopsQ.all()
  // const byStopId = _.keyBy(ss, 'stop_id')
  const tripStartEnd = new Map<string, { start: number; end: number }>()

  // database.pragma('foreign_keys = OFF')
  // database.pragma('synchronous = OFF')
  // database.pragma('journal_mode = OFF')

  const r = await inserter({
    databasePath,
    prepare: `
        INSERT INTO stop_times
               ( trip_id, arrival_time, departure_time, stop_id, stop_sequence )
        VALUES (@trip_id,@arrival_time,@departure_time,@stop_id,@stop_sequence
            )`,
    run: async (pusher) => {
      await gtfsIterator.iterate('stop_times')(
        async ({ row }) => {
          // const stop = parentStopById.get(row.stop_id)
          // if (!stop) throw new Error(`stop not found: ${row.stop_id}`)
          const arrival_time = gtfsTimeToSeconds(row.arrival_time)
          const departure_time = gtfsTimeToSeconds(row.departure_time)

          const startEnd = tripStartEnd.get(row.trip_id)
          if (!arrival_time) {
            // pass
          } else if (startEnd) {
            if (startEnd.start > arrival_time) startEnd.start = arrival_time
            if (startEnd.end < arrival_time) startEnd.end = arrival_time
          } else {
            tripStartEnd.set(row.trip_id, {
              start: arrival_time,
              end: arrival_time,
            })
          }
          // const s = byStopId[stop.stop_id]
          pusher({
            ...row,
            arrival_time,
            departure_time,
            // stop_id: s.stop_id,
          })
        },
        // { objectMode: false, encoding: 'utf8', headers: true },
      )

      return { tripStartEnd }
    },
  })
  database.pragma('foreign_keys = ON')
  database.pragma('synchronous = ON')
  return r
}
