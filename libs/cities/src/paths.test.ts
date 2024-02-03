import { P } from './paths'

describe(P, () => {
  it('base', () => {
    const str = JSON.stringify(P())
    const relative = JSON.parse(str.replaceAll(P.PROJECT_ROOT, '')) as Record<
      string,
      unknown
    >
    expect(relative).toStrictEqual({
      BUILD_DIR: '/build',
      PROJECT_ROOT: '',
      PUBLIC_DIR: '/apps/ubahnchen/public',
      SRC_DATA_DIR: '/libs/cities/src/data',
    })
  })
  it('no call', () => {
    const properties: Record<string, unknown> = {}
    for (const [k, v] of Object.entries(P)) properties[k] = v
    expect(properties).toStrictEqual(P())
  })
  it('city', () => {
    const str = JSON.stringify(P('berlin'))
    const relative = JSON.parse(str.replaceAll(P.PROJECT_ROOT, '')) as Record<
      string,
      unknown
    >
    expect(relative).toStrictEqual({
      BUILD: {
        DIR: '/build/berlin',
      },
      GTFS: {
        CSV: {
          DIR: '/build/berlin/gtfs/csv',
        },
        ZIP: '/build/berlin/gtfs/zip/gtfs.zip',
      },
      PUBLIC: {
        DIR: '/apps/ubahnchen/public/berlin',
      },
      SQLITE: {
        BIG: '/build/berlin/gtfs/gtfs.big.sqlite',
        SMALL: '/build/berlin/gtfs/gtfs.small.sqlite',
      },
      SRC_DATA: {
        DIR: '/libs/cities/src/data/berlin',
      },
    })
  })
  it('map', () => {
    const str = JSON.stringify(P('berlin', 'u'))
    const relative = JSON.parse(str.replaceAll(P.PROJECT_ROOT, '')) as Record<
      string,
      unknown
    >
    expect(relative).toStrictEqual({
      BUILD: {
        DIR: '/build/berlin/maps/u',
      },
      PUBLIC: {
        SVG: {
          ANNOTED_10: '/apps/ubahnchen/public/berlin/u/svg/10-annoted.svg',
          DIR: '/apps/ubahnchen/public/berlin/u/svg',
          INITIAL_00: '/apps/ubahnchen/public/berlin/u/svg/00-original.svg',
          MINIMAL_20: '/apps/ubahnchen/public/berlin/u/svg/20-minimal.svg',
        },
      },
      SRC: {
        SVG: {
          ANNOTED_10: '/libs/cities/src/data/berlin/u/svg/10-annoted.svg',
          DIR: '/libs/cities/src/data/berlin/u/svg',
          INITIAL_00: '/libs/cities/src/data/berlin/u/svg/00-original.svg',
          MINIMAL_20: '/libs/cities/src/data/berlin/u/svg/20-minimal.svg',
        },
      },
    })
  })
})
