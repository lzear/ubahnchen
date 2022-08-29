export const computeVirtualTime = ({
  virtualTimeZero,
  setAt,
  speed,
}: {
  virtualTimeZero: number
  setAt: number
  speed: number
}) => {
  const now = +Date.now()
  const diffX = (now - setAt) * speed
  return new Date(virtualTimeZero + diffX)
}

export const getVirtualTimeObject = ({
  virtualTimeZero,
  setAt,
  speed,
}: {
  virtualTimeZero: number
  setAt: number
  speed: number
}) => {
  const virtualDate = computeVirtualTime({
    virtualTimeZero,
    setAt,
    speed,
  })

  const virtualTime = +virtualDate
  return {
    virtualDate,
    virtualTime,
    virtualTimeS: virtualTime / 1000,
  }
}
