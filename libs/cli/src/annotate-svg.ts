import * as fs from 'node:fs'

import { JSDOM } from 'jsdom'

export const annotateSvg = (
  inputPath: string,
  outputPath: string,
  xAttribute = 'ubhchn',
): void => {
  const svgString = fs.readFileSync(inputPath, 'utf8')
  const dom = new JSDOM(svgString, { contentType: 'image/svg+xml' })
  const document = dom.window.document

  const elements = document.querySelectorAll<HTMLElement>('svg *')

  for (const [index, element] of elements.entries()) {
    if (element.dataset) {
      element.dataset[xAttribute] = `${index}`
    }
  }

  fs.writeFileSync(outputPath, dom.serialize())
}
