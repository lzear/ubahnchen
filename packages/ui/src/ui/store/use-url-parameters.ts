import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { parseISO } from 'date-fns'
// import shallow from 'zustand/shallow'
// import { MapName } from '../../lib/enums'
import shallow from 'zustand/shallow'
import { useTripIdParameter } from '../components/trip'
import { MapName } from '../../lib/enums'
import { anim } from '../canvas/animate'
import { trainManager } from '../trains/train-manager'
import { hideStationNames } from '../canvas/station-names'
import { useUrlParameters } from '../utils/url-parameters'
import { useStore } from './store'

const useDate = () => {
  const { query } = useRouter()
  const { date } = query
  useEffect(() => {
    if (date && typeof date === 'string') {
      const { setVirtualTimeZero } = useStore.getState()
      setVirtualTimeZero(+parseISO(date))
    }
  }, [date])
}

const useLiveMode = () => {
  const { query } = useRouter()
  const { live } = query

  useEffect(() => {
    const { settingsSetter } = useStore.getState()
    settingsSetter({ liveMode: live !== undefined })
  }, [live])
}

export const useUrlParameterMap = () => {
  const { query } = useRouter()
  const { map } = query
  const mapName = useStore((s) => s.mapName)

  if (MapName.U === map || MapName.SU === map) return map
  return mapName
}

const useMapType = () => {
  const map = useUrlParameterMap()
  const { mapName, setMapForce } = useStore(
    (s) => ({
      mapName: s.mapName,
      setMapForce: s.setMapForce,
    }),
    shallow,
  )
  useEffect(() => {
    if (map !== mapName) {
      setMapForce(map)
      trainManager.clearTrains()
      hideStationNames()
      anim.start()
    }
  }, [map, mapName, setMapForce])
}

const useTrip = () => {
  const { tripId, jid } = useTripIdParameter()
  useEffect(() => {
    const { setTripId, setJid } = useStore.getState()
    if (tripId) setTripId(tripId)
    else if (jid) setJid(jid)
  }, [jid, tripId])
}

export const useSpeed = () => {
  const { speed } = useUrlParameters()
  const setSpeed = useStore((s) => s.setSpeed)
  useEffect(() => {
    if (speed && speed !== useStore.getState().speed) setSpeed(speed)
  }, [setSpeed, speed])
}

export const useUrlParametersSync = () => {
  useDate()
  useMapType()
  useTrip()
  useLiveMode()
  useSpeed()
}
