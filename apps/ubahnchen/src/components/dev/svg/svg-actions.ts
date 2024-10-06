export const SvgActions = {
  view: {
    name: 'View',
    description: 'View the SVG',
  },
  dijkstra: {
    name: 'Dijkstra',
    description: 'Dijkstra algorithm',
  },
  draw: {
    name: 'Draw lines',
    description: 'Draw lines with the mouse',
  },
} as const

export type SvgAction = keyof typeof SvgActions

export const svgActions = Object.keys(SvgActions) as SvgAction[]

export const isSvgAction = (value: unknown): value is SvgAction =>
  svgActions.includes(value as SvgAction)
