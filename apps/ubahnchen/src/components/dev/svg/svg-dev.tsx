import { Output } from './show-svg/output'
import { Code } from './source-code/code'
import { files } from './source-code/get-files'
import { getInitialCode } from './source-code/source'
import { SourceContextProvider } from './source-code/source-context'
import { SplitPanels } from './panels'
import { SvgDevTop } from './svg-dev-top'

type Props = {
  file?: string
}

export const SvgDev = async ({ file }: Props) => {
  return (
    <div className="flex h-screen w-screen flex-col">
      <SvgDevTop />
      <SourceContextProvider
        code={file ? await getInitialCode(file) : ''}
        files={files}
        file={file}
      >
        <div className="flex flex-1 flex-col">
          <SplitPanels
            direction="vertical"
            panels={[<Code key="src" file={file} />, <Output key="svg" />]}
          />
        </div>
      </SourceContextProvider>
    </div>
  )
}
