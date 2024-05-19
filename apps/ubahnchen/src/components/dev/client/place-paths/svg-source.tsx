'use client'

import type { ComponentProps } from 'react'

import { nextAppMapImports } from '@/components/dev/import-map'
import type { City } from '@ubahnchen/cities'

export const SvgSource = ({
  city,
  map,
  ...svgProps
}: { city: City; map: string } & ComponentProps<'svg'>) => {
  const ImportedSvg = nextAppMapImports[city][map]
  // @ts-ignore
  return <ImportedSvg {...svgProps} />
}
