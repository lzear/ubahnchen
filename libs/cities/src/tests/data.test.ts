import fs from 'node:fs'

import { count, eq } from 'drizzle-orm'

import { drizzleTables } from '@ubahnchen/database'
import { extractSVGPaths } from '@ubahnchen/svg'

import { citiesList } from '../index'
import { getDatabaseForCity, P } from '../node'

const {
  // calendar,
  // calendarDates,
  // routes,
  // shapes,
  stopPairs,
  stopPairsSvgPaths,
  // stopTimes,
  // stops,
  // trips,
} = drizzleTables

describe.each(citiesList)('%s', (city) => {
  const { drizzled } = getDatabaseForCity(city)
  it.each([
    'calendar',
    'calendarDates',
    'routes',
    'shapes',
    'stopPairs',
    'stopPairsSvgPaths',
    'stopTimes',
    'stops',
    'trips',
  ] as const)('has rows: %s', (table) => {
    const [c] = drizzled
      .select({ count: count() })
      .from(drizzleTables[table])
      .all()
    // arbitrary value just to check if it goes low.
    // Currently, 431 stop_pairs_svg_paths
    console.log(`antoinelog table, c`, table, c)

    expect(c?.count).gt(400)
  })
  it('gets `u` segments', async () => {
    const pairs = drizzled
      .select({ segments: stopPairsSvgPaths.segments })
      .from(stopPairsSvgPaths)
      .where(eq(stopPairsSvgPaths.map, 'u'))
      .all()
    const segments = pairs.flatMap(
      ({ segments }) =>
        JSON.parse(segments) as { pathId: string; length: [number, number] }[],
    )
    const pathIdsPairs = new Set(segments.map(({ pathId }) => pathId))

    expect([...pathIdsPairs].sort()).toEqual([
      'u-12',
      'u-20',
      'u-3',
      'u-4',
      'u-41',
      'u-44',
      'u-5',
      'u-7',
      'u-9',
    ])
    const svgPath = P('berlin', 'u').SRC.SVG.STEP_31_JUST_LINES
    const svgString = await fs.promises.readFile(svgPath, 'utf8')

    const paths = extractSVGPaths(svgString)
    const pathIdsSvg = new Set(paths.map(({ id }) => id))

    const diff1 = [...pathIdsPairs].filter((x) => !pathIdsSvg.has(x))
    const diff2 = [...pathIdsSvg].filter((x) => !pathIdsPairs.has(x))

    expect(diff1).toEqual([])
    expect(diff2).toEqual([])
  })

  it.todo('gets wps', () => {
    const map = 'u'
    const db = getDatabaseForCity(city).drizzled

    const pairs = db
      .select()
      .from(stopPairsSvgPaths)
      .innerJoin(stopPairs, eq(stopPairsSvgPaths.stop_pair_idx, stopPairs.idx))
      .where(eq(stopPairsSvgPaths.map, map))
      .all()

    expect(pairs.length).toBeGreaterThan(0)
  })
})
