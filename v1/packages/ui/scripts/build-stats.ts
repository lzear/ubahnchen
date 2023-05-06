#!/usr/bin/node

import 'reflect-metadata'

import process from 'node:process'
import path from 'node:path'
import { PrismaClient, routes, stops } from '@prisma/client'
import { SortOrder } from '../src/generated/client'
import { findTripsIds } from '../src/api/find-trips-ids'
import { tripsStats } from '../src/api/trips-stats'
import { eachDay2 } from '../src/api/each-day'
import { writeFile } from './file'

export const makeStats = async () => {
  const prismaClient = new PrismaClient()
  const tripIds = await findTripsIds()
  const trips = await prismaClient.trips.findMany({
    select: {
      trip_headsign: true,
      start_time: true,
      end_time: true,
      trip_id: true,
      routes: true,
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

  const tripsMap = new Map<
    number,
    {
      trip_headsign: string
      start_time: number
      end_time: number
      trip_id: number
      routes: routes
      stop_times: {
        arrival_time: number
        departure_time: number
        stops: stops
      }[]
    }
  >()

  for (const trip of trips) tripsMap.set(trip.trip_id, trip)

  const allTrips = tripIds
    .flatMap(({ trip_ids }) => trip_ids)
    .map((id) => {
      const sdf = tripsMap.get(id)
      if (!sdf) throw new Error('sdf')
      return sdf
    })
  const stats = tripsStats(allTrips)

  const days = await eachDay2()

  return {
    start: days[0],
    end: days.at(-1),
    dayCount: days.length,
    stats,
  }
}

const main = async () => {
  const stats = await makeStats()
  const STATS_JSON = path.resolve(process.cwd(), 'src/generated/stats.json')
  await writeFile(STATS_JSON, JSON.stringify(stats))
  process.exit(0)
}

main()
