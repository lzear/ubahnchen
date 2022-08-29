import React from 'react'
import { Main as MMM } from '../ui/dynamic'

export const Main2: React.FC = () => {
  return (
    <>
      <main>
        <MMM />
      </main>
      <style jsx>{`
        main {
          touch-action: none;
          height: 100vh;
          width: 100vw;
          overflow: hidden;
          position: absolute;
          top: 0;
          left: 0;
          bottom: 0;
          right: 0;
        }
      `}</style>
    </>
  )
}
