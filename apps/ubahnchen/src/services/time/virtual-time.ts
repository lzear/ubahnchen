export const computeVirtualTime = ({
  virtualTimeZero,
  setAt,
  speed,
  paused,
}: {
  virtualTimeZero: number
  setAt: number
  speed: number
  paused: boolean
}) => {
  if (paused) return new Date(virtualTimeZero)
  const now = +Date.now()
  const diffX = (now - setAt) * speed
  return new Date(virtualTimeZero + diffX)
}

export const getVirtualTimeObject = ({
  virtualTimeZero,
  setAt,
  speed,
  paused,
}: {
  virtualTimeZero: number
  setAt: number
  speed: number
  paused: boolean
}) => {
  const virtualDate = computeVirtualTime({
    virtualTimeZero,
    setAt,
    speed,
    paused,
  })

  const virtualTime = +virtualDate
  return {
    virtualDate,
    virtualTime,
    virtualTimeS: virtualTime / 1000,
  }
}
