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
          DIR: '/apps/ubahnchen/public/berlin/u/svg',
          STEP_00_ORIGINAL:
            '/apps/ubahnchen/public/berlin/u/svg/00-original.svg',
          STEP_10_SIMPLIFIED:
            '/apps/ubahnchen/public/berlin/u/svg/10-simplified.svg',
          STEP_20_ANNOTATED:
            '/apps/ubahnchen/public/berlin/u/svg/20-annotated.svg',
          STEP_30_JUST_LINES_N_STATIONS:
            '/apps/ubahnchen/public/berlin/u/svg/30-just-lines-and-stations.svg',
          STEP_31_JUST_LINES:
            '/apps/ubahnchen/public/berlin/u/svg/31-just-lines.svg',
          STEP_32_JUST_STATIONS:
            '/apps/ubahnchen/public/berlin/u/svg/32-just-stations.svg',
        },
      },
      SRC: {
        SVG: {
          DIR: '/libs/cities/src/data/berlin/u/svg',
          STEP_00_ORIGINAL:
            '/libs/cities/src/data/berlin/u/svg/00-original.svg',
          STEP_10_SIMPLIFIED:
            '/libs/cities/src/data/berlin/u/svg/10-simplified.svg',
          STEP_20_ANNOTATED:
            '/libs/cities/src/data/berlin/u/svg/20-annotated.svg',
          STEP_30_JUST_LINES_N_STATIONS:
            '/libs/cities/src/data/berlin/u/svg/30-just-lines-and-stations.svg',
          STEP_31_JUST_LINES:
            '/libs/cities/src/data/berlin/u/svg/31-just-lines.svg',
          STEP_32_JUST_STATIONS:
            '/libs/cities/src/data/berlin/u/svg/32-just-stations.svg',
        },
      },
    })
  })
})
