import type { HTMLProps } from 'react'

import type { City } from '@ubahnchen/cities'

// import berlinSplacePoints from '../../../../../libs/cities/src/data/berlin/s/svg/04-paper-anotated.svg'
// import berlinSpairs from '../../../../../libs/cities/src/data/berlin/s/svg/06-lines-merged.svg'
import berlinUplacePoints from '../../../../../libs/cities/src/data/berlin/u/svg/02-svgomg.svg'
import berlinuannotated from '../../../../../libs/cities/src/data/berlin/u/svg/10-annoted.svg'

type Svg = (props: HTMLProps<SVGElement>) => JSX.Element

export const svgs: Record<
  City,
  Record<string, { placePoints: Svg; splitShapes: Svg; stopPairs: Svg }>
> = {
  berlin: {
    // s: {
    //   placePoints: berlinSplacePoints as Svg,
    //   splitShapes: berlinSplacePoints as Svg,
    //   stopPairs: berlinSpairs as Svg,
    // },
    u: {
      placePoints: berlinUplacePoints as Svg,
      splitShapes: berlinuannotated as Svg,
      stopPairs: berlinUplacePoints as Svg,
    },
  },
}
