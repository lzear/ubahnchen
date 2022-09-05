import * as paper from 'paper'
import {
  createUseGesture,
  dragAction,
  pinchAction,
  wheelAction,
} from '@use-gesture/react'
import { useRef } from 'react'
import _ from 'lodash'
import { setCenter } from './set-center'
import { paperView } from './paper-view'

const useGesture = createUseGesture([dragAction, pinchAction, wheelAction])

const clampZoom = (z: number) => _.clamp(z, 0.05, 200)

export const useGestures = () => {
  const v0 = useRef(0)
  useGesture(
    {
      onDrag: (state) => {
        const view = paperView()
        if (view)
          return setCenter(
            view.center.subtract(
              new paper.Point(state.delta).multiply(1 / view.zoom),
            ),
            state.intentional,
          )
      },
      onPinch: (state) => {
        const view = paperView()
        if (view) view.zoom = clampZoom(state.offset[0] * v0.current)
      },
      onPinchStart: (state) => {
        const view = paperView()
        if (view) v0.current = view.zoom / state.offset[0]
      },
      onWheel: (state) => {
        const view = paperView()
        if (view)
          view.zoom = clampZoom(view.zoom * (1 - state.delta[1] * 0.001))
      },
    },
    {
      target: typeof window !== 'undefined' ? window : undefined,
      drag: { threshold: 3, triggerAllEvents: true },
      // pinch: { eventOptions: { passive: true } },
      // wheel: { eventOptions: { passive: true } },
    },
  )
}
