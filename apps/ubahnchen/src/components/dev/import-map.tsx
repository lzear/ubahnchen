'use client'

import type { HTMLProps } from 'react'

import type { City } from '@ubahnchen/cities'

// eslint-disable-next-line import/no-unresolved
import berlinS from '../../../../../../libs/cities/src/data/berlin/s/svg/02-annotated.svg'
// eslint-disable-next-line import/no-unresolved
import berlinSU from '../../../../../../libs/cities/src/data/berlin/su/svg/20-annotated.svg'
// eslint-disable-next-line import/no-unresolved
import berlinU from '../../../../../../libs/cities/src/data/berlin/u/svg/10-annotated.svg'

export const nextAppMapImports: Record<
  City,
  Record<string, (props: HTMLProps<SVGElement>) => JSX.Element>
> = {
  berlin: {
    s: berlinS as (props: HTMLProps<SVGElement>) => JSX.Element,
    u: berlinU as (props: HTMLProps<SVGElement>) => JSX.Element,
    su: berlinSU as (props: HTMLProps<SVGElement>) => JSX.Element,
  },
}
