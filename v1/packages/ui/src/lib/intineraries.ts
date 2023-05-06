import itinerariesSU from './lib/data/04-line-stops-offsets.json'
import itinerariesU from './lib/data/05-line-stops-offsets-u.json'
import { MapName } from './enums'

export type AbsStop = { stop_id: string; offset: number; absOffset: number }
export type SectionWithAbs = {
  path: string
  absStart: number
  absEnd: number
  start: number
  end: number
  stops: AbsStop[]
}

export type Itinerary = {
  id: string
  route_name: string
  sections: SectionWithAbs[]
}

export const itineraries = {
  [MapName.U]: itinerariesU,
  [MapName.SU]: itinerariesSU,
}
