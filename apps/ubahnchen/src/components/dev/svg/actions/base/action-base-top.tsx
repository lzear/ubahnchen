import React from 'react'

import { Prettify } from '@/components/dev/svg/source-code/prettify'

import { SelectOutputFn } from '../../show-svg/select-output-fn'

export const ActionBaseTop = ({ children }: { children?: React.ReactNode }) => {
  return (
    <div className="flex flex-wrap gap-x-4 gap-y-1 p-1">
      <Prettify />
      <SelectOutputFn />
      {/*<SelectSvgFile files={files} />*/}
      {children}
    </div>
  )
}
