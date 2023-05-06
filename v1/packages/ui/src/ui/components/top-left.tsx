import React from 'react'
import { Trip } from './trip'

export const TopLeft: React.FC = () => {
  return (
    <div id="top-left">
      <Trip />
      <style jsx>{`
        #top-left {
          pointer-events: none;
          position: absolute;
          top: 0;
          left: 0;
          padding: 10px;
          max-height: 100%;
          display: flex;
          flex-direction: column;
        }
      `}</style>
    </div>
  )
}
