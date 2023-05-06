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

export type UbahnchenTypes = {
  agency: Agency
  trips: Trip
  routes: Route
  calendar: Calendar
  calendar_dates: CalendarDates
  stop_times: StopTime
  stops: Stop
  shapes: Shapes
}
