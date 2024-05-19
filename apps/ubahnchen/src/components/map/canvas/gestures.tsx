'use client'

import { useRef } from 'react'
import {
  createUseGesture,
  dragAction,
  pinchAction,
  wheelAction,
} from '@use-gesture/react'
import _ from 'lodash'
import * as paper from 'paper'
import Paper from 'paper'

const useGesture = createUseGesture([dragAction, pinchAction, wheelAction])

const clampZoom = (z: number) => _.clamp(z, 0.05, 200)

const setCenter = (center: paper.Point, _stopFollow = true) => {
  const view = Paper.view
  if (view) view.center = center
  // if (stopFollow) {
  //   const { setFollowing } = useStore.getState()
  //   setFollowing(false)
  // }
}

export const useGestures = () => {
  const v0 = useRef(0)
  useGesture(
    {
      onDrag: (state) => {
        const view = Paper.view
        if (view)
          return setCenter(
            view.center.subtract(
              new paper.Point(state.delta).multiply(1 / view.zoom),
            ),
            state.intentional,
          )
      },
      onPinch: (state) => {
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
          // https://codepen.io/hichem147/pen/dExxNK?editors=0010

          const { event, delta } = state

          const mousePosition = new paper.Point(event.offsetX, event.offsetY)
          const oldZoom = view.zoom
          const newZoom = clampZoom(view.zoom * (1 - delta[1] * 0.001))
          const beta = oldZoom / newZoom

          //viewToProject: gives the coordinates in the Project space from the Screen Coordinates
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
      target: typeof window === 'undefined' ? undefined : window,
      drag: { threshold: 3, triggerAllEvents: true },
      // pinch: { eventOptions: { passive: true } },
      // wheel: { eventOptions: { passive: true } },
    },
  )
}
