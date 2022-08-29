import React, { useEffect } from 'react'
import { useMapsObjects } from '../store/maps'
import { useTripJid } from '../components/trip-hafas'
import { useRadar } from '../query/use-radar'
import { useStore } from '../store/store'
import { RadarDto } from '../../lib/radar'
import { trainManagerLive } from '../trains/train-manager-live'
import { paperView } from './paper-view'

const handleRadar = (radar: RadarDto) => {
  const now = +Date.now()
  const trips = radar.trips.map((t) => ({
    ...t,
    keyframes: t.keyframes.map((f) => ({
      ...f,
      time1: now + f.time1,
      time2: now + f.time2,
    })),
  }))

  trainManagerLive.addTrips(trips)
}

export const Live: React.FC = () => {
  const mapsObjects = useMapsObjects()

  const mapName = useStore((s) => s.mapName)
  const tripJid = useTripJid()

  const radar = useRadar(mapName)

  useEffect(() => {
    if (!mapsObjects)
      return () => {
        // do nothing
      }

    const view = paperView()
    if (view)
      view.onFrame = (frameInfo: {
        count: number
        delta: number
        time: number
      }) => {
        trainManagerLive.onFrame(frameInfo, tripJid)
      }
    if (radar.data) handleRadar(radar.data)
    return () => {
      const view = paperView()
      // eslint-disable-next-line unicorn/no-null
      if (view) view.onFrame = null

      trainManagerLive.clearTrains()
      // for (const [, t] of trainMap) t.remove()
    }
  }, [mapsObjects, radar.data, tripJid])

  return <></>
}
