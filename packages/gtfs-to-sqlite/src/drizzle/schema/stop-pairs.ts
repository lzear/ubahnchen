/**
 *
 * CREATE TABLE stop_pairs
 *   (
 *      idx            INTEGER NOT NULL UNIQUE PRIMARY KEY AUTOINCREMENT,
 *      stop_id_1      TEXT    NOT NULL,
 *      stop_id_2      TEXT    NOT NULL,
 *      route_name     TEXT    NOT NULL, -- REFERENCES routes (route_name),
 *      count          INTEGER NOT NULL,
 *      is_one_way     BOOLEAN,
 *
 *      UNIQUE (route_name, stop_id_1, stop_id_2),
 *
 *      FOREIGN KEY (stop_id_1)  REFERENCES stops (stop_id),
 *      FOREIGN KEY (stop_id_2)  REFERENCES stops (stop_id)
 *   );
 */

import {
  integer,
  sqliteTable,
  text,
  uniqueIndex,
} from 'drizzle-orm/sqlite-core'

import { routes } from './routes'
import { stops } from './stops'

export const stopPairs = sqliteTable(
  'stop_pairs',
  {
    idx: integer('idx').notNull().primaryKey({ autoIncrement: true }),
    stop_id_1: text('stop_id_1')
      .notNull()
      .references(() => stops.stop_id),
    stop_id_2: text('stop_id_2')
      .notNull()
      .references(() => stops.stop_id),
    route_id: text('route_id')
      .notNull()
      .references(() => routes.route_id),
    count: integer('count').notNull(),
    is_one_way: integer('is_one_way').notNull(),
    // lon_min: real('lon_min').notNull(),
    // lon_max: real('lon_max').notNull(),
  },
  (stopPairs) => ({
    uniqueIdx: uniqueIndex('uniqueIdx').on(stopPairs.idx),
    uniqueRouteStops: uniqueIndex('uniqueRouteStops').on(
      stopPairs.route_id,
      stopPairs.stop_id_1,
      stopPairs.stop_id_2,
    ),
  }),
)
