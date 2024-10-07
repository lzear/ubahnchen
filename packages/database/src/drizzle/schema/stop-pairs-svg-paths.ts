import {
  integer,
  real,
  sqliteTable,
  text,
  uniqueIndex,
} from 'drizzle-orm/sqlite-core'

import { stopPairs } from './stop-pairs'

export const stopPairsSvgPaths = sqliteTable(
  'stop_pairs_svg_paths',
  {
    stop_pair_idx: integer('stop_pair_idx')
      .notNull()
      .references(() => stopPairs.idx),
    map: text('map').notNull(),
    segments: text('segments').notNull(),
    length: real('length').notNull(),
  },
  (p) => ({
    uniquePerMap: uniqueIndex('uniquePerMap').on(p.stop_pair_idx, p.map),
  }),
)
