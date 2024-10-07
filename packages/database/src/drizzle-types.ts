import type { InferSelectModel } from 'drizzle-orm'

import type { Segment } from '@ubahnchen/gtfs'

import type * as drizzleTables from './drizzle/index'

export type DrizzleTypes = {
  [K in keyof typeof drizzleTables]: InferSelectModel<(typeof drizzleTables)[K]>
}

export type StopPairsSvgPaths = Omit<
  DrizzleTypes['stopPairsSvgPaths'],
  'segments'
> & { segments: Segment[] }
