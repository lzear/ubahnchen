import { useEffect } from 'react'

import { instance } from '@/components/map/canvas/use-paper'
import { useMapContext } from '@/components/map/server-context/client'
import { getVirtualTime } from '@/services/time/virtual-time'
import { tripsFetcher } from '@/services/trips/trips'
import { wait } from '@ubahnchen/utils'

export const useOnFrame = () => {
  const { stopPairs, routes, stopPairSvgs } = useMapContext()

  useEffect(() => {
    const stopPairSvgsMap = new Map(
      stopPairSvgs.map((s) => [s.stop_pair_idx, s]),
    )
    if (!stopPairs || !routes) return

    // @ts-ignore
    instance.play(async ({ count }) => {
      if (count % 1 !== 0) return

      const virtualTime = getVirtualTime()
      const vTimeMs = +virtualTime

      instance.clearTrains()
      tripsFetcher.iterateTrains((train) => {
        train.move(vTimeMs, stopPairs, stopPairSvgsMap)
      })
      await wait(5000)
    })
    return () => instance.stop()
  }, [stopPairs, routes, stopPairSvgs])
}
