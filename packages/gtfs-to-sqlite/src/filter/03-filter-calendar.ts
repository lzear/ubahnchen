import { inArray } from 'drizzle-orm'
import _ from 'lodash'

import { drizzleTables } from '@ubahnchen/database'

import type { SourceTarget } from './types.js'

export const filterCalendar = ({ source, target }: SourceTarget) => {
  const { calendar, trips } = drizzleTables
  const validTrips = target.drizzled.select().from(trips).all()
  const validServiceIds = _.uniq(validTrips.map((t) => t.service_id))
  const calendarToTake = source.drizzled
    .select()
    .from(calendar)
    .where(inArray(calendar.service_id, validServiceIds))
    .all()
  const chunks = _.chunk(calendarToTake, 1000)
  for (const chunk of chunks) {
    target.drizzled.insert(calendar).values(chunk).run()
  }
}
