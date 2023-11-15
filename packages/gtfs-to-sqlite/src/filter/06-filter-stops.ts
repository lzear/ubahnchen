import { inArray, sql } from 'drizzle-orm'
import _ from 'lodash'

import { drizzleTables } from '@ubahnchen/database'
import { truthy } from '@ubahnchen/utils'

import type { SourceTarget } from './types'

export const filterStops = ({ source, target }: SourceTarget) => {
  const { stops, stopTimes } = drizzleTables
  const validTripsCount = target.drizzled
    .select({ count: sql<number>`count(*)` })
    .from(stopTimes)
    .all()

  const count = validTripsCount[0]?.count
  if (!count) throw new Error('no count?' + JSON.stringify(validTripsCount))

  const take = 1000
  const validStopIds = new Set<string>()
  for (let i = 0; i < count; i += take) {
    const stopTimesChunk = target.drizzled
      .select()
      .from(stopTimes)
      .offset(i)
      .limit(take)
      .all()

    for (const stopTime of stopTimesChunk) {
      validStopIds.add(stopTime.stop_id)
    }
  }

  const stopsToTake = source.drizzled
    .select()
    .from(stops)
    .where(inArray(stops.stop_id, [...validStopIds]))
    .all()

  const parentIds = _.uniq(
    // eslint-disable-next-line unicorn/no-array-callback-reference
    stopsToTake.map((s) => s.parent_station).filter(truthy),
  )

  const parentStopsToTake = source.drizzled
    .select()
    .from(stops)
    .where(
      inArray(
        stops.stop_id,
        parentIds.filter((id) => !validStopIds.has(id)),
      ),
    )
    .all()

  const all = _.uniqBy([...parentStopsToTake, ...stopsToTake], 'stop_id')
    .sort((a) => (a.parent_station ? 1 : -1))
    .map((s) => ({
      ...s,
      parent_station: s.parent_station || undefined,
    }))

  const chunks = _.chunk(all, 10)
  for (const chunk of chunks) {
    target.drizzled.insert(stops).values(chunk).run()
  }
}
