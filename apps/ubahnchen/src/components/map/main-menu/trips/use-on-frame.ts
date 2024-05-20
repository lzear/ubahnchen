import { useEffect } from 'react'
import Paper from 'paper'

import type { Pair } from '@/pages/api/pairs'
import type { RoutesDao } from '@/pages/api/routes-dao'
import { tripsFetcher } from '@/services/trips/trips'

export const useOnFrame = (
  pairs: Pair[] | undefined,
  routes: RoutesDao[] | undefined,
) => {
  useEffect(() => {
    if (!pairs || !routes) return
    const onFrame = () => tripsFetcher.onFrame(pairs, routes)
    Paper.view.onFrame = onFrame
    return () => {
      Paper.view.onFrame = null
    }
  }, [pairs, routes])
}
