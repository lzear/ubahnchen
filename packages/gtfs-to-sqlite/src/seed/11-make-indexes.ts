import { oraPromise } from 'ora'

import type { DefaultOptions } from './00-seed'

export const makeIndexes = async ({ database }: DefaultOptions) => {
  return oraPromise(async () => {
    await database.exec(
      `CREATE INDEX idx_trip_id
    ON stop_times (trip_id);`,
    )
    await database.exec(
      `CREATE INDEX idx_arrival_time
    ON stop_times (arrival_time);`,
    )
    await database.exec(
      `CREATE INDEX idx_departure_time
    ON stop_times (departure_time);`,
    )
  }, 'Build DB indexes')
}
