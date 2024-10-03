import fs from 'node:fs'

import { GtfsCopy } from './gtfs-copy'
import type { GtfsCsvTypes } from './gtfs-csv-types'
import type { GtfsKeys } from './gtfs-iterator'
import { getValue } from './gtfs-iterator'

export type FilterGtfsProps = {
  sourceDir: string
  targetDir: string
  filters: [
    key: GtfsKeys,
    filter: (value: GtfsCsvTypes[GtfsKeys], index: number) => boolean,
  ][]
}

type TT = <K extends GtfsKeys>(
  key: K,
  filter: (value: GtfsCsvTypes[K], index: number) => boolean,
) => [K, (value: GtfsCsvTypes[K], index: number) => boolean]
export const gtfsFilter: TT = <K extends GtfsKeys>(
  key: K,
  filter: (value: GtfsCsvTypes[K], index: number) => boolean,
) => [key, filter]

export const gtfsIndexes = {
  agency: 'agency_id',
  routes: 'route_id',
  trips: 'trip_id',
  services: 'service_id',
  shapes: 'shape_id',
  stops: 'stop_id',
} as const

type IndexNames = keyof typeof gtfsIndexes
export type IndexFields = (typeof gtfsIndexes)[IndexNames]

type FinalSets = Record<IndexNames, Set<string> | undefined>

const indexes: {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  [K in GtfsKeys]: IndexNames[]
} = {
  agency: ['agency'],
  routes: ['agency', 'routes'],
  trips: ['routes', 'trips', 'services', 'shapes'],
  shapes: ['shapes'],
  stops: ['stops'],
  stop_times: ['trips', 'stops'],
  calendar_dates: ['services'],
  calendar: ['services'],
}

const filesToFilter: GtfsKeys[] = [
  'agency',
  'routes',
  'trips',
  'stop_times',
  'stops',
  'calendar',
  'calendar_dates',
  'shapes',
]

const addStopsParents = async ({
  gtfsCopy,
  finalSets,
  filter,
}: {
  filter: (value: GtfsCsvTypes['stops'], index: number) => boolean
  finalSets: FinalSets
  gtfsCopy: GtfsCopy
}) => {
  let index = 0
  const stopsSet = new Set(finalSets.stops)

  await gtfsCopy.iterate('stops')(({ row }) => {
    if (finalSets.stops && !finalSets.stops.has(row.stop_id)) return

    const r = filter(row, index)
    index++
    if (!r) return

    stopsSet.add(row.stop_id)
    if (row.parent_station) stopsSet.add(row.parent_station)
  })

  return stopsSet
}

const filterOneFile = async <K extends GtfsKeys>({
  key,
  filter,
  finalSets: _finalSets,
  gtfsCopy,
}: {
  key: K
  filter: (value: GtfsCsvTypes[K], index: number) => boolean
  finalSets: FinalSets
  gtfsCopy: GtfsCopy
}) => {
  const finalSets = { ..._finalSets }

  if (key === 'stops') {
    finalSets.stops = await addStopsParents({
      gtfsCopy,
      finalSets,
      // @ts-expect-error
      filter,
    })
  }

  const ri = indexes[key]
  const consume: IndexNames[] = ri.filter((index) => finalSets[index])
  const produce: IndexNames[] = ri.filter((index) => !finalSets[index])

  for (const name of produce) finalSets[name] = new Set<string>()

  let index = 0
  await gtfsCopy.getFilter(key)((v, _index) => {
    for (const name of consume) {
      const field: IndexFields = gtfsIndexes[name]
      const vvv = getValue(v, field)
      const thisSet = finalSets[name]
      if (!thisSet) continue
      if (!vvv || !thisSet.has(vvv)) return false
    }

    const rr = filter(v, index)
    index++
    if (!rr) return false

    for (const name of produce) {
      const field = gtfsIndexes[name]
      const vvv = getValue(v, field)
      if (vvv) finalSets[name]?.add(vvv)
    }

    return true
  })

  return finalSets
}

export const filterGtfs = async (props: FilterGtfsProps) => {
  const { sourceDir, targetDir, filters } = props
  await fs.promises.mkdir(targetDir, { recursive: true })
  const gtfsCopy = new GtfsCopy({
    gtfsDirectory: sourceDir,
    targetDirectory: targetDir,
  })

  let finalSets: FinalSets = {
    agency: undefined,
    routes: undefined,
    services: undefined,
    shapes: undefined,
    stops: undefined,
    trips: undefined,
  }

  let remainingFiles = filesToFilter

  for (const [key, filter] of filters) {
    // const { key, f: filter } = ff()
    remainingFiles = remainingFiles.filter((f) => f !== key)
    finalSets = await filterOneFile({ key, filter, finalSets, gtfsCopy })
  }

  while (remainingFiles.length > 0) {
    const canBeFiltered = remainingFiles.find((f) =>
      indexes[f].every((index) => index in finalSets),
    )
    const filtering = canBeFiltered
    if (!filtering) throw new Error('Cannot filter GTFS')

    finalSets = await filterOneFile({
      key: filtering,
      filter: () => true,
      finalSets,
      gtfsCopy,
    })

    remainingFiles = remainingFiles.filter((f) => f !== filtering)
  }

  return finalSets
}
