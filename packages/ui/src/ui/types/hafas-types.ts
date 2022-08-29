import type { Feature } from '@turf/turf'
import type { Point } from '@turf/helpers/dist/js/lib/geojson'

export type Frame = {
  destination: Stop
  origin: Stop
  t: number
}

export type Location = {
  id: string
  latitude: number
  longitude: number
  type: 'location'
}

export type Radar = {
  frames: Frame[]
  line: {
    type: 'line'
    id: string
    fahrtNr: null
    name: string
    public: boolean
  }
  location: Location
  nextStopovers: NextStopover[]
  polyline: { type: 'FeatureCollection'; features: [] }
  tripId: string

  ani: {
    polyline: {
      features: Feature<Point>[]
    }
    dirGeo: number[]
    mSec: number[]
    proc: number[]
    procAbs: number[]
    fromLocations: Stop[]
    toLocations: Stop[]
  }
}

export type Stop = {
  id: string
  location: Location
  name: string
  products: {
    suburban: true
    subway: false
    tram: false
    bus: true
    ferry: false
  }
  type: 'stop'
}

export type NextStopover = {
  arrival: string
  arrivalDelay: number
  arrivalPlatform: string
  departure: string
  departureDelay: number
  departurePlatform: string
  plannedArrival: string
  plannedArrivalPlatform: string
  plannedDeparture: string
  plannedDeparturePlatform: string
  stop: Stop
}

export enum Products {
  SUBURBAN = 'suburban',
  SUBWAY = 'subway',
  FERRY = 'ferry',
  BUS = 'bus',
  TRAM = 'tram',
  EXPRESS = 'express',
  REGIONAL = 'regional',
}
