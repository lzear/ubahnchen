'use client'

import { Box } from '@chakra-ui/react'
import dynamic from 'next/dynamic'

import { SelectRouteType } from './select-route-type'

const MapContainer = dynamic(() => import('./map-container'), {
  loading: () => <p>loading...</p>,
  ssr: false,
})

export const MapCity = () => {
  return (
    <>
      <MapContainer
        // center={[52.52, 13.4]}
        // zoom={10}
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
        }}
      >
        {/*<TileLayer*/}
        {/*  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'*/}
        {/*  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"*/}
        {/*/>*/}
      </MapContainer>

      <Box
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          zIndex: 400,
          display: 'flex',
          flexDirection: 'column',
          maxWidth: 200,
        }}
      >
        <SelectRouteType></SelectRouteType>
      </Box>
    </>
  )
}
