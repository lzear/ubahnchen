export const gtfsTimeToSeconds = (time?: string): number | undefined => {
  if (!time) return undefined
  const [hh, mm, ss] = time.split(':').map(Number)
  return (60 * hh + mm) * 60 + ss
}
