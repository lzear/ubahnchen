/**
 * CREATE TABLE shapes
 *   (
 *     shape_id  TEXT NOT NULL PRIMARY KEY,
 *     shape_pts TEXT NOT NULL,
 *     lat_min   REAL NOT NULL,
 *     lat_max   REAL NOT NULL,
 *     lon_min   REAL NOT NULL,
 *     lon_max   REAL NOT NULL
 *   );
 */

import { real, sqliteTable, text } from 'drizzle-orm/sqlite-core'

export const shapes = sqliteTable('shapes', {
  shape_id: text('shape_id').notNull().primaryKey(),
  shape_pts: text('shape_pts').notNull(),
  lat_min: real('lat_min').notNull(),
  lat_max: real('lat_max').notNull(),
  lon_min: real('lon_min').notNull(),
  lon_max: real('lon_max').notNull(),
})
