import { TripNFrames } from '../../keyframe'

export interface StopsEntity {
  stop_idx: number
  stop_id: string
  arrival_time: number
  departure_time: number
}

export interface Trip {
  trip_id: number
  route_id: string
  service_id: number
  trip_headsign: string
  start_time: number
  end_time: number
  stops: StopsEntity[]
}

export type TripsResponse = { trips?: TripNFrames[]; error?: string }
