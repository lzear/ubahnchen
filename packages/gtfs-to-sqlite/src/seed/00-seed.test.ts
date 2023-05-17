import { beforeEach, describe, expect, it } from '@jest/globals'
import type BetterSqlite3 from 'better-sqlite3'

import { Temporary } from '@ubahnchen/utils'

import { gtfsToSqlite } from '../gtfs-to-sqlite'
import { gtfsToSqliteDrizzle } from '../gtfs-to-sqlite-drizzle'

import { seedDatabase } from './00-seed'

const makeCounts = (database: BetterSqlite3.Database) => {
  const counts: Record<string, number> = {}
  for (const table of [
    'stops',
    'trips',
    'routes',
    'stop_times',
    'calendar',
    'calendar_dates',
    'shapes',
  ]) // @ts-expect-error - TS doesn't know about the COUNT(*) aggregate function
    counts[table] = database.prepare(`SELECT COUNT(*) FROM ${table}`).get()[
      'COUNT(*)'
    ] as number
  return counts
}
xdescribe(seedDatabase, () => {
  describe.each([gtfsToSqlite, gtfsToSqliteDrizzle])('%p', (implementation) => {
    let temporary: Temporary

    beforeEach(() => {
      temporary = new Temporary()
    })

    it('converts GTFS to SQLite berlin-u', async () => {
      const database = await implementation({
        gtfsDirectoryPath: 'tests/gtfs/berlin-u',
        sqliteDatabasePath: temporary.file(),
      })
      expect(makeCounts(database.database)).toStrictEqual({
        calendar: 198,
        calendar_dates: 4808,
        routes: 9,
        shapes: 230,
        stop_times: 214_703,
        stops: 554,
        trips: 10_696,
      })
    }, 1_000_000)

    it('converts GTFS to SQLite berlin-u-smaller', async () => {
      const database = await gtfsToSqlite({
        gtfsDirectoryPath: 'tests/gtfs/berlin-u-smaller',
        sqliteDatabasePath: temporary.file('tmp.sqlite'),
      })
      expect(makeCounts(database.database)).toStrictEqual({
        calendar: 17,
        calendar_dates: 325,
        routes: 9,
        shapes: 22,
        stop_times: 413,
        stops: 512,
        trips: 22,
      })
    }, 100_000)
  })
})
