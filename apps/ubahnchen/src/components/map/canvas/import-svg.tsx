import Paper from 'paper'
import * as paper from 'paper'

import { hidpiFactor } from './consts'

export const convertPublicPath = (path: string): string => {
  const keep = path.split('/public/')[1]
  if (!keep)
    throw new Error(
      `convertPublicPath: path "${path}" does not contain "/public/"`,
    )
  return `/${keep}`
}

export let upaths: paper.Path[] | null = null
export let gTrains: paper.Group | null = null

export const importSvg = async (
  svgPath: string,
  g: paper.Item,
  options?: object,
): Promise<paper.Item> => {
  return new Promise((resolve) =>
    g.importSVG(svgPath, {
      ...options,
      onLoad: (svgItem: paper.Item) => {
        paper.view.center = svgItem.position.multiply((1 + hidpiFactor) / 2)
        const activeLayer = Paper.project.activeLayer
        upaths = svgItem.children as paper.Path[]
        gTrains = activeLayer.addChild(new Paper.Group()) as paper.Group
        return resolve(svgItem)
      },
    }),
  )
}
