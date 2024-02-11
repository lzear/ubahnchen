import type {
  Agency,
  Calendar,
  CalendarDates,
  Route,
  Shapes,
  Stop,
  StopTime,
  Trip,
} from 'gtfs-types'

export type CsvAgency = Record<keyof Agency, string>
export type CsvCalendar = Record<keyof Calendar, string>
export type CsvCalendarDates = Record<keyof CalendarDates, string>
export type CsvRoute = Record<keyof Route, string>
export type CsvShapes = Record<keyof Shapes, string>
export type CsvStopTime = Record<keyof StopTime, string>
export type CsvStop = Record<keyof Stop, string>
export type CsvTrip = Record<keyof Trip, string>

export interface GtfsCsvTypes extends Record<string, Record<string, string>> {
  agency: CsvAgency
  calendar: CsvCalendar
  calendar_dates: CsvCalendarDates
  routes: CsvRoute
  shapes: CsvShapes
  stop_times: CsvStopTime
  stops: CsvStop
  trips: CsvTrip
}

export type GtfsTypes = {
  agency: Agency
  trips: Trip
  routes: Route
  calendar: Calendar
  calendar_dates: CalendarDates
  stop_times: StopTime
  stops: Stop
  shapes: Shapes
}
