import type { DrizzleTypes } from '@ubahnchen/database'

export type RoutesDao = Pick<
  DrizzleTypes['routes'],
  'route_id' | 'route_name' | 'route_type'
>
