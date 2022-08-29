import * as paper from 'paper'
import {
  createUseGesture,
  dragAction,
  pinchAction,
  wheelAction,
} from '@use-gesture/react'
import { useRef } from 'react'
import { setCenter } from './set-center'
import { paperView } from './paper-view'

const useGesture = createUseGesture([dragAction, pinchAction, wheelAction])

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
        if (view) view.zoom = state.offset[0] * v0.current
        // Paper.view.zoom = (z0.current * state.offset[0]) / o0.current
        // state.event.preventDefault()
        // state.event.stopPropagation()
      },
      onPinchStart: (state) => {
        // z0.current = Paper.view.zoom
        // o0.current = state.offset[0]

        const view = paperView()
        if (view) v0.current = view.zoom / state.offset[0]
      },
      onWheel: (state) => {
        // state.event.preventDefault()

        const view = paperView()
        if (view) view.zoom = view.zoom * (1 - state.delta[1] * 0.001)
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
