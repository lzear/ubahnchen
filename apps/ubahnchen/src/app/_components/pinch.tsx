'use client'

import React, { useRef } from 'react'
import type { ReactZoomPanPinchRef } from 'react-zoom-pan-pinch'
import { TransformComponent, TransformWrapper } from 'react-zoom-pan-pinch'
import { atom, useAtom } from 'jotai'

export const pinchScaleAtom = atom(1)
export const pinchScaleRef = { current: 1 }

const handlePinch = atom(1, (get, set, arg: number) => {
  pinchScaleRef.current = arg
  set(pinchScaleAtom, arg)
})

type Props = { children: React.ReactNode }

export const Pinch = ({ children }: Props) => {
  // const [pinchScale, setPinchScale] = useAtom(pinchScaleAtom)
  const [pinchScale, setPinchScale] = useAtom(handlePinch)
  const transformComponentReference = useRef<ReactZoomPanPinchRef | null>(null)
  return (
    <div>
      <TransformWrapper
        initialScale={pinchScale}
        ref={transformComponentReference}
        limitToBounds={false}
        onZoom={({ state }) => setPinchScale(state.scale)}
        minScale={0.1}
      >
        {() => (
          <React.Fragment>
            <TransformComponent
              wrapperStyle={{ overflow: 'visible' }}
              contentStyle={{ position: 'relative' }}
            >
              {children}
            </TransformComponent>
          </React.Fragment>
        )}
      </TransformWrapper>
    </div>
  )
}
