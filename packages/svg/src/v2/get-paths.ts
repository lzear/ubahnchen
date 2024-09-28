import { svgPathProperties } from 'svg-path-properties'
import { DOMParser } from 'xmldom'

import type { Point } from '@ubahnchen/utils'

import { toTuple } from './util'

export type PathFromSvg = {
  id: string
  color: string
  d: string
  totalLength: number
  getPointAtLength: (fractionLength: number) => Point
}

export const getPaths = (svg: string): PathFromSvg[] =>
  [
    ...new DOMParser()
      .parseFromString(svg, 'image/svg+xml')
      .querySelectorAll('path'),
  ].map((path) => {
    const id = path.getAttribute('id')
    const color = path.getAttribute('fill')
    const d = path.getAttribute('d')
    if (!id || !color || !d) throw new Error('Invalid path element')
    const pathProperties = new svgPathProperties(d)
    return {
      id,
      color,
      d,
      totalLength: pathProperties.getTotalLength(),
      getPointAtLength: (l) => toTuple(pathProperties.getPointAtLength(l)),
    }
  })
