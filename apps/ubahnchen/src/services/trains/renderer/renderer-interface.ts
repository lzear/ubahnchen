import type { Segment } from '@ubahnchen/gtfs'

export interface Renderer {
  setup(canvas: HTMLCanvasElement, svgFilePath: string): Promise<void>
  drawTrain(segment: Segment, offset: number, color: string): void
  play(cb: () => unknown): void
  stop(): void
}
