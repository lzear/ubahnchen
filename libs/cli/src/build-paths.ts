import fs from 'node:fs'

import type { City } from '@ubahnchen/cities'
import { cities } from '@ubahnchen/cities'
import { mapAsset, MapAssetName, MapQueries, P } from '@ubahnchen/cities/node'
import { drizzleTables, getDatabase } from '@ubahnchen/database'
import { computeDijkstra, extractSVGPaths } from '@ubahnchen/svg'

export const buildPaths = async (c: City, m?: string) => {
  const database = getDatabase(P(c).SQLITE.BIG).drizzled
  for (const map of m ? [m] : Object.keys(cities[c].maps)) {
    const svgPath = P(c, map).SRC.SVG.STEP_31_JUST_LINES
    const svgString = await fs.promises.readFile(svgPath, 'utf8')

    const paths = extractSVGPaths(svgString)
    const mapQueries = new MapQueries(c)
    const { stops, stopPairs } = mapQueries.usedStops(map, true)
    const stopById = new Map(stops.map((stop) => [stop.stop_id, stop]))
    const stopPositions = await mapAsset(
      c,
      map,
      MapAssetName.PLACE_STOPS,
    ).read()
    const itineraries = []

    for (const { stop_pairs } of stopPairs) {
      const stop1 = stopById.get(stop_pairs.stop_id_1)!
      const stop2 = stopById.get(stop_pairs.stop_id_2)!
      const pos1 = stopPositions[stop1.stop_id]!
      const pos2 = stopPositions[stop2.stop_id]!
      const path = computeDijkstra(pos1.point, pos2.point, paths, '#fff')
      const smallPath = path
        .filter((p) => p.type === 'Path')
        .map((p) => ({
          pathId: p.pathPoint.path.id,
          pathLength: p.pathPoint.pathLength,
        }))
      const withSkip: { pathId: string; pathLength: number }[] = []
      for (const p0 of smallPath) {
        const p1 = withSkip.at(-1)
        const p2 = withSkip.at(-2)
        if (p0.pathId === p1?.pathId && p0.pathId === p2?.pathId) {
          if (
            Math.sign(p0.pathLength - p1.pathLength) !==
            Math.sign(p1.pathLength - p2.pathLength)
          )
            throw new Error('Changed direction!')
          withSkip.pop()
        }
        withSkip.push(p0)
      }

      // if (withSkip.length === 0) throw new Error('No path found (l0)')
      if (withSkip.length === 0) console.log('No length?')

      if (withSkip.length % 2) throw new Error('Multiple paths found')

      const wp: { pathId: string; lengths: [number, number] }[] = []

      let length = 0
      for (let index = 0; index < withSkip.length; index += 2) {
        const p0 = withSkip[index]
        const p1 = withSkip[index + 1]
        if (!p0 || !p1) throw new Error('No path found (!p0 || !p1)')
        wp.push({ pathId: p0.pathId, lengths: [p0.pathLength, p1.pathLength] })
        length += Math.abs(p1.pathLength - p0.pathLength)
      }

      const itinerary = {
        stop1: stop1.stop_id,
        stop2: stop2.stop_id,
        length,
        paths: wp,
      }
      itineraries.push(itinerary)

      database
        .insert(drizzleTables.stopPairsSvgPaths)
        .values({
          stop_pair_idx: stop_pairs.idx,
          map,
          length,
          waypoints: JSON.stringify(wp),
        })
        .run()
    }
  }
}
