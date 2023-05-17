/**
 * CREATE TABLE stops
 *   (
 *      stop_id    TEXT          NOT NULL UNIQUE PRIMARY KEY,
 *      stop_name  TEXT          NOT NULL,
 *      stop_lat   REAL          NOT NULL,
 *      stop_lon   REAL          NOT NULL,
 *      parent_station   TEXT    NOT NULL REFERENCES stops(stop_id)
 *   );
 */

import type { AnySQLiteColumn } from 'drizzle-orm/sqlite-core'
import { real, sqliteTable, text } from 'drizzle-orm/sqlite-core'

export const stops = sqliteTable('stops', {
  stop_id: text('stop_id').notNull().primaryKey(),
  stop_name: text('stop_name').notNull(),
  stop_lat: real('stop_lat').notNull(),
  stop_lon: real('stop_lon').notNull(),
  parent_station: text('parent_station').references(
    (): AnySQLiteColumn => stops.stop_id,
  ),
})
