import fs from 'node:fs'

import { splitSvgSubpaths } from '../split-by-subpath'
import { stringToSvg, svgToString } from '../string-to-svg'

export const splitSubpaths = async (inputPath: string, outputPath: string) => {
  const svgString = await fs.promises.readFile(inputPath, 'utf8')
  const svgElement = stringToSvg(svgString)
  const split = splitSvgSubpaths(svgElement)
  const splitString = svgToString(split)
  await fs.promises.writeFile(outputPath, splitString)
}
