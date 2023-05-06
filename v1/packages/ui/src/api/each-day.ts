import { eachDayOfInterval, format, parse } from 'date-fns'
import { dateRange } from './date-range'

export const eachDay = async () => {
  const [startString, endString] = await dateRange()
  const start = parse(startString, 'yyyyMMdd', new Date())
  const end = parse(endString, 'yyyyMMdd', new Date())
  return eachDayOfInterval({ start, end })
}

export const eachDay2 = async () => {
  const [startString, endString] = await dateRange()
  const start = parse(startString, 'yyyyMMdd', new Date())
  const end = parse(endString, 'yyyyMMdd', new Date())
  return eachDayOfInterval({ start, end }).map((date) =>
    format(date, 'yyyyMMdd'),
  )
}
