import { Stop } from 'gtfs-types'
import { GTFS_CSV_FILTERED_MODES } from '../data'
import { csvToArray } from '../csv/csv-to-array'

export const groupStops = async () => {
  const stops = await getStops(GTFS_CSV_FILTERED_MODES)
  const parentStopById: { [stopId: string]: Stop } = {}

  for (const stop of stops) {
    const parent = stop.parent_station
      ? stops.find((s) => s.stop_id === stop.parent_station)
      : stop
    if (!parent) throw new Error(`Could not find parent for: ${stop.stop_id}`)
    parentStopById[stop.stop_id] = parent
  }
  return parentStopById
}

const numberOr = <T>(
  v: string | undefined,
  convert: (vv: string) => T,
): T | undefined => (v === undefined || v === '' ? undefined : convert(v))

const numberOrUndef = (v: string | undefined) => numberOr(v, Number)

const rowToStop = (row: Record<string, string>): Stop => ({
  stop_id: row.stop_id,
  stop_code: row.stop_code,
  stop_name: row.stop_name,
  stop_desc: row.stop_desc,
  stop_lat: numberOrUndef(row.stop_lat),
  stop_lon: numberOrUndef(row.stop_lon),
  location_type: numberOrUndef(row.location_type),
  parent_station: row.parent_station,
  wheelchair_boarding: numberOrUndef(row.wheelchair_boarding),
  platform_code: row.platform_code,
  zone_id: row.zone_id,
})

export const getStops = (folder: string): Promise<Stop[]> =>
  csvToArray(`${folder}/stops.txt`, rowToStop)
