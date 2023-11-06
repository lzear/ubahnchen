import { filterGtfs } from './filter-gtfs.js'
import type { CsvRoute } from './gtfs-csv-types.js'

describe(filterGtfs, () => {
  it('filters gtfs', async () => {
    const sets = await filterGtfs({
      sourceDir: 'tests/gtfs/berlin-u-smaller',
      targetDir: 'tmpberlin',
      filters: [
        [
          'routes' as const,
          // @ts-ignore
          (route: CsvRoute) => route.route_id === '17512_400',
        ],
      ],
    })
    expect(sets).toMatchInlineSnapshot(`
      {
        "agency": Set {
          "796",
        },
        "routes": Set {
          "17512_400",
        },
        "services": Set {
          "2325",
        },
        "shapes": Set {
          "13620",
        },
        "stops": Set {
          "000300106001",
          "de:11000:900023203::2",
          "de:11000:900056101::5",
          "de:11000:900056102::2",
          "de:11000:900005201::2",
          "de:11000:900017103::2",
          "de:11000:900017104::2",
          "de:11000:900012103::2",
          "de:11000:900013103::2",
          "de:11000:900013102::2",
          "de:11000:900014101::2",
          "de:11000:900014102::2",
          "de:11000:900120004::1",
          "de:11000:900120004",
          "de:11000:900014102",
          "de:11000:900014101",
          "de:11000:900013102",
          "de:11000:900013103",
          "de:11000:900012103",
          "de:11000:900017104",
          "de:11000:900017103",
          "de:11000:900005201",
          "de:11000:900056102",
          "de:11000:900056101",
          "de:11000:900023203",
          "de:11000:900023301",
        },
        "trips": Set {
          "206291113",
        },
      }
    `)
  })

  it('filters out all', async () => {
    const sets = await filterGtfs({
      sourceDir: 'tests/gtfs/berlin-u-smaller',
      targetDir: 'tmpberlin',
      filters: [['agency', () => false]],
    })
    expect(sets).toMatchInlineSnapshot(`
      {
        "agency": Set {},
        "routes": Set {},
        "services": Set {},
        "shapes": Set {},
        "stops": Set {},
        "trips": Set {},
      }
    `)
  })
})

/*
example:

import { filterGtfs } from './filter-gtfs.js'

await filterGtfs({
  sourceDir: 'cities/berlin/dist/csv',
  // sourceDir: 'tests/gtfs/berlin-u',
  targetDir: 'tmpberlin',
  filters: {
    // agency: (a) => (['796'] as (string | undefined)[]).includes(a.agency_id),
    // @ts-ignore
    // routes: (r) => r.route_type === VehicleType.GENERIC_URBAN_RAIL,
    // @ts-ignore
    routes: (r) => r.route_type === '400',
    trips: (t, index) => index % 113 === 0,
  },
})
 */
