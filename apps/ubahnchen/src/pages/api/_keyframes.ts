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
  // segments: TripSegment[]
}
