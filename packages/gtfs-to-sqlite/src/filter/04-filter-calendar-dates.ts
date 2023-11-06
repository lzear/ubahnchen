import { inArray } from 'drizzle-orm'
import _ from 'lodash'

import { drizzleTables } from '@ubahnchen/database'

import type { SourceTarget } from './types.js'

export const filterCalendarDates = ({ source, target }: SourceTarget) => {
  const { calendarDates, trips } = drizzleTables
  const validTrips = target.drizzled.select().from(trips).all()
  const validServiceIds = _.uniq(validTrips.map((t) => t.service_id))
  const calendarDatesToTake = source.drizzled
    .select()
    .from(calendarDates)
    .where(inArray(calendarDates.service_id, validServiceIds))
    .all()
  const chunks = _.chunk(calendarDatesToTake, 1000)
  for (const chunk of chunks) {
    target.drizzled.insert(calendarDates).values(chunk).run()
  }
}
