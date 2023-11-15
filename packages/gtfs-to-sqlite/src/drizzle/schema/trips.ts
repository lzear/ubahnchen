import { foreignKey, integer, sqliteTable, text } from 'drizzle-orm/sqlite-core'

import { routes } from './routes'

export const trips = sqliteTable(
  'trips',
  {
    route_id: text('route_id').notNull(), // .foreignKey('routes', 'route_id'),
    shape_id: text('shape_id'), //.foreignKey('shapes', 'shape_id'),
    service_id: text('service_id').notNull(),
    trip_id: text('trip_id').notNull().primaryKey(),
    trip_headsign: text('trip_headsign').notNull(),
    start_time: integer('start_time'),
    end_time: integer('end_time'),
  },
  (trips) => ({
    routesFk: foreignKey(() => ({
      columns: [trips.route_id],
      foreignColumns: [routes.route_id],
    })),
  }),
)
