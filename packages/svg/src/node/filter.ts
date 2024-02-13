import fs from 'node:fs'

import { filterSvg } from '../filter'

export const filterSvgFile = (
  inputPath: string,
  outputPath: string,
  filterFn: (element: SVGElement) => boolean,
) =>
  fs.promises.writeFile(
    outputPath,
    filterSvg(fs.readFileSync(inputPath, 'utf8'), filterFn),
  )
