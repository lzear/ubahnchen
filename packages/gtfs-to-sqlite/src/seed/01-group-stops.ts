import type { CsvStop } from '@ubahnchen/gtfs'
import { GtfsIterator } from '@ubahnchen/gtfs'
import { Singletons } from '@ubahnchen/utils'

const groupStops_ = async (gtfsDirectory: string) => {
  const gtfsIterator = new GtfsIterator(gtfsDirectory)
  const stopById = new Map<string, CsvStop>()
  await gtfsIterator.iterate('stops')(({ row }) =>
    stopById.set(row.stop_id, row),
  )

  const parentStopById = new Map<string, CsvStop>()

  for (const [stopId, stop] of stopById) {
    const parent = stop.parent_station
      ? stopById.get(stop.parent_station)
      : stop
    if (!parent) throw new Error(`Could not find parent for: ${stopId}`)
    if (parent.parent_station)
      throw new Error(`parent has parent: ${parent.stop_id} ${stopId}`)
    parentStopById.set(stopId, parent)
  }
  return parentStopById
}

const groupStopsSingleton = new Singletons(
  groupStops_,
  (gtfsDirectory) => gtfsDirectory,
)

export const groupStops = (gtfsDirectory: string) =>
  groupStopsSingleton.run(gtfsDirectory)
