export const pathPosition = ({
  offset,
  path,
}: {
  offset: number
  path: paper.Path
}): [number, number, number] | undefined => {
  const tang = path.getTangentAt(offset > path.length ? path.length : offset)
  const point = path.getPointAt(offset)
  if (!point) return
  return [point.x, point.y, tang.angle]
}

export const approximatePath = ({
  delta,
  path,
}: {
  delta: number
  path: paper.Path
}) => {
  const pathValues = new Map<number, [number, number, number]>()
  const pathLength = path.length
  for (let index = 0; index * delta < pathLength; index += 1) {
    const p = pathPosition({
      offset: index * delta,
      path,
    })
    if (p) pathValues.set(index, p)
  }
  return pathValues
}
