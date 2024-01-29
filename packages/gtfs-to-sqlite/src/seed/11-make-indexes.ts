import { oraPromise } from 'ora'

import { defaultTextPerf, successText } from '@ubahnchen/csv'
import { Perf, wait } from '@ubahnchen/utils'

import type { DefaultOptions } from './00-seed'

const text = 'indexes'.padEnd(14)

export const makeIndexes = async ({ database }: DefaultOptions) => {
  const perf = new Perf({ totalCount: 3 })
  return oraPromise(
    async (ora) => {
      const tick = async () => {
        perf.tick(1)
        ora.text = defaultTextPerf({ ora: { text }, perf })
        await wait(0)
      }
      perf.go()
      database.exec(
        `CREATE INDEX idx_arrival_time ON stop_times (arrival_time);`,
      )
      await tick()
      database.exec(`CREATE INDEX idx_trip_id ON stop_times (trip_id);`)
      await tick()
      database.exec(
        `CREATE INDEX idx_departure_time ON stop_times (departure_time);`,
      )
      await tick()
    },
    { successText: () => successText({ perf, ora: { text } }), text },
  )
}
