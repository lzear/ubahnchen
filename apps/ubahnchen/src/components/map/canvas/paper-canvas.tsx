'use client'

import React from 'react'

import { hidpi } from './consts'
import { usePaper } from './use-paper'

export const PaperCanvas = () => {
  const { canvasReference } = usePaper()
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
