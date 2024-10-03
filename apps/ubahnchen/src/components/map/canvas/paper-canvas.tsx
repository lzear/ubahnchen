'use client'

import React from 'react'

import type { MapPaths } from '@ubahnchen/cities/node'

import { hidpi } from './consts'
import { usePaper } from './use-paper'

export const PaperCanvas = ({ mapPaths }: { mapPaths: MapPaths }) => {
  const { canvasReference } = usePaper({ mapPaths })
  return (
    <canvas
      className="fixed inset-0 h-dvh touch-none"
      // key={hidpi ? 'on' : 'off'}
      // @ts-expect-error
      resize="true"
      data-paper-resize
      hidpi={hidpi ? 'on' : 'off'}
      ref={canvasReference}
      id="canvas"
    />
  )
}

export default PaperCanvas
