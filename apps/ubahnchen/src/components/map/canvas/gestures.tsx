'use client'

import type { RefObject } from 'react'
import { useEffect, useRef } from 'react'
import {
  createUseGesture,
  dragAction,
  pinchAction,
  wheelAction,
} from '@use-gesture/react'
import _ from 'lodash'
import * as paper from 'paper'
import Paper from 'paper'

import { hidpi } from '@/components/map/canvas/consts'

const ZOOM_SPEED = 0.002
const ZOM_MAX = 200
const ZOOM_MIN = 0.05

const useGesture = createUseGesture([dragAction, pinchAction, wheelAction])

const clampZoom = (z: number) => _.clamp(z, ZOOM_MIN, ZOM_MAX)

const setCenter = (newCenter: paper.Point, intentional: boolean) => {
  console.debug(`intentional`, intentional)
  const view = Paper.view
  if (view) view.center = newCenter
}

export const useGestures = (ref: RefObject<HTMLCanvasElement>) => {
  const v0 = useRef(0)

  const hidpiFactor = hidpi ? 2 : 1

  // https://use-gesture.netlify.app/docs/gestures/#about-the-pinch-gesture
  useEffect(() => {
    const preventDefault = (e: Event) => e.preventDefault()
    document.addEventListener('gesturestart', preventDefault)
    document.addEventListener('gesturechange', preventDefault)

    return () => {
      document.removeEventListener('gesturestart', preventDefault)
      document.removeEventListener('gesturechange', preventDefault)
    }
  }, [])

  useGesture(
    {
      onDrag: (state) => {
        const view = Paper.view
        if (view) {
          const newCenter = view.center.subtract(
            new paper.Point(state.delta).multiply(1 / view.zoom / hidpiFactor),
          )
          setCenter(newCenter, state.intentional)
        }
      },
      onPinch: (state) => {
        return
        const view = Paper.view
        if (view) view.zoom = clampZoom(state.offset[0] * v0.current)
      },
      onPinchStart: (state) => {
        const view = Paper.view
        if (view) v0.current = view.zoom / state.offset[0]
      },
      onWheel: (state) => {
        const view = Paper.view
        if (view) {
          const { event, delta } = state
          const oldZoom = view.zoom
          const newZoom = clampZoom(view.zoom * (1 - delta[1] * ZOOM_SPEED))
          const beta = oldZoom / newZoom
          if (beta === 1) return
          const [x, y] = [
            event.offsetX / hidpiFactor,
            event.offsetY / hidpiFactor,
          ]
          const mousePosition = new paper.Point(x, y)
          const mpos = paper.view.viewToProject(mousePosition)
          const ctr = paper.view.center
          const pc = mpos.subtract(ctr)
          const offset = mpos.subtract(pc.multiply(beta)).subtract(ctr)
          paper.view.zoom = newZoom
          paper.view.center = paper.view.center.add(offset)
        }
      },
    },
    {
      // pinch: { pinchOnWheel: false },
      target: ref,
      drag: { threshold: 3, triggerAllEvents: true },
    },
  )
}
