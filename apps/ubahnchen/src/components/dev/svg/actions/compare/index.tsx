import React from 'react'

import { SplitPanels } from '@/components/dev/svg/panels'
import { files } from '@/components/dev/svg/source-code/get-files'
import { MonacoDiff } from '@/components/dev/svg/source-code/monaco/monaco-diff'
import { SelectSvgFile } from '@/components/dev/svg/source-code/select-svg-file'
import { getInitialCode } from '@/components/dev/svg/source-code/source'
import { SourceContextProvider } from '@/components/dev/svg/source-code/source-context'

import { ActionBaseTop } from '../base/action-base-top'

export const Compare = async ({
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
        </ActionBaseTop>

        <SplitPanels direction="vertical" panels={[<MonacoDiff key="src" />]} />
      </div>
    </SourceContextProvider>
  )
}
