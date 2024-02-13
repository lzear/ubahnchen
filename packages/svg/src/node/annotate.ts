import fs from 'node:fs'

import { annotate } from '../annotate'

export const annotateSvgFile = (
  inputPath: string,
  outputPath: string,
  xAttribute: string,
) =>
  fs.promises.writeFile(
    outputPath,
    annotate(fs.readFileSync(inputPath, 'utf8'), xAttribute),
  )
