import _ from 'lodash'
import { TripByHour } from '../../lib/keyframe'
import { StateCreatorWithSubscribe } from './types'

export interface TripsSlice {
  trips: Record<number, TripByHour>
  addTrips: (newTrips: TripByHour[]) => void
  following: boolean
  tripId?: number
  jid?: string
  setTripId: (v?: number) => void
  setJid: (v?: string) => void
  isLoadingTrains: boolean
  setFollowing: (v: boolean) => void
  setIsLoadingTrains: (v: boolean) => void
}

export const createTripsSlice: StateCreatorWithSubscribe<TripsSlice> = (
  set,
) => ({
  tripId: undefined,
  setTripId: (tripId?: number) => set({ tripId, jid: undefined }),
  setJid: (jid?: string) => set({ tripId: undefined, jid }),
  setFollowing: (v: boolean) => set({ following: v }),
  following: true,
  isLoadingTrains: true,
  setIsLoadingTrains: (v: boolean) => set({ isLoadingTrains: v }),
  trips: {},
  addTrips: (newTrips) =>
    set(({ trips }) => {
      const existingIds = Object.keys(trips)
      const newObject = _.keyBy(
        newTrips.filter((t) => !existingIds.includes(String(t.trip_id))),
        'trip_id',
      )
      return {
        ...trips,
        ...newObject,
      }
    }),
})
