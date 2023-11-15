import { inArray } from 'drizzle-orm'

import { drizzleTables } from '@ubahnchen/database'

import type { SourceTarget } from './types'

export type Options = {
  sourceDatabasePath: string
  targetDatabasePath: string
}

export const filterRoutes = ({ source, target }: SourceTarget) => {
  const { routes } = drizzleTables
  const routesToTake = source.drizzled
    .select()
    .from(routes)
    .where(inArray(routes.route_type, [109, 400]))
    .all()
  return target.drizzled.insert(routes).values(routesToTake).run()
}
