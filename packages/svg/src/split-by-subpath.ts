export const splitSvgSubpaths = (svgElement: SVGSVGElement) => {
  const paths = svgElement.querySelectorAll('path') // Find all path elements
  for (const path of paths) {
    const d = path.getAttribute('d') // Get the 'd' attribute
    if (!d) continue
    const segments = d.split(/(?=M)/) // Split into subpaths on each 'M'
    if (segments.length > 1) {
      for (const segment of segments) {
        // Create a new path element
        const newPath = document.createElementNS(
          'http://www.w3.org/2000/svg',
          'path',
        )
        newPath.setAttribute('d', segment) // Set the 'd' attribute
        path.parentElement?.append(newPath) // Append the new path element

        // set all the attributes of the original path to the new path
        for (const attr of path.attributes) {
          if (attr.name === 'd') continue
          newPath.setAttribute(attr.name, attr.value)
        }
      }
      path.remove() // Remove the original path element
    }
  }
  return svgElement
}
