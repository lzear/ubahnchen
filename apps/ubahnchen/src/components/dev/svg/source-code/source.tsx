// import { useContext } from 'react'
//
// import { SelectSvgFile } from './select-svg-file'
// import { SourceContext } from './source-context'

import fs from 'node:fs'
import path from 'node:path'

import { svgExamplesFolderAbs } from '../consts'

import { Cm6 } from './cm6'

type Props = {
  file?: string
}

export const getInitialCode = async (file?: string) => {
  if (!file) return ''
  const filePath = path.join(svgExamplesFolderAbs, file)
  return await fs.promises.readFile(filePath, 'utf8')
}

export const Source = ({ file }: Props) => {
  return (
    <div data-testid="source" className="flex h-full flex-col">
      <Cm6 />
    </div>
  )
}
