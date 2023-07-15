import { LRUCache } from 'lru-cache'

import { singletonize } from '@ubahnchen/utils'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const lru = <A extends any[], R extends NonNullable<unknown>>(
  query: (...a: A) => R,
) => {
  const singleton = singletonize(query, {
    cache: new LRUCache<string, R>({ max: 10 }),
  })

  return async (...a: A) => {
    const r = await singleton(...a)
    if (r === undefined) throw new Error('No result')
    return r
  }
}
