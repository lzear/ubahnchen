'use client'

import React, { useEffect, useRef } from 'react'
import { animated, useSpring } from '@react-spring/web'
import {
  createUseGesture,
  dragAction,
  pinchAction,
  wheelAction,
} from '@use-gesture/react'
import type { EventTypes } from '@use-gesture/vanilla'
import { useAtom } from 'jotai'

import { useLogMount } from '@/utils/use-log-mount'

import { isDraggingAtom } from '../show-svg/draggable-circle/02-react'

const useGesture = createUseGesture([dragAction, pinchAction, wheelAction])

type Props = { children: React.ReactNode }
export const pinchScaleRef = { current: 1 }

export const Pinch = ({ children }: Props) => {
  useLogMount('pinch')

  const [springs] = useSpring(
    () => ({
      scale: pinchScaleRef.current,
      x: 0,
      y: 0,
    }),
    [],
  )

  const divRef = useRef<HTMLDivElement>(null)
  const [isDragging] = useAtom(isDraggingAtom)

  useEffect(() => {
    const preventDefault = (e: Event) => e.preventDefault()
    document.addEventListener('gesturestart', preventDefault)
    document.addEventListener('gesturechange', preventDefault)
    return () => {
      document.removeEventListener('gesturestart', preventDefault)
      document.removeEventListener('gesturechange', preventDefault)
    }
  }, [])

  const transform = (
    event: EventTypes['pinch'],
    delta: number,
    factor = 0.001,
  ) => {
    const oldZoom = springs.scale.get()
    const newZoom = Math.max(0.1, oldZoom * (1 - delta * factor))
    if (!(oldZoom !== newZoom && 'offsetX' in event && 'offsetY' in event))
      return
    void springs.x.set(springs.x.get() + event.offsetX * (oldZoom - newZoom))
    void springs.y.set(springs.y.get() + event.offsetY * (oldZoom - newZoom))
    void springs.scale.set(newZoom)
    pinchScaleRef.current = newZoom
  }

  useGesture(
    {
      onDrag: ({ delta: [x, y] }) => {
        if (!isDragging) {
          void springs.x.set(springs.x.get() + x)
          void springs.y.set(springs.y.get() + y)
        }
      },
      onPinch: ({ delta, event }) => {
        event.stopPropagation()
        transform(event, delta[0])
      },
      onWheel: ({ event, delta }) => transform(event, delta[1]),
    },
    { target: divRef },
  )

  return (
    <animated.div
      ref={divRef}
      style={{
        x: springs.x,
        y: springs.y,
        scale: springs.scale,
        position: 'relative',
        overflow: 'visible',
        touchAction: 'none',
        transformOrigin: '0 0',
      }}
    >
      {children}
    </animated.div>
  )
}
