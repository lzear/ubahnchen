/**
 * CREATE TABLE stop_times
 *   (
 *      idx            INTEGER  NOT NULL UNIQUE PRIMARY KEY AUTOINCREMENT,
 *      trip_id        TEXT     NOT NULL,
 *      arrival_time   INTEGER  NOT NULL,
 *      departure_time INTEGER  NOT NULL,
 *      stop_id        TEXT     NOT NULL,
 *      stop_sequence  INTEGER  NOT NULL,
 * --   stop_headsign  TEXT     NOT NULL,
 * --   stop_headsign  INTEGER,
 *
 *      FOREIGN KEY (trip_id) REFERENCES trips (trip_id),
 *      FOREIGN KEY (stop_id) REFERENCES stops (stop_id)
 *   );
 */

import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core'

export const stopTimes = sqliteTable('stop_times', {
  idx: integer('idx').notNull().primaryKey({ autoIncrement: true }),
  trip_id: text('trip_id').notNull(),
  arrival_time: integer('arrival_time').notNull(),
  departure_time: integer('departure_time').notNull(),
  stop_id: text('stop_id').notNull(),
  stop_sequence: integer('stop_sequence').notNull(),
})
