import * as paper from 'paper'

import { hidpiFactor } from '@/components/map/canvas/consts'

export const convertPublicPath = (path: string): string => {
  const keep = path.split('/public/')[1]
  if (!keep)
    throw new Error(
      `convertPublicPath: path "${path}" does not contain "/public/"`,
    )
  return `/${keep}`
}

export const importSvg = async (
  svgPath: string,
  g: paper.Item,
  options?: object,
): Promise<paper.Item> => {
  return new Promise((resolve) =>
    g.importSVG(svgPath, {
      ...options,
      onLoad: (svgItem: paper.Item) => {
        svgItem.position = paper.view.center.divide(hidpiFactor)
        return resolve(svgItem)
      },
    }),
  )
}
