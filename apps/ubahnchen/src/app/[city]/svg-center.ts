export const getCenter = (
  target:
    | SVGRectElement
    | SVGCircleElement
    | SVGEllipseElement
    | SVGPathElement,
): [number, number] => {
  const bound = target.getBoundingClientRect()
  return [bound.x + bound.width / 2, bound.y + bound.height / 2]
}
