import { Spinner, Text } from '@chakra-ui/react'
import React from 'react'
import { useStore } from '../store/store'
import { monoFont } from '../../lib/chakra'

export const BottomLeft: React.FC = () => {
  const { liveMode, isLoadingTrains } = useStore((s) => ({
    liveMode: s.liveMode,
    isLoadingTrains: s.isLoadingTrains,
  }))
  const frameDelta = useStore(
    (s) => s.devInfo && `${s.frameDelta?.toFixed(1)} fps`,
  )
  return (
    <div id="bottom-left">
      {/* eslint-disable-next-line unicorn/no-null */}
      {!liveMode && isLoadingTrains ? <Spinner /> : null}
      <Text fontSize="xs" fontFamily={monoFont}>
        {frameDelta}
      </Text>
      {/* eslint-disable-next-line unicorn/no-null */}
      <style jsx>{`
        #bottom-left {
          display: flex;
          pointer-events: none;
          position: absolute;
          bottom: 10px;
          right: 10px;
          flex-direction: column;
          align-items: flex-end;
        }
      `}</style>
    </div>
  )
}
