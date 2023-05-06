import { useRouter } from 'next/router'
import { format } from 'date-fns'
import { useStore } from '../store/store'
import { useHafasTrip } from '../query/use-hafas-trip'

export const useTripIdParameter = () => {
  const { query } = useRouter()
  const { trip, jid } = query
  return {
    tripId: typeof trip === 'string' ? Number(trip) : undefined,
    jid: typeof jid === 'string' ? jid.replaceAll('-', '|') : undefined,
  }
}

export const useTripJid = () => useStore((s) => s.jid)

export const useTripHafas = () => {
  const tripJid = useTripJid()
  const { data, ...rest } = useHafasTrip('S1', tripJid)

  const newData = data
    ? {
        routeName: data.line?.name,
        stops: data.stopovers?.map((s) => {
          const timeIso = s.departure ?? s.arrival
          return {
            name: s.stop?.name?.replaceAll('(Berlin)', '').trim(),
            time: timeIso && format(new Date(timeIso), 'HH:mm:ss'),
            delay: s.departureDelay ?? s.arrivalDelay,
          }
        }),
      }
    : undefined
  return { data: newData, ...rest }
}
