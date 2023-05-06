import path from 'node:path'
import url from 'node:url'
import { Worker } from 'node:worker_threads'

import type { Ora } from 'ora'
import ora, { oraPromise } from 'ora'

import { getDatabase } from '@ubahnchen/db'

type MapPairs = Map<string, number>
const separator = '{-*'

export const seedStopPairs = async (city: string) => {
  const database = getDatabase(city)
  const stopTimesCountQuery = await database.prepare(
    'SELECT COUNT(*) FROM stop_times',
  )
  const stopTimesCount: number = stopTimesCountQuery.get()['COUNT(*)']
  database.exec(`DELETE FROM stop_pairs`)

  const d = path.dirname(url.fileURLToPath(import.meta.url))

  const waitForPairMap = async (spinner: Ora): Promise<MapPairs> =>
    new Promise((resolve) => {
      const worker = new Worker(`${d}/10-worker-class.ts`, {
        workerData: { city, separator, stopTimesCount },
      })
      worker
        .on(
          'message',
          (message: MessageProgress | MessageDone<MapPairs> | MessageError) => {
            if (message.type === Message.Done) return resolve(message.data)
            if (message.type === Message.Progress)
              return (spinner.text = `seed stop_pairs 1 ${(
                message.ratio * 100
              ).toFixed(2)}%`)
            if (message.type === Message.Error) throw new Error(message.message)
            throw new Error(String(message))
          },
        )
        .on('error', (error_) => {
          console.error(error_)
          throw new Error(`worker errored with ${error_}`)
        })
        .on('exit', (code) => {
          if (code !== 0) {
            console.error(`worker exited with code ${code}`)
            throw new Error(`worker exited with code ${code}`)
          }
        })
    })

  const pairMap = await oraPromise(waitForPairMap, {
    successText: 'seed stop_pairs 1',
  })

  const spinner = ora('seed stop_pairs 2').start()

  const w = new WorkerMaster<{
    stop_id_1: string
    stop_id_2: string
    route_name: string
    is_one_way: 0 | 1
    count: number
  }>({
    city,
    prepare: `
    INSERT INTO stop_pairs
        ( stop_id_1, stop_id_2, route_name, is_one_way, count)
    VALUES
        (@stop_id_1,@stop_id_2,@route_name,@is_one_way, @count)
  `,
  })
  let idenx2 = 0
  for (const [key, count] of pairMap) {
    idenx2++
    if (idenx2 % 1000 === 0)
      spinner.text = `seed stop_pairs 2 ${(idenx2 / stopTimesCount).toFixed(
        2,
      )}%`

    const [route_name, stop_id_1, stop_id_2] = key.split(separator)

    w.push({
      stop_id_1,
      stop_id_2,
      route_name,
      count,
      is_one_way: 0,
    })
  }
  spinner.text = `seed stop_pairs 2 100...`
  await w.finish()
  spinner.succeed('seed stop_pairs 2')
}
