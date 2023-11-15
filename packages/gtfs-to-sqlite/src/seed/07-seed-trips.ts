import type { DefaultOptions } from './00-seed'

export type SeedTripsOptions = DefaultOptions & { hasShapes: boolean }

export const seedTrips = async ({
  gtfsIterator,
  hasShapes,
  databasePath,
  inserter,
}: SeedTripsOptions) =>
  inserter({
    databasePath,
    prepare: `INSERT INTO trips (route_id,service_id,trip_id,trip_headsign,start_time,end_time,shape_id)
     VALUES (@route_id, @service_id, @trip_id, @trip_headsign, @start_time, @end_time, ${
       hasShapes ? '@shape_id' : 'NULL'
     })`,
    run: (pusher) =>
      gtfsIterator.iterate('trips')(({ row }) =>
        pusher({ ...row, start_time: undefined, end_time: undefined }),
      ),
  })
