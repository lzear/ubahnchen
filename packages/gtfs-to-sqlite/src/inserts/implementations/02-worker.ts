import { parentPort, workerData } from 'node:worker_threads'

import type BetterSqlite3 from 'better-sqlite3'

import { getDatabase } from '@ubahnchen/database'

import type { End1Action, InsertAction, WorkerData } from './02-worker-types.js'
import { Messages } from './02-worker-types.js'

class Peon {
  private count = 0
  private endAtCount: false | number = false
  private readonly insertMany: BetterSqlite3.Transaction

  constructor(workerData: WorkerData) {
    const { database } = getDatabase(workerData.databasePath)
    const statement = database.prepare(workerData.prepare)

    if (workerData.foreignKeys === false) database.pragma('foreign_keys = OFF')

    database.pragma('foreign_keys = OFF')
    database.pragma('synchronous = OFF')
    database.pragma('journal_mode = OFF')

    this.insertMany = database.transaction((records) => {
      for (const r of records) statement.run(r)
    })

    parentPort?.on('message', (message: End1Action | InsertAction) => {
      if (message.type === Messages.INSERT) {
        this.count += message.records.length
        this.insertMany(message.records)
      }
      if (message.type === Messages.END1) {
        this.endAtCount = message.count
      }

      if (this.endAtCount !== false && this.count === this.endAtCount) {
        if (workerData.foreignKeys === false)
          database.pragma('foreign_keys = ON')
        parentPort?.postMessage({ type: Messages.END2 })
      }
    })
  }
}

new Peon(workerData as WorkerData)
