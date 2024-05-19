import { useLayoutEffect, useRef } from 'react'
import * as Paper from 'paper'

import {
  convertPublicPath,
  importSvg,
} from '@/components/map/canvas/import-svg'
import type { MapPaths } from '@ubahnchen/cities/node'

export const usePaper = ({ mapPaths }: { mapPaths: MapPaths }) => {
  const canvasReference = useRef<HTMLCanvasElement>(null)
  const svgPath = convertPublicPath(mapPaths.PUBLIC.SVG.STEP_21_LINES_MERGED)

  useLayoutEffect(() => {
    const canvas = canvasReference.current
    if (canvas) {
      Paper.setup(canvas)
      const activeLayer = Paper.project.activeLayer
      const gMap = activeLayer.addChild(new Paper.Group())
      void importSvg(svgPath, gMap, { insert: true })
    }
  }, [svgPath])

  return { canvasReference }
}
