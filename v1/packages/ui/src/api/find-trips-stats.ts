import { PrismaClient } from '@prisma/client'
import { SortOrder } from '../generated/client'
import { dayTripsIds } from './find-trips-ids'
import { tripsStats } from './trips-stats'

export const findTripsStats = async (
  gtfsDay: string,
): Promise<
  Record<
    string,
    {
      count: number
      minutes: Record<number, number>
      stops: Record<string, number>
    }
  >
> => {
  const tripIds = await dayTripsIds(gtfsDay)

  const prismaClient = new PrismaClient()
  const trips = await prismaClient.trips.findMany({
    select: {
      start_time: true,
      end_time: true,
      trip_id: true,
      routes: { select: { route_name: true } },
      stop_times: {
        orderBy: { arrival_time: SortOrder.asc },
        select: {
          stops: {
            select: { stop_id: true },
          },
        },
      },
    },
    where: {
      trip_id: {
        in: tripIds.trip_ids,
      },
    },
  })
  return tripsStats(trips)
}
