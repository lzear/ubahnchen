import type { DefaultOptions } from './00-seed'

export type UpdateTripsOptions = DefaultOptions & {
  tripStartEnd: Map<string, { start: number; end: number }>
}

export const updateTrips = async ({
  tripStartEnd,
  inserter,
  databasePath,
}: UpdateTripsOptions) => {
  return inserter({
    databasePath,
    prepare: `UPDATE trips
       SET start_time = @start_time,
           end_time   = @end_time
       WHERE trip_id = @trip_id
  `,
    run: async (pusher) => {
      for (const trip_id of Object.keys(tripStartEnd)) {
        const startEnd = tripStartEnd.get(trip_id)
        if (!startEnd) throw new Error(`startEnd not found: ${trip_id}`)
        await pusher({
          trip_id,
          start_time: startEnd.start,
          end_time: startEnd.end,
        })
      }
    },
  })
}
