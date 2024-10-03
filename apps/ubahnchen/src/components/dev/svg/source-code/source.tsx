import fs from 'node:fs'
import path from 'node:path'

import { svgExamplesFolderAbs } from '../consts'

import { Cm6 } from './cm6'

export const getInitialCode = async (file?: string) => {
  if (!file) return ''
  const filePath = path.join(svgExamplesFolderAbs, file)
  return await fs.promises.readFile(filePath, 'utf8')
}

export const Source = () => {
  return (
    <div data-testid="source" className="flex h-full flex-col">
      <Cm6 />
    </div>
  )
}
