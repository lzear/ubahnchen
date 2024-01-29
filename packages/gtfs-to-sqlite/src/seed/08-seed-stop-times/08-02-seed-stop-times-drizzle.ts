import { drizzleTables } from '@ubahnchen/database'
import { chunkify } from '@ubahnchen/utils'

import type { DefaultOptions } from '../00-seed'

import { runStopTimes } from './08-01-seed-stop-times'

const { stopTimes } = drizzleTables

type StopTimePayload = {
  arrival_time: number
  departure_time: number
  stop_id: string
  trip_id: string
  stop_sequence: number
}

export const seedStopTimes = async ({
  gtfsIterator,
  database,
  drizzled,
}: DefaultOptions): Promise<{
  tripStartEnd: Map<string, { start: number; end: number }>
}> =>
  chunkify(
    (v: StopTimePayload[]) => drizzled.insert(stopTimes).values(v),
    runStopTimes({ gtfsIterator, database }),
    20,
  )
