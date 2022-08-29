import { Itinerary } from './intineraries'

type KeyFrameJunction = {
  path: string
  offset: number
  arrival_time: number
  departure_time?: number
}
export type KeyFrameStation = {
  stop_id: string
  path: string
  offset: number
  arrival_time: number
  departure_time?: number
}
export type Keyframe = KeyFrameStation | KeyFrameJunction
export type Keyframe2 = {
  path: string
  time1: number
  time2: number
  offset1: number
  offset2: number
}
export type KeyframeAbs = {
  itinerary: Itinerary
  time: number
  absOffset: number
}

export type Keyframe3 = {
  path: string
  time: number
  offset: number
}

export const getFrameDepartureTime = (f: Keyframe) =>
  f.departure_time || f.arrival_time

export type TripByHourRow = {
  trip_id: number
  arrival_time: number
  departure_time: number
  stop_id: string
  stop_idx: number
  route_id: string
  service_id: number
  trip_headsign: string
  start_time: number
  end_time: number
}

export type TripByHourStop = {
  arrival_time: number
  stop_idx: number
  stop_id: string
  departure_time: number
}

export type TripByHour = {
  day: string
  start_time: number
  trip_id: number
  route_id: string
  end_time: number
  stops: TripByHourStop[]
}

export type TripNFrames = Omit<TripByHour, 'stops'> & {
  keyframes2: Keyframe2[]
}

export type FindTripsCount = { date: string; trip_count: number }
