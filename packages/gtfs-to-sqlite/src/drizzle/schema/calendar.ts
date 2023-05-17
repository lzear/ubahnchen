/**
 * CREATE TABLE calendar
 *   (
 *      service_id TEXT     NOT NULL UNIQUE PRIMARY KEY,
 *      monday     INTEGER  NOT NULL,
 *      tuesday    INTEGER  NOT NULL,
 *      wednesday  INTEGER  NOT NULL,
 *      thursday   INTEGER  NOT NULL,
 *      friday     INTEGER  NOT NULL,
 *      saturday   INTEGER  NOT NULL,
 *      sunday     INTEGER  NOT NULL,
 *      start_date CHAR(8)  NOT NULL,
 *      end_date   CHAR(8)  NOT NULL
 *   );
 */

import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core'

export const calendar = sqliteTable('calendar', {
  service_id: text('service_id').notNull().primaryKey(),
  monday: integer('monday').notNull(),
  tuesday: integer('tuesday').notNull(),
  wednesday: integer('wednesday').notNull(),
  thursday: integer('thursday').notNull(),
  friday: integer('friday').notNull(),
  saturday: integer('saturday').notNull(),
  sunday: integer('sunday').notNull(),
  start_date: text('start_date').notNull(),
  end_date: text('end_date').notNull(),
})
