import React from 'react'
import dynamic from 'next/dynamic'
import { useStore } from '../store/store'
import { Spacer } from '../../lib/spacer'
import { Settings } from './settings'
import { DarkModeToggle } from './dark-mode-toggle'
import { ToggleUsu } from './toggle-usu'
import { Speed } from './speed'
import { ToggleLiveMode } from './toggle-live-mode'
import { Info } from './info'

const Clock = dynamic(() => import('./clock'), {
  ssr: false,
})

export const TopRight: React.FC = () => {
  const liveMode = useStore(({ liveMode }) => liveMode)
  return (
    <div className="top-right">
      <div className="grid-icons">
        <Settings />
        <Info />
        <ToggleUsu />
        <DarkModeToggle />
      </div>
      <Spacer y={12} />
      <ToggleLiveMode />
      <Spacer y={12} />
      <Clock />
      <Spacer y={12} />
      {/* eslint-disable-next-line unicorn/no-null */}
      {liveMode ? null : <Speed />}
      <style jsx>{`
        .grid-icons {
          display: grid;
          justify-items: center;
          align-items: center;
          grid-template-columns: 1fr 1fr;
          gap: 10px 0;
        }
        .top-right {
          pointer-events: none;
          position: absolute;
          top: 10px;
          right: 10px;
          max-height: 100%;
          display: flex;
          flex-direction: column;
        }
      `}</style>
    </div>
  )
}
