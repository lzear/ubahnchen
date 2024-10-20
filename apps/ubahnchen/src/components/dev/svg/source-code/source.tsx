import fs from 'node:fs'
import path from 'node:path'

import { svgExamplesFolderAbs } from '../consts'

export const getInitialCode = async (file?: string) => {
  if (!file) return ''
  const filePath = path.join(svgExamplesFolderAbs, file)
  return await fs.promises.readFile(filePath, 'utf8')
}
