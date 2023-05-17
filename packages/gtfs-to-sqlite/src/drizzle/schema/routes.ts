/**
 * CREATE TABLE routes
 *   (
 *      route_id    TEXT          NOT NULL UNIQUE PRIMARY KEY,
 *      route_name  CHAR(3)       NOT NULL,
 *      route_type  INTEGER       NOT NULL
 *   );
 */

import { index, integer, sqliteTable, text } from 'drizzle-orm/sqlite-core'

export const routes = sqliteTable(
  'routes',
  {
    route_id: text('route_id').notNull().primaryKey(),
    route_name: text('route_name').notNull(),
    route_type: integer('route_type').notNull(),
  },
  (countries) => ({
    nameIdx: index('route_name_idx').on(countries.route_name),
  }),
)
