import * as fs from 'node:fs'
import path from 'node:path'

import { projectRoot } from '@ubahnchen/paths'

const listContent = (directoryPath: string) =>
  fs.readdirSync(path.join(projectRoot, directoryPath), {
    withFileTypes: true,
  })

export const listDirectories = (directoryPath: string) => {
  const contents = listContent(directoryPath)

  return contents
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name)
}
