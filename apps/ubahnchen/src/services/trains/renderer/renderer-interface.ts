export interface Renderer {
  setup(canvas: HTMLCanvasElement, svgFilePath: string): void | Promise<void>
}
