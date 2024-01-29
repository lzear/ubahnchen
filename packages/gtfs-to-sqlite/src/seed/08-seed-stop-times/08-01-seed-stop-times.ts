import { gtfsTimeToSeconds } from '@ubahnchen/gtfs-helpers'

import { preparedInsertsBulk } from '../../inserts'
import type { Pusher } from '../../inserts/type'
import type { DefaultOptions } from '../00-seed'

type StopTimePayload = {
  arrival_time: number
  departure_time: number
  stop_id: string
  trip_id: string
  stop_sequence: number
}

export const runStopTimes =
  ({
    gtfsIterator,
    database,
  }: Pick<DefaultOptions, 'gtfsIterator' | 'database'>) =>
  async (pusher: Pusher<StopTimePayload>) => {
    database.pragma('foreign_keys = OFF')
    database.pragma('synchronous = OFF')
    database.pragma('journal_mode = OFF')

    const tripStartEnd = new Map<string, { start: number; end: number }>()
    await gtfsIterator.iterate('stop_times')(({ row }) => {
      const arrival_time = gtfsTimeToSeconds(row.arrival_time)
      const departure_time = gtfsTimeToSeconds(row.departure_time)

      const startEnd = tripStartEnd.get(row.trip_id)
      if (!arrival_time) {
        // pass
      } else if (startEnd) {
        if (arrival_time < startEnd.start) startEnd.start = arrival_time
        if (arrival_time > startEnd.end) startEnd.end = arrival_time
      } else {
        tripStartEnd.set(row.trip_id, {
          start: arrival_time,
          end: arrival_time,
        })
      }
      pusher({
        arrival_time,
        departure_time,
        stop_id: row.stop_id,
        trip_id: row.trip_id,
        stop_sequence: Number(row.stop_sequence),
      })
    })

    database.pragma('foreign_keys = ON')
    database.pragma('synchronous = ON')
    database.pragma('journal_mode = ON')

    return { tripStartEnd }
  }

export const seedStopTimes = async ({
  gtfsIterator,
  database,
  databasePath,
}: DefaultOptions): Promise<{
  tripStartEnd: Map<string, { start: number; end: number }>
}> =>
  preparedInsertsBulk({
    databasePath,
    prepare: `
        INSERT INTO stop_times
               ( trip_id, arrival_time, departure_time, stop_id, stop_sequence )
        VALUES (@trip_id,@arrival_time,@departure_time,@stop_id,@stop_sequence
            )`,
    run: runStopTimes({ gtfsIterator, database }),
    chunkSize: 100_000,
  })
