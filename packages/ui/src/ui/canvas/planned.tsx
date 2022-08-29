import React, { useEffect } from 'react'
import { useMapsObjects } from '../store/maps'
import { trainManager } from '../trains/train-manager'
import { useTripId } from '../components/trip'
import { paperView } from './paper-view'

export const Planned: React.FC = () => {
  const mapsObjects = useMapsObjects()

  const tripId = useTripId()

  useEffect(() => {
    if (!mapsObjects)
      return () => {
        // do nothing
      }

    // !liveMode
    trainManager.onInterval()
    const handle = setInterval(() => trainManager.onInterval(), 500)

    const view = paperView()
    if (view)
      view.onFrame = (frameInfo: {
        count: number
        delta: number
        time: number
      }) => {
        trainManager.onFrame(frameInfo, tripId)
      }
    return () => {
      const view = paperView()
      // eslint-disable-next-line unicorn/no-null
      if (view) view.onFrame = null
      trainManager.clearTrains()
      clearInterval(handle)
      // for (const [, t] of trainMap) t.remove()
    }
  }, [mapsObjects, tripId])

  return <></>
}
