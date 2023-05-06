import type { DefaultOptions } from './00-seed'

export const seedRoutes = async ({
  databasePath,
  gtfsIterator,
  inserter,
}: DefaultOptions) =>
  inserter({
    databasePath,
    prepare: `INSERT INTO routes (route_id,route_name,route_type) VALUES (@route_id, @route_name, @route_type)`,
    run: (pusher) =>
      gtfsIterator.iterate('routes')(({ row }) => {
        return pusher({
          route_id: row.route_id,
          route_name: row.route_short_name,
          route_type: row.route_type,
        })
      }),
  })
