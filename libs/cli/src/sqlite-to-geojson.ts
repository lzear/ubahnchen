import fs from 'node:fs'

import type { City } from '@ubahnchen/cities'
import { MapQueries, P } from '@ubahnchen/cities/node'

/**
 * Make a GeoJSON file from a city and a map
 * This can be used to visualize the city's map
 * for example at https://geojson.io/
 */

export const makeGeoJSON = async (city: City, map: string) => {
  const mapQueries = new MapQueries(city)
  const { stops, stopPairs } = mapQueries.usedStops(map, true)
  const geoJsonStops = stops.map((stop) => ({
    type: 'Feature' as const,
    properties: { stop_id: stop.stop_id, stop_name: stop.stop_name },
    geometry: {
      type: 'Point' as const,
      coordinates: [stop.stop_lon, stop.stop_lat],
    },
  }))
  const stopById = new Map(stops.map((stop) => [stop.stop_id, stop]))
  const geoJsonLines = stopPairs.map(({ stop_pairs, routes }) => ({
    type: 'Feature' as const,
    properties: { stop_pairs, routes },
    geometry: {
      type: 'LineString' as const,
      coordinates: [
        [
          stopById.get(stop_pairs.stop_id_1)!.stop_lon,
          stopById.get(stop_pairs.stop_id_1)!.stop_lat,
        ],
        [
          stopById.get(stop_pairs.stop_id_2)!.stop_lon,
          stopById.get(stop_pairs.stop_id_2)!.stop_lat,
        ],
      ],
    },
  }))
  const geoJson = {
    type: 'FeatureCollection' as const,
    features: [...geoJsonStops, ...geoJsonLines],
  }
  await fs.promises.mkdir('./data', { recursive: true })
  return fs.promises.writeFile(
    `${P(city, map).BUILD.DIR}/straight-lines.geojson`,
    JSON.stringify(geoJson, null, 2),
  )
}
