import _ from 'lodash'

const junctionDistance = (
  primary: { station: paper.Item; path: paper.Path; point: paper.Point },
  secondary: { station: paper.Item; path: paper.Path; point: paper.Point },
) => {
  const d1 = Math.abs(
    primary.path.getNearestLocation(primary.station.position).offset -
      primary.path.getNearestLocation(primary.point).offset,
  )
  const d2 = Math.abs(
    secondary.path.getNearestLocation(secondary.station.position).offset -
      secondary.path.getNearestLocation(secondary.point).offset,
  )
  const di = primary.point.getDistance(secondary.point)
  return d1 + d2 + 10 * di
}

export const getBestJunctions = (
  primary: { station: paper.Item; path: paper.Path },
  secondary: { station: paper.Item; path: paper.Path },
) => {
  const station1 = [
    primary.station.position,
    secondary.path.getNearestPoint(primary.station.position),
  ] as const
  const intersections = primary.path
    .getIntersections(secondary.path)
    .map((intersection) => [intersection.point, intersection.point] as const)
  const pathEnds = getPathEnds(primary.path, secondary.path)
  return _.sortBy(
    [station1, ...intersections, ...pathEnds].map(([a, b]) => ({
      points: [a, b] as const,
      distance: junctionDistance(
        { ...primary, point: a },
        { ...secondary, point: b },
      ),
    })),
    'distance',
  )
}

const getPathEnds = (l1: paper.Path, l2: paper.Path) => {
  const l11 = l1.getPointAt(0)
  const l12 = l1.getPointAt(l1.length)
  const l21 = l2.getPointAt(0)
  const l22 = l2.getPointAt(l2.length)

  const n11 = l2.getNearestPoint(l11)
  const n12 = l2.getNearestPoint(l12)
  const n21 = l1.getNearestPoint(l21)
  const n22 = l1.getNearestPoint(l22)

  return [
    [l11, n11],
    [l12, n12],
    [n21, l21],
    [n22, l22],
  ] as const
}
