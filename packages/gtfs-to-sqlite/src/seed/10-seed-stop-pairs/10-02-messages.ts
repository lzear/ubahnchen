export type WorkerData = {
  gtfsDirectory: string
  databasePath: string
}

export const Messages = {
  LOG: 'LOG',
  END1: 'END1',
  ROUTES_COUNT: 'ROUTES_COUNT',
} as const

export type RoutesCountAction = {
  type: typeof Messages.ROUTES_COUNT
  count: number
}

export type LogAction = {
  type: typeof Messages.LOG
  message: string
}

export type End1Action = {
  type: typeof Messages.END1
}

export const Log = (message: string): LogAction => ({
  type: Messages.LOG,
  message,
})
export const RoutesCount = (count: number): RoutesCountAction => ({
  type: Messages.ROUTES_COUNT,
  count,
})

export const End1 = (): End1Action => ({
  type: Messages.END1,
})

export type MessagesTypes = LogAction | End1Action
