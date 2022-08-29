import { addDays } from 'date-fns'

import { format } from 'date-fns-tz'
import utcToZonedTime from 'date-fns-tz/utcToZonedTime'
import zonedTimeToUtc from 'date-fns-tz/zonedTimeToUtc'

export const getBerlinNoonTs = (
  berlinDate: Date,
  forYesterday = false,
): number => {
  const timeBerlin = berlinDate
  const da = forYesterday ? addDays(timeBerlin, -1) : timeBerlin
  const day = format(da, 'yyyy-MM-dd', { timeZone: 'Europe/Berlin' })
  return +zonedTimeToUtc(`${day} 12:00:00.000`, 'Europe/Berlin')
}
export const getBerlinDayStartTs = (
  berlinDate: Date,
  forYesterday = false,
): number => getBerlinNoonTs(berlinDate, forYesterday) - 3600 * 12 * 1000

export const getBerlinGtfsSeconds = (
  berlinDate: Date,
  forYesterday = false,
): number => {
  const timeBerlin = berlinDate
  const noon = getBerlinNoonTs(berlinDate, forYesterday)
  return (+timeBerlin - +noon) / 1000 + 3600 * 12
}
export const getBerlinGtfsDay = (date: Date) =>
  format(date, 'yyyyMMdd', { timeZone: 'Europe/Berlin' })

export const toBerlinTime = (date: Date) =>
  utcToZonedTime(date, 'Europe/Berlin')
