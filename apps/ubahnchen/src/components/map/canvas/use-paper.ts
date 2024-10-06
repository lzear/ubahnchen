import { useLayoutEffect, useRef } from 'react'

import { PaperJSRenderer } from '@/services/trains/renderer/renderer-paperjs'

import { useMapContext } from '../server-context/client'

import { useGestures } from './gestures'
import { convertPublicPath } from './import-svg'

const instance = new PaperJSRenderer()

export const usePaper = () => {
  const { mapPaths } = useMapContext()
  const canvasReference = useRef<HTMLCanvasElement>(null)

  useLayoutEffect(() => {
    const canvas = canvasReference.current
    if (canvas) {
      void instance.setup(
        canvas,
        convertPublicPath(mapPaths.PUBLIC.SVG.STEP_31_JUST_LINES),
      )
    }
  }, [mapPaths.PUBLIC.SVG.STEP_31_JUST_LINES])

  useGestures(canvasReference)

  return { canvasReference }
}
