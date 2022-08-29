import { getDatabase } from './utils/get-database'

export const dateRange = async (): Promise<[string, string]> => {
  const database = await getDatabase()

  const rangeCalendar = `
      SELECT          MIN(calendar.start_date) as start, MAX(calendar.end_date) as end
      FROM            calendar
`
  const rangeCalendarDates = `
      SELECT          MIN(calendar_dates.date) as start, MAX(calendar_dates.date) as end
      FROM            calendar_dates
`
  const cal = database.prepare(rangeCalendar)
  const calDate = database.prepare(rangeCalendarDates)

  const g1: { start: string; end: string } = cal.get()
  const g2: { start: string; end: string } = calDate.get()

  const start = [g1.start, g2.start].sort((a, b) => a.localeCompare(b))[0]
  const end = [g1.end, g2.end].sort((a, b) => a.localeCompare(b)).at(-1)
  if (!start || !end) throw new Error('sf')
  return [start, end]
}
