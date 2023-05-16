/* eslint-disable @typescript-eslint/no-explicit-any */
export type Pusher<T extends Record<string, any>> = (row: T) => void

export type InsertOptions<R, T extends Record<string, any>> = {
  databasePath: string
  prepare: string
  run: (pusher: Pusher<T>) => Promise<R> | R
  perfId?: string
  foreignKeys?: boolean
}

export type Inserter = <R, T extends Record<string, any>>(
  insertOptions: InsertOptions<R, T>,
) => Promise<R>
