import type { ParsedUrlQuery } from 'node:querystring'

import { useRouter } from 'next/router'

import { useUbahnStore } from './index'

type UrlParametersType = {
  map: 'U' | 'SU'
  live: ''
  date: string
  speed: number
  tripId: number
  jid: string
}

const uParameters = (query: ParsedUrlQuery) => {
  const p: Partial<UrlParametersType> = {}

  // if (query.map === MapName.U) p.map = MapName.U
  // if (query.map === MapName.SU) p.map = MapName.SU
  if (query.live !== undefined) p.live = ''
  if (typeof query.date === 'string') p.date = query.date
  if (typeof query.speed === 'string') p.speed = Number(query.speed)
  if (typeof query.tripId === 'string') p.tripId = Number(query.tripId)
  if (typeof query.jid === 'string') p.jid = query.jid

  return p
}

export const useUrlParameters = () => {
  const { query } = useRouter()
  return uParameters(query)
}

export const useSetLiveUrl = (newLiveMode: boolean) => {
  const { tripId, jid, speed, live, date, ...parameters } = useUrlParameters()
  const p: Partial<UrlParametersType> = { ...parameters }

  if (newLiveMode) p.live = ''

  return p
}

export const useSetDateUrl = () => {
  const { date, live, jid, speed, tripId, ...parameters } = useUrlParameters()
  return (date: string) => {
    const q: Record<string, string> = { ...parameters, date }
    if (speed) q.speed = String(speed)
    if (tripId) q.tripId = String(tripId)
    return q
  }
}

export const useSetSpeed = () => {
  const parameters = useUrlParameters()
  const { replace } = useRouter()
  const setSpeed = useUbahnStore((s) => s.setSpeed)
  return (speed: number) => {
    void replace({ query: { ...parameters, speed } }, undefined, {
      shallow: true,
    })
    setSpeed(speed)
  }
}

// export const useSetTripId = () => {
//   const parameters = useUrlParameters()
//   const { replace } = useRouter()
//   const setTripId = useStore((s) => s.setTripId)
//   return (tripId: number) => {
//     void replace({ query: { ...parameters, tripId } }, undefined, {
//       shallow: true,
//     })
//     setTripId(tripId)
//   }
// }
// export const setTripIdNav = (tripId: number) => {
//   const { setTripId } = useStore.getState()
//   void Router.replace(
//     { query: { ...uParameters(Router.query), tripId } },
//     undefined,
//     {
//       shallow: true,
//     },
//   )
//   setTripId(tripId)
// }

// export const useSetJid = () => {
//   const parameters = useUrlParameters()
//   const { replace } = useRouter()
//   const setJid = useStore((s) => s.setJid)
//   return (jid: string) => {
//     void replace({ query: { ...parameters, jid } }, undefined, {
//       shallow: true,
//     })
//     setJid(jid)
//   }
// }
//
// export const setJidNav = (jid: string) => {
//   const { setJid } = useStore.getState()
//   void Router.replace(
//     { query: { ...uParameters(Router.query), jid } },
//     undefined,
//     { shallow: true },
//   )
//   setJid(jid)
// }

export const useMapUrl = (mapName: string) => {
  const parameters = useUrlParameters()
  return { ...parameters, map: mapName }
}
