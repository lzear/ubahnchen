import fs from 'node:fs'

import { GtfsCopy } from './gtfs-copy'
import type { GtfsKeys, GtfsTypes } from './gtfs-iterator'

type FilterGtfsProps = {
  sourceDir: string
  targetDir: string
  filters: Partial<GtfsFilters>
}

type GtfsFilters = {
  [key in GtfsKeys]: (value: GtfsTypes[key], index: number) => boolean
}

export const filterGtfs = async (props: FilterGtfsProps) => {
  await fs.promises.mkdir(props.targetDir, { recursive: true })

  const { sourceDir, targetDir, filters } = props

  const filterEngine = new GtfsCopy({
    gtfsDirectory: sourceDir,
    targetDirectory: targetDir,
  })

  const agencyIds = new Set<string>()
  await filterEngine.getFilter('agency')?.((a, index) => {
    if (filters.agency?.(a, index) === false) return false
    if (a.agency_id) agencyIds.add(a.agency_id)
    return true
  })

  const routeIds = new Set<string>()
  await filterEngine.getFilter('routes')?.((r, index) => {
    if (r.agency_id && !agencyIds.has(r.agency_id)) return false
    if (filters.routes?.(r, index) === false) return false
    routeIds.add(r.route_id)
    return true
  })

  const tripIds = new Set<string>()
  const shapeIds = new Set<string>()
  const serviceIds = new Set<string>()
  await filterEngine.getFilter('trips')((t, index) => {
    if (!routeIds.has(t.route_id)) return false

    if (filters.trips?.(t, index) === false) return false
    tripIds.add(t.trip_id)
    serviceIds.add(t.service_id)
    if (t.shape_id) shapeIds.add(t.shape_id)
    return true
  })

  const stopIds = new Set<string>()
  await filterEngine.getFilter('stop_times')((st, index) => {
    if (!tripIds.has(st.trip_id)) return false
    if (filters.stop_times?.(st, index) === false) return false
    stopIds.add(st.stop_id)
    return true
  })

  await filterEngine.iterate('stops')(
    ({ row }) =>
      stopIds.has(row.stop_id) &&
      row.parent_station &&
      stopIds.add(row.parent_station),
  )

  await filterEngine.getFilter('stops')((s) => stopIds.has(s.stop_id))

  await filterEngine.getFilter('calendar')((c, index) => {
    if (filters.calendar?.(c, index) === false) return false
    return serviceIds.has(c.service_id)
  })

  await filterEngine.getFilter('calendar_dates')((cd, index) => {
    if (filters.calendar_dates?.(cd, index) === false) return false
    return serviceIds.has(cd.service_id)
  })

  await filterEngine.getFilter('shapes')((s, index) => {
    if (filters.shapes?.(s, index) === false) return false
    return shapeIds.has(s.shape_id)
  })

  return {
    agencyIds,
    routeIds,
    tripIds,
    shapeIds,
    serviceIds,
    stopIds,
  }
}
