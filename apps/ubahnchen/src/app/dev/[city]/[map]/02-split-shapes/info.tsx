import type { City } from '@ubahnchen/cities'

import { getShapes } from './split-shapes.action.js'

type Props = {
  city: City
  map: string
}

export const SplitShapesInfo = async ({ city, map }: Props) => {
  const shapes = await getShapes({ city, map })
  return <span className="pointer-events-none text-xs">{shapes.length}</span>
}
