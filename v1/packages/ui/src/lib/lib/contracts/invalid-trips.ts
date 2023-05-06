export type InvalidTripsPayload = {
  invalid_trips_count: number
  data: {
    route_ids: string[]
    route_name: string
    trip_ids: number[]
  }[]
}
