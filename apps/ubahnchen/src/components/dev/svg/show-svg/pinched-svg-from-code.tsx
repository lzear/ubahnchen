import React from 'react'

import { Pinch } from '../pinch'

// import { Pinch } from '../pinch/01-react-zoom-pan-pinch'
import { SvgFromCodeDragCircles } from './svg-from-code'

export const PinchedSvgFromCode = () => {
  return (
    <>
      <Pinch>
        <SvgFromCodeDragCircles />
      </Pinch>
    </>
  )
}
