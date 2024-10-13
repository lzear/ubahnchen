import * as paper from 'paper'
import Paper from 'paper'

import { hidpiFactor } from '@/components/map/canvas/consts'
import type { Segment } from '@ubahnchen/gtfs'

import type { Renderer } from './renderer-interface'

export class PaperJSRenderer implements Renderer {
  private paths: paper.Path[] | undefined
  private trainsGroup: paper.Group | undefined

  async setup(canvas: HTMLCanvasElement, svgFilePath: string): Promise<void> {
    Paper.setup(canvas)
    const activeLayer = Paper.project.activeLayer
    const gMap = activeLayer.addChild(new Paper.Group())
    return new Promise((resolve, reject) => {
      gMap.importSVG(svgFilePath, {
        onLoad: (item: paper.Item) => {
          Paper.view.center = item.position.multiply((1 + hidpiFactor) / 2)
          this.paths = item.children as paper.Path[]
          this.trainsGroup = new paper.Group()
          resolve()
        },
        onError: reject,
      })
    })
  }

  private createShape(color: string): paper.Shape.Rectangle {
    return new paper.Shape.Rectangle({
      point: new paper.Point(0, 0),
      size: [23, 18],
      fillColor: color,
      parent: this.trainsGroup,
    })
  }

  public clearTrains(): void {
    this.trainsGroup?.removeChildren()
  }

  private getPath(pathIndex: string): paper.Path | undefined {
    return this.paths?.find((p) => p.name === pathIndex)
  }

  private pathPosition(
    offset: number,
    path: paper.Path,
  ): [number, number, number] | undefined {
    const point = path.getPointAt(offset)
    const tangent = path.getTangentAt(offset)
    if (!point || !tangent) return undefined
    return [point.x, point.y, tangent.angle]
  }

  drawTrain(segment: Segment, offset: number, color: string): void {
    const path = this.getPath(segment.pathId)
    if (!path) return

    const position = this.pathPosition(offset, path)
    if (!position) return

    const [x, y, angle] = position
    const shape = this.createShape(color)

    shape.position.x = x
    shape.position.y = y
    shape.rotation = angle
  }

  play(cb: () => Promise<unknown>): void {
    Paper.view.onFrame = cb
  }

  stop(): void {
    Paper.view.onFrame = null
  }
}
