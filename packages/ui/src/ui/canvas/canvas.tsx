import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import Paper from 'paper'
import { Spinner, useColorMode } from '@chakra-ui/react'
import { useStore } from '../store/store'
import { useHidpi } from '../store/settings'
import { Oninit, useOnInit } from '../store/maps'
import { useUrlParameterMap } from '../store/use-url-parameters'
import { insertMaps } from '../paper/insert-maps'
import { MapName } from '../../lib/enums'
import { onKeys } from './use-keys'
import { doShowStationNames } from './station-names'
import { paperView } from './paper-view'
import { Hooks } from './hooks'

const useDisplayStationNames = (loading: boolean) => {
  const { colorMode } = useColorMode()
  const displayStationNames = useStore((s) => s.displayStationNames)
  useEffect(() => {
    if (!loading && displayStationNames) doShowStationNames(colorMode)
  }, [colorMode, displayStationNames, loading])
}

const sssetup = async (
  canvas: HTMLCanvasElement,
  onInit: Oninit,
  callback: (v: () => void) => void,
  mapName: MapName,
) => {
  Paper.setup(canvas) // as unknown as PaperScope
  const majO = await insertMaps(mapName)
  onInit(majO)
  const rmListener = onKeys()
  callback(rmListener)
}

const Canvas: React.FC = () => {
  const map = useUrlParameterMap()
  const canvasReference = useRef<HTMLCanvasElement>(null)
  const rmListenersReference = useRef<() => void>()
  const calledSetup = useRef<boolean | null>(null)
  const hidpi = useHidpi()
  const onInit = useOnInit()
  const [loading, setLoading] = useState(true)
  useDisplayStationNames(loading)

  useEffect(() => {
    return () => {
      rmListenersReference.current?.()
      const view = paperView()
      // eslint-disable-next-line unicorn/no-null
      if (view) view.onFrame = null
      // rmListerners()
      // Paper.project?.clear()
      // Paper.project?.remove()
      onInit()
      // canvas.remove()
    }
  }, [onInit])
  useLayoutEffect(() => {
    const canvas = canvasReference.current
    if (canvas && calledSetup.current !== hidpi) {
      calledSetup.current = hidpi
      void sssetup(
        canvas,
        onInit,
        (l) => {
          rmListenersReference.current?.()
          rmListenersReference.current = l
          setLoading(false)
        },
        map,
      )
    }
  }, [hidpi, map, onInit])

  return (
    <>
      <canvas
        key={hidpi ? 'on' : 'off'}
        // @ts-ignore
        resize="true"
        data-paper-resize
        hidpi={hidpi ? 'on' : 'off'}
        ref={canvasReference}
        id="canvas"
      />
      {loading ? (
        <Spinner
          position="fixed"
          margin="auto"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
          size="xl"
        />
      ) : //eslint-disable-next-line unicorn/no-null
      null}
      {/*<Development />*/}
      <Hooks />
      <style jsx>{`
        canvas {
          width: 100vw;
          height: 100%;
        }
      `}</style>
    </>
  )
}

export default Canvas
