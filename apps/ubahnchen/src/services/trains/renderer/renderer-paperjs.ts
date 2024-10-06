import Paper from 'paper'

import { hidpiFactor } from '@/components/map/canvas/consts'

import type { Renderer } from './renderer-interface'

export class PaperJSRenderer implements Renderer {
  async setup(canvas: HTMLCanvasElement, svgFilePath: string): Promise<void> {
    Paper.setup(canvas)
    const activeLayer = Paper.project.activeLayer
    const gMap = activeLayer.addChild(new Paper.Group())
    return new Promise((resolve, reject) =>
      gMap.importSVG(svgFilePath, {
        onLoad: (svgItem: paper.Item) => {
          Paper.view.center = svgItem.position.multiply((1 + hidpiFactor) / 2)
          return resolve()
        },
        onError: (error: Error) => reject(error),
      }),
    )
  }
}
