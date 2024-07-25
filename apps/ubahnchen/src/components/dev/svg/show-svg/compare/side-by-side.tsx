import { SplitPanels } from '@/components/dev/svg/panels'

import { SvgFromCode } from '../svg-from-code'

export const SideBySide = () => {
  return (
    <>
      <SplitPanels
        direction="horizontal"
        panels={[<SvgFromCode key="src" />]}
      />
    </>
  )
}
