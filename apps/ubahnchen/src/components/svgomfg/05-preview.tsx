'use client'

import SafeSVGPreview from '../dev/svg/show-svg/safe-svg-preview'
import {
  usePersistentSVG1,
  usePersistentSVG2,
} from '../dev/svg/use-persistent-svg'

export const PreviewSvg = () => {
  const s1 = usePersistentSVG1()
  const s2 = usePersistentSVG2()
  return <SafeSVGPreview svgContent={s1.svg} svgContent2={s2.svg} />
}
