import type { DefaultOptions } from './00-seed'
// import { groupStops } from './01-group-stops'

export const seedStops = async ({
  databasePath,
  database,
  // gtfsDirectory,
  gtfsIterator,
  inserter,
}: DefaultOptions) => {
  // const parentStopById = await groupStops(gtfsDirectory)
  database.pragma('foreign_keys = OFF')

  const r = await inserter({
    databasePath,
    foreignKeys: false,
    prepare: `INSERT INTO stops (stop_id, stop_name, stop_lat, stop_lon, parent_station)
                         VALUES (@stop_id,@stop_name,@stop_lat,@stop_lon,@parent_station)`,
    run: (pusher) =>
      gtfsIterator.iterate('stops')(({ row, index }) => {
        // if (parentStopById.get(row.stop_id)?.stop_id === row.stop_id)
        pusher({ ...row, idx: index })
      }),
  })
  database.pragma('foreign_keys = 1')
  return r
}
