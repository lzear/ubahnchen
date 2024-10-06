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
  itinerary: unknown
  time: number
  absOffset: number
}

export type Keyframe3 = {
  path: string
  time: number
  offset: number
}

export const getFrameDepartureTime = (f: Keyframe) =>
  // eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing
  f.departure_time || f.arrival_time

export type TripByHourRow = {
  trip_id: number
  arrival_time: number
  departure_time: number
  stop_id: string
  // stop_idx: number
  route_id: string
  service_id: number
  trip_headsign: string
  start_time: number
  end_time: number
}

export type TripByHourStop = {
  arrival_time: number
  // stop_idx: number
  stop_id: string
  departure_time: number
}

export type RunningSegment = {
  type: 'running'
  start_time: number
  end_time: number
  start_stop_id: string
  end_stop_id: string
  stop_pair_idx: number
}

export type PausedSegment = {
  type: 'paused'
  start_time: number
  end_time: number
  stop_id: string
}

export type TripSegment = RunningSegment | PausedSegment

export type TripByHour = {
  day: string
  start_time: number
  trip_id: number
  route_id: string
  end_time: number
  stops: TripByHourStop[]
  segments: TripSegment[]
}

export type TripNFrames = Omit<TripByHour, 'stops'> & {
  keyframes2: Keyframe2[]
}

export type FindTripsCount = { date: string; trip_count: number }

export type Pair = {
  idx: number
  stop_id_1: string
  stop_id_2: string
  route_id: string
  count: number
  is_one_way: number
}
