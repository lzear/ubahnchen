import _ from 'lodash'
import { MapName } from '../../lib/enums'
import { itineraries } from '../../lib/intineraries'
import type { Ani } from '../../lib/radar'
import type { Keyframe2, KeyframeAbs } from '../../lib/keyframe'
import { absFramesToFrames } from '../abs-frames-to-frames'

export const hafasAbsFrames = (
  ani: Ani,
  routeName: string,
  mapName: MapName,
  // now = Date.now(),
): KeyframeAbs[] =>
  _.zip(ani.mSec, ani.proc, ani.fromLocations, ani.toLocations).map(
    ([mSec, proc, fromLocation, toLocation]) => {
      if (
        mSec === undefined ||
        proc === undefined ||
        fromLocation === undefined ||
        toLocation === undefined
      ) {
        throw new Error('??')
      }

      const itinerary = findItinerary(mapName, routeName, [
        fromLocation.stationDHID,
        toLocation.stationDHID,
      ])

      const stopFrom = itinerary.sections
        .flatMap((s) => s.stops)
        .find((s) => s.stop_id === fromLocation.stationDHID)

      if (!stopFrom) throw new Error('Missing absOffsetFrom')
      const sectionFrom = itinerary.sections.find(
        (s) =>
          s.absStart <= stopFrom.absOffset && stopFrom.absOffset <= s.absEnd,
      )
      if (!sectionFrom) throw new Error('Missing absOffsetTo absOffsetFrom')

      if (fromLocation.stationDHID === toLocation.stationDHID || proc === 0)
        return {
          itinerary,
          absOffset: stopFrom.absOffset,
          time: mSec,
        }

      const stopTo = itinerary.sections
        .flatMap((s) => s.stops)
        .find((s) => s.stop_id === toLocation.stationDHID)

      if (!stopTo) throw new Error('Missing absOffsetTo')

      if (proc === 100) {
        const sectionTo = itinerary.sections.find(
          (s) => s.absStart <= stopTo.absOffset && stopTo.absOffset <= s.absEnd,
        )
        if (!sectionTo) throw new Error('Missing sectionTo')
        return {
          itinerary,
          absOffset: stopTo.absOffset,
          time: mSec,
        }
      }

      const absOffset =
        (stopFrom.absOffset * (100 - proc) + stopTo.absOffset * proc) / 100

      return {
        itinerary,
        absOffset,
        time: mSec,
      }
    },
  )

const findItinerary = (
  mapName: MapName,
  route_name: string,
  stopIds: string[],
) => {
  const itinerary = itineraries[mapName].find((itinerary) => {
    if (itinerary.route_name !== route_name) return false
    const itinerary_stop_ids = new Set(
      itinerary.sections.flatMap((section) =>
        section.stops.flatMap((stop) => stop.stop_id),
      ),
    )
    return stopIds.every((stopId) => itinerary_stop_ids.has(stopId))
  })
  if (!itinerary) throw new Error(`Route not found: ${route_name}`)
  return itinerary
}

export const aniToFrames = (
  ani: Ani,
  routeName: string,
  mapName: MapName,
  // now = Date.now(),
):
  | { keyframes: Keyframe2[]; hasError: false }
  | { message: string; hasError: true } => {
  try {
    const absFrames = hafasAbsFrames(ani, routeName, mapName)
    const keyframes = absFramesToFrames(absFrames)
    return { keyframes, hasError: false }
  } catch (error) {
    return { hasError: true, message: (error as Error).message }
  }
}
