import fs from 'node:fs'

import type { GeoProjection } from 'd3-geo'
import {
  geoAlbers,
  geoAzimuthalEqualArea,
  geoAzimuthalEquidistant,
  geoBounds,
  geoMercator,
  geoPath,
} from 'd3-geo'
import type { FeatureCollection } from 'geojson'
import _ from 'lodash'

import type { City } from '@ubahnchen/cities'
import { P } from '@ubahnchen/cities/node'

const MAX_DIMENSION = 100

const projections = (geojson: FeatureCollection) => {
  const [[x0, y0], [x1, y1]] = geoBounds(geojson)
  console.log('Bounds:', x0, y0, x1, y1)

  const lat = (y0 + y1) / 2
  const lon = (x0 + x1) / 2
  return [
    {
      name: 'geoMercator',
      value: geoMercator().fitSize([MAX_DIMENSION, MAX_DIMENSION], geojson),
    },
    {
      name: 'geoAzimuthalEqualArea',
      value: geoAzimuthalEqualArea().fitSize(
        [MAX_DIMENSION, MAX_DIMENSION],
        geojson,
      ),
    },
    {
      name: 'geoAzimuthalEquidistant',
      value: geoAzimuthalEquidistant().fitSize(
        [MAX_DIMENSION, MAX_DIMENSION],
        geojson,
      ),
    },
    {
      name: 'geoAlbers',
      value: geoAlbers()
        .rotate([-lon, -lat])
        .fitSize([MAX_DIMENSION, MAX_DIMENSION], geojson),
    },
  ]
}

const getGeojson = async (city: City, map: string) => {
  const geojsonString = await fs.promises.readFile(
    `${P(city, map).BUILD.DIR}/straight-lines.geojson`,
    'utf8',
  )
  const geojson = JSON.parse(geojsonString) as FeatureCollection
  return geojson
}

export const geojsonToSvg = async (city: City, map: string) => {
  const geojson = await getGeojson(city, map)

  for (const projection of projections(geojson)) {
    await geojsonToSvgProjection(city, map, projection)
  }
}

const geojsonToSvgProjection = async (
  city: City,
  map: string,
  projection: { name: string; value: GeoProjection },
) => {
  const geojson = await getGeojson(city, map)

  const pProjection = geoPath().projection(projection.value)

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${MAX_DIMENSION} ${MAX_DIMENSION}">
  ${geojson.features
    .map((feature) => {
      switch (feature.geometry.type) {
        case 'Point': {
          const [lon, lat] = feature.geometry.coordinates as [number, number]
          const [x, y] = projection.value([lon, lat])!
          return `<circle cx="${x}" cy="${y}" r="0.5" fill="black" opacity="0.6" />`
        }
        case 'LineString': {
          const color = feature.properties?.color as string | undefined
          if (!color) throw new Error('Missing color ')
          const path = pProjection(feature)
          if (!path) throw new Error('Path is empty')
          return `<path d="${path}" stroke="${color}" stroke-width="0.4" opacity="0.4" />`
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
    `${P(city, map).BUILD.DIR}/straight-lines-${_.kebabCase(projection.name)}.svg`,
    svg,
  )

  return svg
}
