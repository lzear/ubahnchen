import type { DefaultOptions } from './00-seed.js'

export const makeIndexes = ({ database }: DefaultOptions) => {
  database.exec(
    `CREATE INDEX idx_trip_id
    ON stop_times (trip_id);`,
  )
  database.exec(
    `CREATE INDEX idx_arrival_time
    ON stop_times (arrival_time);`,
  )
  database.exec(
    `CREATE INDEX idx_departure_time
    ON stop_times (departure_time);`,
  )
}
