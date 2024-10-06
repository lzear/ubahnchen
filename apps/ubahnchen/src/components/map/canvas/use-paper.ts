import { useLayoutEffect, useRef } from 'react'
import * as Paper from 'paper'

import { useMapContext } from '../server-context/client'

import { useGestures } from './gestures'
import { convertPublicPath, importSvg } from './import-svg'

export const usePaper = () => {
  const { mapPaths } = useMapContext()
  const canvasReference = useRef<HTMLCanvasElement>(null)

  useLayoutEffect(() => {
    const canvas = canvasReference.current
    if (canvas) {
      const svgPath = convertPublicPath(mapPaths.PUBLIC.SVG.STEP_31_JUST_LINES)
      Paper.setup(canvas)
      const activeLayer = Paper.project.activeLayer
      const gMap = activeLayer.addChild(new Paper.Group())
      void importSvg(svgPath, gMap, { insert: true })
    }
  }, [mapPaths.PUBLIC.SVG.STEP_31_JUST_LINES])

  useGestures(canvasReference)

  return { canvasReference }
}
