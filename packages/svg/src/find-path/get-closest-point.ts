import paper from 'paper'

// https://6r1d.github.io/closest_point/util.js
export const getClosestPoint = (
  svgPath: SVGPathElement,
  point: [number, number],
) => {
  function distance2(p: { x: number; y: number }) {
    return Math.hypot(p.x - point[0], p.y - point[1])
  }

  const pathLength = svgPath.getTotalLength()
  let precision = 8
  let best: DOMPoint | undefined
  let bestPathLength = 0
  let bestDistance = Number.POSITIVE_INFINITY

  // linear scan for coarse approximation
  let scan
  let scanLength = 0
  let scanDistance
  for (; scanLength <= pathLength; scanLength += precision) {
    if (
      (scanDistance = distance2(
        (scan = svgPath.getPointAtLength(scanLength)),
      )) < bestDistance
    ) {
      best = scan
      bestPathLength = scanLength
      bestDistance = scanDistance
    }
  }

  // binary search for precise estimate
  precision /= 2
  while (precision > 0.5) {
    let before
    let after
    let beforeLength
    let afterLength
    let beforeDistance
    let afterDistance
    if (
      (beforeLength = bestPathLength - precision) >= 0 &&
      (beforeDistance = distance2(
        (before = svgPath.getPointAtLength(beforeLength)),
      )) < bestDistance
    ) {
      best = before
      bestPathLength = beforeLength
      bestDistance = beforeDistance
    } else if (
      (afterLength = bestPathLength + precision) <= pathLength &&
      (afterDistance = distance2(
        (after = svgPath.getPointAtLength(afterLength)),
      )) < bestDistance
    ) {
      best = after
      bestPathLength = afterLength
      bestDistance = afterDistance
    } else {
      precision /= 2
    }
  }

  if (!best) throw new Error('No best found')

  return {
    point: [best.x, best.y] as [number, number],
    distance: bestDistance,
    pathLength: bestPathLength,
  }
}

const pathToPaper = (path: SVGPathElement) => {
  const paperPath = new paper.Path(path.getAttribute('d')!)
  return paperPath
}

export const getClosestPointPaper = (
  svgPath: SVGPathElement,
  point: [number, number],
) => {
  function distance2(p: { x: number; y: number }) {
    return Math.hypot(p.x - point[0], p.y - point[1])
  }

  const paperPath = pathToPaper(svgPath)

  const pathLength = paperPath.length
  let precision = 8
  let best: paper.Point | undefined
  let bestPathLength = 0
  let bestDistance = Number.POSITIVE_INFINITY

  // linear scan for coarse approximation
  let scan
  let scanLength = 0
  let scanDistance
  for (; scanLength <= pathLength; scanLength += precision) {
    if (
      (scanDistance = distance2((scan = paperPath.getPointAt(scanLength)))) <
      bestDistance
    ) {
      best = scan
      bestPathLength = scanLength
      bestDistance = scanDistance
    }
  }

  // binary search for precise estimate
  precision /= 2
  while (precision > 0.5) {
    let before
    let after
    let beforeLength
    let afterLength
    let beforeDistance
    let afterDistance
    if (
      (beforeLength = bestPathLength - precision) >= 0 &&
      (beforeDistance = distance2(
        (before = paperPath.getPointAt(beforeLength)),
      )) < bestDistance
    ) {
      best = before
      bestPathLength = beforeLength
      bestDistance = beforeDistance
    } else if (
      (afterLength = bestPathLength + precision) <= pathLength &&
      (afterDistance = distance2((after = paperPath.getPointAt(afterLength)))) <
        bestDistance
    ) {
      best = after
      bestPathLength = afterLength
      bestDistance = afterDistance
    } else {
      precision /= 2
    }
  }

  if (!best) throw new Error('No best found')

  return {
    point: [best.x, best.y] as [number, number],
    distance: bestDistance,
    pathLength: bestPathLength,
  }
}
