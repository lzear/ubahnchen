'use client'

import { useState } from 'react'

import { pointsExtent } from '@/app/_components/geometry/utils'
import { Pinch } from '@/app/_components/pinch'
import type { City, StopPair, StopsPositions } from '@ubahnchen/cities'

import { SvgSource } from './svg-source'

type Props = {
  city: City
  map: string
  routeName?: string
  targets: StopsPositions
  stopPairs: StopPair[]
}

export const PlacePathsClient = ({
  city,
  map,
  routeName,
  targets,
  stopPairs,
}: Props) => {
  const [path, setPath] = useState<SVGPathElement | null>(null)
  const stopsPlaced = Object.values(targets)
  const extent = pointsExtent(stopsPlaced.map((t) => t.point))
  const width = extent[1][0] - extent[0][0]
  const height = extent[1][1] - extent[0][1]

  return (
    <>
      <Pinch>
        <svg height={height} width={width} className="absolute top-0">
          {stopsPlaced.map((t) => (
            <circle
              key={t.stop_id}
              cx={t.point[0]}
              cy={t.point[1]}
              r={5}
              fill="red"
            />
          ))}
          {stopPairs
            .filter((s) => !routeName || s.routes.route_name === routeName)
            .map((pair) => {
              const source = targets[pair.stop_pairs.stop_id_1]
              const target = targets[pair.stop_pairs.stop_id_2]
              if (!source || !target) return null
              return (
                <line
                  key={pair.stop_pairs.idx}
                  x1={source.point[0]}
                  y1={source.point[1]}
                  x2={target.point[0]}
                  y2={target.point[1]}
                  stroke="black"
                  strokeWidth={25}
                />
              )
            })}
        </svg>
        <SvgSource
          city={city}
          map={map}
          className="absolute"
          onClick={(e) => {
            if (path) {
              path.style.stroke = 'blue'
            }
            const target = e.target as SVGElement
            if (target instanceof SVGPathElement) {
              setPath(target)
              // target.setAttribute('stroke', 'red')
              // target.setAttribute('fill', 'red')
              target.style.stroke = 'red'
            }
          }}
        />
      </Pinch>
    </>
  )
}
