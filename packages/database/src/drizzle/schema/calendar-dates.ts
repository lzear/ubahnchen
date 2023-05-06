/**
 * CREATE TABLE calendar_dates
 *   (
 *      idx            INTEGER  NOT NULL PRIMARY KEY AUTOINCREMENT,
 *      service_id     INTEGER  NOT NULL,
 *      date           CHAR(8)  NOT NULL,
 *      is_removing    INTEGER  NOT NULL
 *
 * --     CONSTRAINT PK_calendar_dates PRIMARY KEY (service_id, date)
 *   );
 */

import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core'

export const calendarDates = sqliteTable('calendar_dates', {
  idx: integer('idx').notNull().primaryKey(),
  service_id: integer('service_id').notNull(),
  date: text('date').notNull(),
  is_removing: integer('is_removing').notNull(),
})
