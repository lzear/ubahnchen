import fs from 'node:fs'

import { mergePaths } from '../merge-paths'

export const mergePathsFile = (inputPath: string, outputPath: string) =>
  fs.promises.writeFile(
    outputPath,
    mergePaths(fs.readFileSync(inputPath, 'utf8')),
  )
