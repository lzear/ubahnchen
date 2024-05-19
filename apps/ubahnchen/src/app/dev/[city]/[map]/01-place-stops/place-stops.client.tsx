'use client'

import React, { useState } from 'react'

import { Pinch } from '@/components/dev/client/pinch'
import { SvgSource } from '@/components/dev/client/place-stops/svg-source'
import { SvgTarget } from '@/components/dev/client/place-stops/svg-target'
import type { Size } from '@/components/dev/client/place-stops/types'
import type { Point } from '@/services/dev/geometry/utils'
import type { City, Stop, StopPair, StopsPositions } from '@ubahnchen/cities'

type Props = {
  city: City
  stopById: Record<string, Stop>
  stopPairs: StopPair[]
  map: string
  targets: StopsPositions
}

export const findMinIndex = <T,>(array: T[], func: (item: T) => number) => {
  let bestScore = Number.POSITIVE_INFINITY
  let bestIndex = -1

  for (const [index, item] of array.entries()) {
    if (func(item) < bestScore) {
      bestScore = func(item)
      bestIndex = index
    }
  }
  return bestIndex
}

export const findClosestIdx = (point: Point, points: Point[]) =>
  findMinIndex(points, (p) => {
    const dx = p[0] - point[0]
    const dy = p[1] - point[1]
    return dx * dx + dy * dy
  })

export const PlaceStopsClient = ({
  city,
  map,
  stopById,
  stopPairs,
  targets,
}: Props) => {
  const [size, setSize] = useState<Size | null>(null)
  const [candidates, setCandidates] = useState<Point[] | null>(null)
  return (
    <div>
      <Pinch>
        <div>
          <SvgSource
            city={city}
            map={map}
            setSize={setSize}
            setCandidates={setCandidates}
          />
          {size && candidates && (
            <SvgTarget
              city={city}
              map={map}
              targets={targets}
              candidates={candidates}
              stopById={stopById}
              stopPairs={stopPairs}
              size={size}
            />
          )}
        </div>
      </Pinch>
    </div>
  )
}
