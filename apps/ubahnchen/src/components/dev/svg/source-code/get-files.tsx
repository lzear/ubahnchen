import fs from 'node:fs'
import path from 'node:path'

import { svgExamplesFolderAbs } from '../consts'

function readDirectoryRecursively(dirPath: string): string[] {
  const files = fs.readdirSync(dirPath)
  return files.flatMap((file) => {
    const filePath = path.join(dirPath, file)
    return fs.statSync(filePath).isDirectory()
      ? readDirectoryRecursively(filePath)
      : filePath
  })
}

export const files = readDirectoryRecursively(svgExamplesFolderAbs).map(
  (file) => ({
    abs: file,
    rel: path.relative(svgExamplesFolderAbs, file),
  }),
)
