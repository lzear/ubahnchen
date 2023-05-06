import React from 'react'
import { Button } from '@chakra-ui/react'
import { useItineraries } from '../canvas/lines-stops'
import { Routes } from './routes'
import { InvalidTrip } from './invalid-trip'
import { Lines } from './lines'
import { runAllPaths } from './run-all-paths'

export const Development = () => {
  // const stops = useStops()
  const lineStops = useItineraries()
  return (
    <div className="container">
      <Button onClick={() => runAllPaths(lineStops)}>Runall</Button>
      <InvalidTrip />
      <Lines />
      <Routes />
      <style jsx>{`
        .container {
          position: absolute;
          bottom: 0;
          right: 0;
          left: 0;
        }
      `}</style>
    </div>
  )
}
