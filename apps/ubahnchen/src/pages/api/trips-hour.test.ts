import { findTripsHour } from './_find-trips-hour'

const date = '2024-10-12'

const fromTs = (ts: number) => new Date(ts * 1000).toISOString()

describe(findTripsHour, () => {
  it('should return trips for the given date', () => {
    const trips = findTripsHour({
      date: `${date}T10:00:00Z`,
      skipPrevious: true,
      routeTypes: [400],
      city: 'berlin',
    })

    for (const trip of trips) {
      expect(trip.trip_id).toBeDefined()
      expect(trip.stops.length).toBeGreaterThan(0)
      expect(trip.day).toBe(date)
      for (const stop of trip.stops) {
        expect(stop.stop_id).toBeDefined()
        expect(fromTs(stop.arrival_time)).toMatch(`${date}T`)
        expect(fromTs(stop.departure_time)).toMatch(`${date}T`)
      }
    }
  })
})
