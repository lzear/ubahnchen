import React from 'react'

import { Source } from './source'

type Props = {
  file?: string
}

export const Code = ({ file }: Props) => {
  return (
    <div className="h-full">
      <Source file={file} />
    </div>
  )
}
