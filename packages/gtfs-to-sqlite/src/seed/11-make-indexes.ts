import type { DefaultOptions } from './00-seed'

export const makeIndexes = ({ database }: DefaultOptions) => {
  console.log('🦺 antoinelog Build DB indexes')

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
