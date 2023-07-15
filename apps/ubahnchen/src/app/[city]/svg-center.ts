export const getCenter = (target: SVGSVGElement): [number, number] => {
  if (
    target instanceof SVGCircleElement ||
    target instanceof SVGEllipseElement
  ) {
    console.log('🦺 antoinelog target', target)

    console.log('🦺 antoinelog target.cx', target.cx)
    console.log('🦺 antoinelog target.cx.baseVal', target.cx.baseVal)

    return [target.cx.baseVal.value, target.cy.baseVal.value]
  }
  if (target instanceof SVGRectElement) {
    return [
      target.x.baseVal.value + target.width.baseVal.value / 2,
      target.y.baseVal.value + target.height.baseVal.value / 2,
    ]
  }

  throw new Error(`Unhandled SVG shape: ${target.nodeName}`)
}
