import React from 'react'

import { SplitPanels } from '@/components/dev/svg/panels'
import { Code } from '@/components/dev/svg/source-code/code'
import { files } from '@/components/dev/svg/source-code/get-files'
import { SelectSvgFile } from '@/components/dev/svg/source-code/select-svg-file'
import { getInitialCode } from '@/components/dev/svg/source-code/source'
import { SourceContextProvider } from '@/components/dev/svg/source-code/source-context'

import { ActionBaseTop } from '../base/action-base-top'

import { ColorPicker } from './color-picker'
import { SvgOut } from './svg-out'

export const DijkstraSvg = async ({
  searchParams,
}: {
  searchParams?: Record<string, string>
}) => {
  const file = searchParams?.file
  return (
    <SourceContextProvider
      code={file ? await getInitialCode(file) : ''}
      files={files}
      file={file}
    >
      <div className="flex h-screen w-screen flex-col align-middle">
        <ActionBaseTop>
          <SelectSvgFile files={files} />
          <ColorPicker />
        </ActionBaseTop>

        <SplitPanels
          direction="vertical"
          panels={[<Code key="src" file={file} />, <SvgOut key="svg" />]}
        />
      </div>
    </SourceContextProvider>
  )
}
