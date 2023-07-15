'use client'

import React, { useMemo, useRef, useTransition } from 'react'
import type { ReactZoomPanPinchRef } from 'react-zoom-pan-pinch'
import { TransformComponent, TransformWrapper } from 'react-zoom-pan-pinch'
import { useAtom } from 'jotai'
import dynamic from 'next/dynamic'

import type { City } from '@ubahnchen/cities'

import type { Stop } from '../../server/get-stops'
import { opacityAtom } from '../../server/opacity'
import { lockAtom } from '../../server/toggle-lock'
import { ignorePointer } from '../../server/toggle-pointer'

import { recordStopPosition } from './actions'
import Svg from './source.svg'
import { getCenter } from './svg-center'

type Props = {
  city: City
  map: string
  stopToClick?: Stop
}

const importMap = {
  berlin: {
    u: () => import('@ubahnchen/cities/berlin/u/source.svg'),
  },
  // Include other cities here...
}
export const Ssvg = ({ city, map, stopToClick }: Props) => {
  console.log('🦺 antoinelog Svg', Svg)
  console.log('🦺 antoinelog city, map', city, map)
  const Mmmm6: React.ComponentType<React.SVGProps<SVGSVGElement>> = useMemo(
    // @ts-ignore
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument,@typescript-eslint/no-unsafe-member-access
    () => dynamic(importMap[city][map]),
    [city, map],
  )
  const transformComponentReference = useRef<ReactZoomPanPinchRef | null>(null)
  const [opacity] = useAtom(opacityAtom)
  const [locked] = useAtom(lockAtom)
  const [ignoredPointer] = useAtom(ignorePointer)
  const _zoomToImage = () => {
    if (transformComponentReference.current) {
      const { zoomToElement } = transformComponentReference.current
      zoomToElement('imgExample')
    }
  }
  const [isPending, startTransition] = useTransition()
  return (
    <div
    // className="pointer-events-none absolute inset-0"
    // className="absolute inset-0"
    // style={{ position: 'absolute', zIndex: 99_999 }}
    >
      {isPending && <div className="absolute">looooading...</div>}
      <TransformWrapper
        disabled={locked}
        initialScale={1}
        initialPositionX={200}
        initialPositionY={100}
        ref={transformComponentReference}
        limitToBounds={false}
        minScale={0.1}
      >
        {(utils, ...r) => {
          console.log('🦺 antoinelog utils', utils)
          console.log('🦺 antoinelog r', r)

          return (
            <React.Fragment>
              <TransformComponent
                wrapperStyle={{ overflow: 'visible' }}
                contentStyle={{
                  // background: 'yellow',
                  // opacity,
                  position: 'relative',
                  zIndex: 1000,
                  pointerEvents: ignoredPointer ? 'none' : 'auto',
                }}
              >
                <div
                  style={
                    {
                      // background: 'yellow',
                      // opacity,
                      // position: 'relative',
                      // zIndex: 99_999,
                    }
                  }
                >
                  <Mmmm6
                    style={{ opacity }}
                    onClick={(event) => {
                      console.log('🦺 antoinelog 234', 234)
                      console.log('🦺 antoinelog event.target', event.target)

                      console.log(
                        '🦺 antoinelog getCenter(event.target)',
                        // @ts-ignore whatever
                        getCenter(event.target),
                      )
                      // @ts-ignore whatever
                      const target: SVGSVGElement = event.target
                      stopToClick &&
                        startTransition(async () => {
                          await recordStopPosition({
                            city,
                            map,
                            id: stopToClick.stop_id,
                            name: stopToClick.stop_name,
                            position: getCenter(target),
                          })
                        })
                      // formReference.current?.requestSubmit(
                      //   buttonReference.current,
                      // )
                    }}
                  />
                </div>
              </TransformComponent>
            </React.Fragment>
          )
        }}
      </TransformWrapper>
    </div>
  )
}
