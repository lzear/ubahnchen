import type { HTMLProps } from 'react'

import type { City } from '@ubahnchen/cities'

import berlinUplacePoints from '../../../../../libs/cities/src/data/berlin/u/svg/30-annotated.svg'

export const svgs: Record<
  City,
  Record<
    string,
    {
      placePoints: (props: HTMLProps<SVGElement>) => JSX.Element
      splitShapes: (props: HTMLProps<SVGElement>) => JSX.Element
    }
  >
> = {
  berlin: {
    u: {
      placePoints: berlinUplacePoints,
      splitShapes: berlinUplacePoints,
    },
  },
}
