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
          STEP_01_FIGMAED:
            '/apps/ubahnchen/public/berlin/u/svg/01-simplified-via-figma.svg',
          STEP_02_SVGOMGED:
            '/apps/ubahnchen/public/berlin/u/svg/02-simplified-via-svgomg.svg',
          STEP_10_ANNOTATED:
            '/apps/ubahnchen/public/berlin/u/svg/10-annotated.svg',
          STEP_11_LINES_STATIONS:
            '/apps/ubahnchen/public/berlin/u/svg/11-lines-stations.svg',
          STEP_12_SPLIT_PATHS:
            '/apps/ubahnchen/public/berlin/u/svg/12-split-paths.svg',
          STEP_20_LINES_ONLY:
            '/apps/ubahnchen/public/berlin/u/svg/20-lines-only.svg',
          STEP_21_LINES_MERGED:
            '/apps/ubahnchen/public/berlin/u/svg/21-lines-merged.svg',
        },
      },
      SRC: {
        SVG: {
          DIR: '/libs/cities/src/data/berlin/u/svg',
          STEP_00_ORIGINAL:
            '/libs/cities/src/data/berlin/u/svg/00-original.svg',
          STEP_01_FIGMAED:
            '/libs/cities/src/data/berlin/u/svg/01-simplified-via-figma.svg',
          STEP_02_SVGOMGED:
            '/libs/cities/src/data/berlin/u/svg/02-simplified-via-svgomg.svg',
          STEP_10_ANNOTATED:
            '/libs/cities/src/data/berlin/u/svg/10-annotated.svg',
          STEP_11_LINES_STATIONS:
            '/libs/cities/src/data/berlin/u/svg/11-lines-stations.svg',
          STEP_12_SPLIT_PATHS:
            '/libs/cities/src/data/berlin/u/svg/12-split-paths.svg',
          STEP_20_LINES_ONLY:
            '/libs/cities/src/data/berlin/u/svg/20-lines-only.svg',
          STEP_21_LINES_MERGED:
            '/libs/cities/src/data/berlin/u/svg/21-lines-merged.svg',
        },
      },
    })
  })
})
