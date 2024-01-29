export const gtfsTimeToSeconds = (time: string): number => {
  if (!time) throw new Error('time is undefined')
  const [hh, mm, ss] = time.split(':').map(Number)
  if (hh === undefined || mm === undefined || ss === undefined)
    throw new Error('Could not get time values')
  return (60 * hh + mm) * 60 + ss
}
