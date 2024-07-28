import fs from 'node:fs'

import type { FeatureCollection } from 'geojson'

import type { City } from '@ubahnchen/cities'
import { P } from '@ubahnchen/cities/node'

const MAX_DIMENSION = 100 // pixels

export const geojsonToSvg = async (city: City, map: string) => {
  const geojsonString = await fs.promises.readFile(
    `${P(city, map).BUILD.DIR}/straight-lines.geojson`,
    'utf8',
  )
  const geojson = JSON.parse(geojsonString) as FeatureCollection

  const bounds = {
    minX: Infinity,
    minY: Infinity,
    maxX: -Infinity,
    maxY: -Infinity,
  }

  for (const feature of geojson.features)
    if (feature.geometry.type === 'Point') {
      const [x, y] = feature.geometry.coordinates
      bounds.minX = Math.min(bounds.minX, x!)
      bounds.minY = Math.min(bounds.minY, y!)
      bounds.maxX = Math.max(bounds.maxX, x!)
      bounds.maxY = Math.max(bounds.maxY, y!)
    }

  const scale = Math.min(
    MAX_DIMENSION / (bounds.maxX - bounds.minX),
    MAX_DIMENSION / (bounds.maxY - bounds.minY),
  )

  const transform = (x: number, y: number) => {
    const cx = (bounds.minX + bounds.maxX) / 2
    const cy = (bounds.minY + bounds.maxY) / 2

    const p = [
      (x - cx) * scale + MAX_DIMENSION / 2,
      (y - cy) * scale + MAX_DIMENSION / 2,
    ]

    // flip y
    return [p[0], MAX_DIMENSION - p[1]!]
  }

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${MAX_DIMENSION} ${MAX_DIMENSION}">
  ${geojson.features
    .map((feature) => {
      switch (feature.geometry.type) {
        case 'Point': {
          const [x, y] = transform(
            feature.geometry.coordinates[0]!,
            feature.geometry.coordinates[1]!,
          )
          return `<circle cx="${x}" cy="${y}" r="0.5" fill="black" opacity="0.6" />`
        }
        case 'LineString': {
          const [x1, y1] = transform(
            feature.geometry.coordinates[0]![0]!,
            feature.geometry.coordinates[0]![1]!,
          )
          const [x2, y2] = transform(
            feature.geometry.coordinates[1]![0]!,
            feature.geometry.coordinates[1]![1]!,
          )
          const color = feature.properties?.color as string | undefined
          if (!color) throw new Error('Missing color ')
          return `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${color}" stroke-width="0.4" opacity="0.4" />`
        }
        default: {
          throw new Error('Unsupported geometry type')
        }
      }
    })
    .join('\n')}
</svg>
`

  await fs.promises.writeFile(
    `${P(city, map).BUILD.DIR}/straight-lines.svg`,
    svg,
  )

  return svg
}
