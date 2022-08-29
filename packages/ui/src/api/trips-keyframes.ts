import _ from 'lodash'
import { truthy } from '../lib/non-nullish'
import routeNameById from '../../src/generated/routes.json'
import {
  getFrameDepartureTime,
  Keyframe2,
  Keyframe,
  KeyFrameStation,
  TripByHour,
  TripByHourStop,
} from '../lib/keyframe'
import { MapName } from '../lib/enums'
import { itineraries, SectionWithAbs } from '../lib/intineraries'

const findItinerary = (trip: TripByHour, mapName: MapName) => {
  const route_name = routeNameById[trip.route_id as keyof typeof routeNameById]
  if (!route_name) throw new Error(`Route not found ${trip.route_id}`)
  const route = itineraries[mapName].find((itinerary) => {
    if (itinerary.route_name !== route_name) return false
    const route_stop_ids = new Set(
      itinerary.sections.flatMap((section) =>
        section.stops.flatMap((stop) => stop.stop_id),
      ),
    )
    return trip.stops.every((trip_stop) =>
      route_stop_ids.has(trip_stop.stop_id),
    )
  })
  if (!route) throw new Error(`Route not found: ${trip.route_id} ${route_name}`)
  return route
}

type ItineraryPosition = {
  sectionIndex: number
  path: string
  offset: number
  absOffset: number
} & ({ type: 'STATION'; stop_id: string } | { type: 'JUNCTION' })

export const getItineraryPositions = (
  itinerary: Itinerary,
): ItineraryPosition[] => {
  const sections = itinerary.sections
  const itineraryPositions: ItineraryPosition[] = []

  for (const [sectionIndex, section] of sections.entries()) {
    for (const stop of section.stops) {
      const lastPosition = itineraryPositions.at(-1)
      const previousSection = sections[sectionIndex - 1]
      if (lastPosition && lastPosition.sectionIndex !== sectionIndex) {
        if (!previousSection) throw new Error('previousSection')
        itineraryPositions.push(
          {
            type: 'JUNCTION',
            sectionIndex: sectionIndex - 1,
            path: previousSection.path,
            offset: previousSection.end,
            absOffset: previousSection.absEnd,
          },
          {
            type: 'JUNCTION',
            sectionIndex,
            path: section.path,
            offset: section.start,
            absOffset: section.absStart,
          },
        )
      }
      itineraryPositions.push({
        type: 'STATION',
        ...stop,
        path: section.path,
        sectionIndex,
      })
    }
  }
  return itineraryPositions
}

export const isAsc = (array: number[]): boolean => {
  let previous = Number.NEGATIVE_INFINITY
  for (const n of array) {
    if (n < previous) return false
    previous = n
  }
  return true
}
export const isDesc = (array: number[]): boolean => {
  let previous = Number.POSITIVE_INFINITY
  for (const n of array) {
    if (n > previous) return false
    previous = n
  }
  return true
}

const getKeyFrames = (
  itineraryPositions: ItineraryPosition[],
  stops: TripByHourStop[],
): Keyframe[] => {
  const itineraryPositionsWithStationTimes = itineraryPositions
    .map((itineraryPosition) => {
      if (itineraryPosition.type === 'JUNCTION') return itineraryPosition

      const stopTime = stops.find(
        (stop) => stop.stop_id === itineraryPosition.stop_id,
      )
      if (!stopTime) return

      return {
        type: 'STATION' as const,
        stop_id: stopTime.stop_id,
        path: itineraryPosition.path,
        offset: itineraryPosition.offset,
        absOffset: itineraryPosition.absOffset,
        arrival_time: stopTime.arrival_time,
        departure_time: stopTime.departure_time,
      }
    })
    // eslint-disable-next-line unicorn/no-array-callback-reference
    .filter(truthy)

  const firstStation = itineraryPositionsWithStationTimes.find(
    (p) => p.type === 'STATION',
  )
  const lastStation = _.findLast(
    itineraryPositionsWithStationTimes,
    (p) => p.type === 'STATION',
  )

  if (
    firstStation?.type === 'STATION' &&
    lastStation?.type === 'STATION' &&
    firstStation.arrival_time >= lastStation.departure_time
  )
    itineraryPositionsWithStationTimes.reverse()

  const itineraryPositionsWithAllTimes = itineraryPositionsWithStationTimes
    .map((o, index) => {
      if (o.type === 'STATION') return o

      const station1 = _.findLast(
        itineraryPositionsWithStationTimes,
        (s) => s.type === 'STATION',
        index,
      )
      const station2 = _.find(
        itineraryPositionsWithStationTimes,
        (s) => s.type === 'STATION',
        index,
      )

      if (!station1 || !station2) return
      if (station1.type === 'JUNCTION' || station2.type === 'JUNCTION')
        throw new Error('kjsdhf')

      const absOffsetDiff = station2.absOffset - station1.absOffset
      if (absOffsetDiff === 0) throw new Error('absOffsetDiff')
      const time =
        station1.departure_time +
        ((station2.arrival_time - station1.departure_time) *
          (o.absOffset - station1.absOffset)) /
          absOffsetDiff

      return {
        ...o,
        arrival_time: time,
        departure_time: time,
      }
    })
    // eslint-disable-next-line unicorn/no-array-callback-reference
    .filter(truthy)

  return itineraryPositionsWithAllTimes.map((o) => {
    if (o.type === 'JUNCTION')
      return {
        arrival_time: o.arrival_time,
        path: o.path,
        offset: o.offset,
      }

    const s: KeyFrameStation = {
      stop_id: o.stop_id,
      arrival_time: o.arrival_time,
      path: o.path,
      offset: o.offset,
    }
    if (o.departure_time && o.departure_time !== o.arrival_time)
      s.departure_time = o.departure_time
    return s
  })
}

export const tripKeyFrames2 = (keyFrames: Keyframe[]): Keyframe2[] => {
  const keyframes2: Keyframe2[] = []
  for (const [index, frame1] of keyFrames.entries()) {
    if (frame1.departure_time)
      keyframes2.push({
        path: frame1.path,
        time1: frame1.arrival_time,
        time2: frame1.departure_time,
        offset1: frame1.offset,
        offset2: frame1.offset,
      })

    if (index === keyFrames.length - 1) break
    const frame2 = keyFrames[index + 1]
    if (!frame2) throw new Error('frame2')
    if (frame1.path !== frame2.path) continue

    const departure = getFrameDepartureTime(frame1)
    if (departure < frame2.arrival_time)
      keyframes2.push({
        path: frame1.path,
        time1: departure,
        time2: frame2.arrival_time,
        offset1: frame1.offset,
        offset2: frame2.offset,
      })
  }

  const frame1 = keyframes2.at(0)
  const frame2 = keyframes2.at(1)
  const frameY = keyframes2.at(-2)
  const frameZ = keyframes2.at(-1)

  if (frame1 && frame2 && isVerySmallFrame(frame1)) {
    frame2.time1 === frame1.time1
    keyframes2.shift()
  }
  if (frameZ && frameY && isVerySmallFrame(frameZ)) {
    frameY.time2 === frameZ.time2
    keyframes2.pop()
  }
  return keyframes2
}

const isVerySmallFrame = (frame: Keyframe2) =>
  Math.abs(frame.offset1 - frame.offset2) < 3

const getKeyFramesNoJunctions = (
  itineraryPositions: ItineraryPosition[],
  stops: TripByHourStop[],
): Keyframe[] =>
  stops.map((stop): Keyframe => {
    const o = itineraryPositions.find(
      (p) => p.type === 'STATION' && p.stop_id === stop.stop_id,
    )
    if (!o) throw new Error('FOUFHO')
    const base = {
      stop_id: stop.stop_id,
      path: o.path,
      offset: o.offset,
    }
    return stop.arrival_time === stop.departure_time
      ? { ...base, arrival_time: stop.arrival_time }
      : {
          ...base,
          arrival_time: stop.arrival_time,
          departure_time: stop.departure_time,
        }
  })

const getKeyFramesRingbahn = (
  section: SectionWithAbs,
  stops: TripByHourStop[],
): Keyframe[] => {
  let previousStop:
    | {
        arrival_time: number
        offset: number
        stop_id: string
        stop_idx: number
        departure_time: number
        absOffset: number
      }
    | undefined
  return stops.flatMap((stop): Keyframe[] => {
    const o = section.stops.find((p) => p.stop_id === stop.stop_id)
    if (!o) throw new Error('FOUFHO')
    const thisStop: KeyFrameStation = {
      stop_id: stop.stop_id,
      path: section.path,
      offset: o.offset,
      arrival_time: stop.arrival_time,
    }
    if (stop.arrival_time !== stop.departure_time) {
      thisStop.departure_time = stop.departure_time
    }

    if (previousStop && Math.abs(o.offset - previousStop.offset) > 1000) {
      const isWay1 = previousStop.offset < o.offset
      const duration = stop.arrival_time - previousStop.departure_time
      const d1 = isWay1
        ? previousStop.offset
        : section.end - previousStop.offset
      const d2 = isWay1 ? section.end - o.offset : o.offset
      const time = previousStop.departure_time + (duration * d1) / (d1 + d2)

      previousStop = {
        ...o,
        ...stop,
      }
      return [
        {
          path: section.path,
          offset: isWay1 ? 0 : section.end,
          arrival_time: time,
        },
        {
          path: section.path,
          offset: !isWay1 ? 0 : section.end,
          arrival_time: time,
        },
        thisStop,
      ]
    }

    previousStop = {
      ...o,
      ...stop,
    }
    return [thisStop]
  })
}
type Itinerary = {
  sections: SectionWithAbs[]
}
export const tripKeyFrames = (
  trip: TripByHour,
  mapName: MapName,
): Keyframe[] => {
  const itinerary = findItinerary(trip, mapName)
  if (itinerary.id === 'S41' || itinerary.id === 'S42') {
    const firstSection = itinerary.sections[0]
    if (!firstSection || itinerary.sections.length !== 1)
      throw new Error('wefkn')
    return getKeyFramesRingbahn(firstSection, trip.stops)
  }

  const itineraryPositions = getItineraryPositions(itinerary)
  if (itinerary.sections.length < 2)
    return getKeyFramesNoJunctions(itineraryPositions, trip.stops)
  return getKeyFrames(itineraryPositions, trip.stops)
}
