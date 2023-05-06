import type { Row } from '@ubahnchen/csv-helpers'

export type WorkerData = {
  databasePath: string
  prepare: string
  foreignKeys?: boolean
}

export const Messages = {
  INSERT: 'INSERT',
  END1: 'END1',
  END2: 'END2',
} as const

export type InsertAction = {
  type: typeof Messages.INSERT
  records: Record<string, unknown>[]
}
export type End1Action = {
  type: typeof Messages.END1
  count: number
}
export type End2Action = {
  type: typeof Messages.END2
}

export const Insert = <T extends Row>(records: T[]): InsertAction => ({
  type: Messages.INSERT,
  records,
})
export const End1 = (count: number): End1Action => ({
  type: Messages.END1,
  count,
})

export const End2 = (): End2Action => ({
  type: Messages.END2,
})
