'use client'

import { useContext, useEffect, useRef } from 'react'
import { useAtom } from 'jotai'

import { SourceContext } from '../source-code/source-context'

import { useDraggableCircle } from './draggable-circle/01-js'

export const SvgFromCodeDragCircles = () => {
  const { code } = useContext(SourceContext)
  const svgContainerRef = useRef<HTMLDivElement>(null)

  const { circle1 } = useDraggableCircle(svgContainerRef, code)

  const [pos1] = useAtom(circle1)

  useEffect(() => {
    console.log('Circle 1 position changed:', pos1)
    // You can perform any action here based on the new position
  }, [pos1])

  return (
    <div
      ref={svgContainerRef}
      className="[&>svg]:overflow-visible [&>svg]:outline [&>svg]:outline-1 [&>svg]:outline-gray-700"
      dangerouslySetInnerHTML={{ __html: code }}
    />
  )
}
