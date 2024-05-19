'use client'

import React from 'react'

import { hidpi } from '@/components/map/canvas/consts'
import { usePaper } from '@/components/map/canvas/use-paper'
import type { MapPaths } from '@ubahnchen/cities/node'

export const PaperCanvas = ({ mapPaths }: { mapPaths: MapPaths }) => {
  const { canvasReference } = usePaper({ mapPaths })
  return (
    <canvas
      className="fixed top-0 left-0 bottom-0 right-0 inset-0 h-dvh l-lvh touch-none"
      // key={hidpi ? 'on' : 'off'}
      // @ts-ignore
      resize="true"
      data-paper-resize
      hidpi={hidpi ? 'on' : 'off'}
      ref={canvasReference}
      id="canvas"
    />
  )
}

export default PaperCanvas
