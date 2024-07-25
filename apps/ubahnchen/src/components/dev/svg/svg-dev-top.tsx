import { SelectOutputFn } from './show-svg/select-output-fn'
import { files } from './source-code/get-files'
import { SelectSvgFile } from './source-code/select-svg-file'

export const SvgDevTop = () => {
  return (
    <div className="flex gap-2">
      <SelectOutputFn />

      <SelectSvgFile files={files} />
    </div>
  )
}
