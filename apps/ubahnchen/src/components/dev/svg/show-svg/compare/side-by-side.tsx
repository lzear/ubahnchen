import { SplitPanels } from '@/components/dev/svg/panels'

import { SvgFromCodeDragCircles } from '../svg-from-code'

export const SideBySide = () => {
  return (
    <>
      <SplitPanels
        direction="horizontal"
        panels={[<SvgFromCodeDragCircles key="src" />]}
      />
    </>
  )
}
