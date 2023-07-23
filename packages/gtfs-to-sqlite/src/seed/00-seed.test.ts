import { beforeEach, describe, expect, it } from '@jest/globals'
import type BetterSqlite3 from 'better-sqlite3'

import { Temporary } from '@ubahnchen/node-utils'

import { stopPairs } from '../drizzle'
import { gtfsToSqlite } from '../gtfs-to-sqlite'

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
    'stop_pairs',
  ]) // @ts-expect-error - TS doesn't know about the COUNT(*) aggregate function
    counts[table] = database.prepare(`SELECT COUNT(*) FROM ${table}`).get()[
      'COUNT(*)'
    ] as number
  return counts
}
describe(seedDatabase, () => {
  describe.each([false, true])('%p', (useDrizzle) => {
    let temporary: Temporary

    beforeEach(() => {
      temporary = new Temporary()
    })

    xit('converts GTFS to SQLite berlin-u', async () => {
      const database = await gtfsToSqlite(
        {
          gtfsDirectoryPath: 'tests/gtfs/berlin-u',
          sqliteDatabasePath: temporary.file(),
        },
        useDrizzle,
      )
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
  })
})

describe('With drizzle', () => {
  let temporary: Temporary

  beforeEach(() => {
    temporary = new Temporary()
  })

  it('converts GTFS to SQLite berlin-u-smaller', async () => {
    const { database, drizzleDatabase } = await gtfsToSqlite(
      {
        gtfsDirectoryPath: 'tests/gtfs/berlin-u-smaller',
        sqliteDatabasePath: temporary.file('tmp.sqlite'),
      },
      true,
    )
    expect(makeCounts(database)).toStrictEqual({
      calendar: 17,
      calendar_dates: 325,
      routes: 9,
      shapes: 22,
      stop_times: 413,
      stops: 512,
      trips: 22,
      stop_pairs: 346,
    })

    const pairs = drizzleDatabase.select().from(stopPairs).limit(3).all()
    expect(pairs).toStrictEqual([
      {
        count: 1,
        idx: 1,
        is_one_way: 1,
        route_id: '17526_400',
        stop_id_1: 'de:11000:900062202::2',
        stop_id_2: 'de:11000:900062203::2',
      },
      {
        count: 1,
        idx: 2,
        is_one_way: 1,
        route_id: '17526_400',
        stop_id_1: 'de:11000:900062203::2',
        stop_id_2: 'de:11000:900061101::2',
      },
      {
        count: 1,
        idx: 3,
        is_one_way: 1,
        route_id: '17526_400',
        stop_id_1: 'de:11000:900061101::2',
        stop_id_2: 'de:11000:900061102::2',
      },
    ])
  }, 20_000)
})
