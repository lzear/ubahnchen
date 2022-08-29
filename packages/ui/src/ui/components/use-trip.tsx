import shallow from 'zustand/shallow'
import { useStore } from '../store/store'
import { useTripHafas } from './trip-hafas'
import { useTripGtfs } from './trip'

export const useTrip = () => {
  const tripHafas = useTripHafas()
  const tripGtfs = useTripGtfs()

  const { jid, tripId } = useStore(
    (s) => ({ tripId: s.tripId, jid: s.jid }),
    shallow,
  )

  if (tripId) return tripGtfs
  if (jid) {
    return tripHafas
  }
  return tripGtfs
}
