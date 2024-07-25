export const SvgActions = {
  view: {
    name: 'View',
    description: 'View the SVG',
  },
  kruskal: {
    name: 'Kruskal',
    description: 'Kruskal algorithm',
  },
} as const

export type SvgAction = keyof typeof SvgActions

export const svgActions = Object.keys(SvgActions) as SvgAction[]
