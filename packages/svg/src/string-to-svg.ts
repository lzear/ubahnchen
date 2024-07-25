import { JSDOM } from 'jsdom'

// Function to convert SVG to string
export const svgToString = (svg: SVGSVGElement) => {
  const dom = new JSDOM(`<!DOCTYPE html><body></body>`)
  const document = dom.window.document
  document.body.append(svg)

  const serializer = new dom.window.XMLSerializer()
  return serializer.serializeToString(svg)
}

export const stringToSvg = (svgString: string): SVGSVGElement => {
  const parser = new DOMParser()
  const doc = parser.parseFromString(svgString, 'image/svg+xml')
  return doc.documentElement as unknown as SVGSVGElement
}

// export const svgToString = (svg: SVGSVGElement): string => {
//   const parser = new DOMParser()
//
//   window.document.body.append(svg)
// }
