'use client'

import { useMemo } from 'react'
import dynamic from 'next/dynamic'

import type { City } from '@ubahnchen/cities'

const nextAppMapImports = {
  berlin: {
    s: () =>
      import(
        '../../../../../../libs/cities/src/data/berlin/s/svg/02-annotated.svg'
      ),
    u: () =>
      import(
        '../../../../../../libs/cities/src/data/berlin/u/svg/02-annotated.svg'
      ),
    su: () =>
      import(
        '../../../../../../libs/cities/src/data/berlin/su/svg/20-annotated.svg'
      ),
  },
}
export const useImportSvg = (city: City, map: string) => {
  const ImportedSvg: React.ComponentType<React.SVGProps<SVGSVGElement>> =
    // @ts-ignore
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument,@typescript-eslint/no-unsafe-member-access
    useMemo(() => dynamic(nextAppMapImports[city][map]), [city, map])
  return ImportedSvg
}
