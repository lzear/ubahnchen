import React from 'react'

import { Pinch } from '@/components/dev/client/pinch'

import { SvgFromCode } from './svg-from-code'

export const PinchedSvgFromCode = () => {
  return (
    <>
      <Pinch>
        <SvgFromCode />
      </Pinch>
    </>
  )
}
