import * as fs from 'node:fs'
import path from 'node:path'

import { P } from '@ubahnchen/cities/node'

const listContent = (directoryPath: string) =>
  fs.readdirSync(path.join(P.PROJECT_ROOT, directoryPath), {
    withFileTypes: true,
  })

export const listDirectories = (directoryPath: string) => {
  const contents = listContent(directoryPath)

  return contents
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name)
}
