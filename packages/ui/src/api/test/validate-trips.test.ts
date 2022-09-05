import 'reflect-metadata'

import { PrismaClient } from '@prisma/client'
import { SortOrder } from '../../generated/client'
import { rowToTripByHourRow } from '../find-trips-hour'
import { isAsc, isDesc, tripKeyFrames } from '../trips-keyframes'
import { truthy } from '../../lib/non-nullish'
import { Keyframe, TripByHourRow } from '../../lib/keyframe'
import { MapName } from '../../lib/enums'
import routeNamesByRouteId from '../../generated/routes.json'

const PAGE_SIZE = 1000

const day = '2022-06-26'

const MAX_SPEED = {
  [MapName.SU]: 1.01,
  [MapName.U]: 1.4,
}

export const checkKeyframes = (keyframes: Keyframe[], mapName: MapName) => {
  let previous: Keyframe | undefined
  for (const keyframe of keyframes) {
    // check no big gaps
    if (
      previous &&
      previous.path === keyframe.path &&
      previous.arrival_time !== keyframe.arrival_time &&
      Math.abs(keyframe.offset - previous.offset) > 500
    ) {
      throw new Error('keyframe.offset - previous.offset > 500')
    }
    // check no jumps with diff time
    if (
      previous &&
      previous.path !== keyframe.path &&
      previous.arrival_time !== keyframe.arrival_time
    ) {
      throw new Error(
        `previous.path !== keyframe.path && previous.time !== keyframe.time &&`,
      )
    }
    // check time order
    if (previous) {
      const duration = keyframe.arrival_time - previous.arrival_time
      if (duration < 0) throw new Error('Order??')
    }
    // check no speeding
    if (previous && previous.path === keyframe.path) {
      const pdeparture_time =
        'departure_time' in previous && previous.departure_time
      const duration =
        keyframe.arrival_time - (pdeparture_time || previous.arrival_time)
      if (duration > 0) {
        const speed = Math.abs(keyframe.offset - previous.offset) / duration
        if (speed > MAX_SPEED[mapName]) {
          // Normal speeds are around 0.7
          throw new Error(`speed ${speed}`)
        }
      }
    }
    previous = keyframe
  }
}

describe('validateTrips', () => {
  jest.setTimeout(100_000)
  it.each([MapName.U, MapName.SU])('%p', async (mapName) => {
    const prismaClient = new PrismaClient()

    const tripCounts = await prismaClient.trips.count()

    let tripsLength
    let tripsCursor = 0
    do {
      const trips = await prismaClient.trips.findMany({
        take: PAGE_SIZE,
        skip: tripsCursor,
        select: {
          service_id: true,
          route_id: true,
          trip_headsign: true,
          start_time: true,
          end_time: true,
          trip_id: true,
          stop_times: {
            orderBy: { arrival_time: SortOrder.asc },
            select: {
              arrival_time: true,
              departure_time: true,
              stops: true,
            },
          },
        },
      })

      tripsLength = trips.length
      tripsCursor += tripsLength
      for (const trip of trips) {
        const routeName = (routeNamesByRouteId as Record<string, string>)[
          trip.route_id
        ]
        if (!routeName)
          throw new Error(`routeName not found for: ${trip.route_id}`)
        if (mapName === MapName.U && !routeName.startsWith('U')) continue
        const tripStops: TripByHourRow[] = trip.stop_times.map((stopTime) => {
          const { stop_times, ...rest } = trip
          const { stops, ...restStopTime } = stopTime
          return {
            ...rest,
            ...restStopTime,
            ...stops,
          }
        })
        const tripByHour = rowToTripByHourRow({ day, tripStops })

        const keyFrames = tripKeyFrames(tripByHour, mapName)

        const tripsStopIds = tripByHour.stops.map((s) => s.stop_id)
        const keyFramesStopIds = keyFrames
          .map((s) => 'stop_id' in s && s.stop_id)
          // eslint-disable-next-line unicorn/no-array-callback-reference
          .filter(truthy)

        expect(JSON.stringify(keyFramesStopIds)).toBe(
          JSON.stringify(tripsStopIds),
        )

        const times = keyFrames.flatMap((f) =>
          'departure_time' in f && f.departure_time
            ? [f.arrival_time, f.departure_time]
            : [f.arrival_time],
        )

        checkKeyframes(keyFrames, mapName)

        expect(isAsc(times) || isDesc(times)).toBeTruthy()
      }
    } while (tripsLength > 0)

    expect(tripsCursor).toBe(tripCounts)
  })
})
