'use client'

import React, { useLayoutEffect, useRef } from 'react'
import * as Paper from 'paper'
import paper from 'paper'

import type { CityMapParam } from '../../dev/[city]/[map]/params'

import { useGestures } from './gestures'

const hidpi = true

export const importSvg = (
  svgPath: string,
  g: paper.Item,
  options?: object,
): Promise<paper.Item> =>
  new Promise((resolve) =>
    g.importSVG(svgPath, {
      ...options,
      onLoad: (svgItem: paper.Item) => resolve(svgItem),
    }),
  )

const PaperJsMain = (_props: CityMapParam) => {
  const canvasReference = useRef<HTMLCanvasElement>(null)

  useLayoutEffect(() => {
    const canvas = canvasReference.current
    if (canvas) {
      Paper.setup(canvas)
      const view = Paper.view
      if (view) view.center = new paper.Point([900, 1050])
      const activeLayer = Paper.project.activeLayer
      const gMap = activeLayer.addChild(new Paper.Group())
      // gMap.opacity = 0
      // const suMap = await importSvg('berlin/su.svg', gMap, { insert: true })
      void importSvg('/berlin/u/50-paths.svg', gMap, { insert: true })
    }
  }, [])
  useGestures()
  return (
    <div>
      <div>paperjs</div>

      <canvas
        className="absolute top-0 h-screen touch-none"
        // key={hidpi ? 'on' : 'off'}
        // @ts-ignore
        resize="true"
        data-paper-resize
        hidpi={hidpi ? 'on' : 'off'}
        ref={canvasReference}
        id="canvas"
      />
    </div>
  )
}

export default PaperJsMain
