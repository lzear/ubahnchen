'use client'

import type { ComponentProps } from 'react'

import type { City } from '@ubahnchen/cities'

import { nextAppMapImports } from '../../../app/_components/svg/import-map'

export const SvgSource = ({
  city,
  map,
  ...svgProps
}: { city: City; map: string } & ComponentProps<'svg'>) => {
  const ImportedSvg = nextAppMapImports[city][map]
  return <ImportedSvg {...svgProps} />
}
