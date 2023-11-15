import type { ComponentProps } from 'react'
import React, { useEffect, useRef } from 'react'

import type { City } from '@ubahnchen/cities'

import type { Point } from '../../../app/_components/geometry/utils'
import type { Stop } from '../../../app/_server/gtfs/types'
import { getCenter } from '../../../app/[city]/svg-center'
import { findClosestIdx } from '../../../app/dev/[city]/[map]/01-place-stops/place-stops.client'
import { svgs } from '../../../app/dev/svgs'

type Props = {
  city: City
  map: string
  setSize: (size: { width: number; height: number }) => void
  setCandidates: (points: Point[]) => void
  stopToClick?: Stop
} & ComponentProps<'svg'>

export const SvgSource = ({ city, map, setSize, setCandidates }: Props) => {
  const svgContainerRef = useRef<HTMLDivElement | null>(null)

  const ImportedSvg = svgs[city][map].placePoints

  useEffect(() => {
    const svg = svgContainerRef.current?.getElementsByTagName('svg')[0]

    const width = svg?.width.baseVal.value
    const height = svg?.height.baseVal.value

    if (width && height) setSize({ width, height })
    else console.error('No width or height found in SVG')

    if (svg) {
      const svgBount = svg.getBoundingClientRect()
      setCandidates(
        findCandidates(svg).map((p) => [p[0] - svgBount.x, p[1] - svgBount.y]),
      )
    }
  }, [city, map, setCandidates, setSize])

  return (
    <div ref={svgContainerRef} className="relative">
      <ImportedSvg />
    </div>
  )
}

const findElementCenters = (svg: SVGSVGElement) => {
  const rects = [...svg.querySelectorAll('rect')]
  const circles = [...svg.querySelectorAll('circle')]
  const ellipses = [...svg.querySelectorAll('ellipse')]
  const p = [...svg.querySelectorAll('path')]
  return [...rects, ...circles, ...ellipses, ...p].map((el) => getCenter(el))
}

const findCandidates = (svg: SVGSVGElement, noNeighbors: boolean = false) => {
  const centers = findElementCenters(svg)

  if (!noNeighbors) return centers

  const candidates: Point[] = []

  for (const center of centers) {
    const minIdx = findClosestIdx(center, candidates)
    if (minIdx === -1) {
      candidates.push(center)
      continue
    }
    const closestCandaite = candidates[minIdx]
    const distance = Math.hypot(
      closestCandaite[0] - center[0],
      closestCandaite[1] - center[1],
    )
    if (distance > 10) {
      candidates.push(center)
    }
  }
  return candidates
}
