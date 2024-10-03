import fs from 'node:fs'

import { mergeSvgs } from '../merge-svgs'

export const mergeSvgFiles = async (
  svgFilesPaths: string[],
  output: string,
) => {
  const svgs = await Promise.all(
    svgFilesPaths.map((path) => fs.promises.readFile(path, 'utf8')),
  )
  const result = mergeSvgs(svgs)
  return fs.promises.writeFile(output, result)
}
