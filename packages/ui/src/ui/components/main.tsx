import React from 'react'
import { Live } from '../canvas/live'
import { Planned } from '../canvas/planned'
import { useStore } from '../store/store'
import Canvas from '../canvas/canvas'
import { TopRight } from './top-right'
import { BottomLeft } from './bottom-left'
import { TopLeft } from './top-left'

const Main: React.FC = () => {
  const liveMode = useStore((s) => s.liveMode)
  return (
    <>
      <Canvas />
      <TopRight />
      <BottomLeft />
      <TopLeft />
      {liveMode ? <Live /> : <Planned />}
    </>
  )
}

export default Main
