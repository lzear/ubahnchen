import fs from 'node:fs'

import { oraPromise } from 'ora'

import type { City, Stop, StopPair, StopsPositions } from '@ubahnchen/cities'
import { cities, getMap, logLineTag } from '@ubahnchen/cities'
import { MapAssetName, MapAssets, MapQueries, P } from '@ubahnchen/cities/node'
import { defaultTextPerf, successText } from '@ubahnchen/csv'
import type { ShortestPath } from '@ubahnchen/svg'
import { removeJumps } from '@ubahnchen/svg'
import { findShortestPathStr } from '@ubahnchen/svg/node'
import { Perf, wait } from '@ubahnchen/utils'

const findOnePath = ({
  stops,
  stopPair,
  stopsPositions,
  svgString,
  precision,
}: {
  stops: Stop[]
  stopPair: StopPair
  stopsPositions: StopsPositions
  svgString: string
  precision: number
}) => {
  const getParent = (stopId: string) => {
    const parent =
      stopsPositions[
        // eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing
        stops.find((s) => s.stop_id === stopId)?.parent_station || stopId
      ]
    if (!parent) throw new Error('Missing parent')
    return parent
  }

  const parent1 = getParent(stopPair.stop_pairs.stop_id_1)
  const parent2 = getParent(stopPair.stop_pairs.stop_id_2)

  const pathWithJumps = findShortestPathStr(
    svgString,
    [parent1.point, parent2.point],
    precision,
  )

  return removeJumps(pathWithJumps)
}

const buildPathfindingForMap = async (city: City, map: string) => {
  const mapConfig = getMap(city, map)

  const mapQueries = new MapQueries(city)
  const stopPairs = mapQueries
    .stopPairs(mapConfig.routeTypes)
    .sort((a, b) => a.routes.route_name.localeCompare(b.routes.route_name))
  const stops = mapQueries.stops({ onlyParents: false })

  const stopPositionsAsset = new MapAssets(city, map, MapAssetName.PLACE_STOPS)
  const stopPairPathsAsset = new MapAssets(city, map, MapAssetName.PAIRS_PATHS)

  const stopsPositions = await stopPositionsAsset.read()

  const svgString = await fs.promises.readFile(
    P(city, map).SRC.SVG.STEP_21_LINES_MERGED,
    'utf8',
  )

  const perf = new Perf({ go: true, totalCount: stopPairs.length })
  const text = 'build itineraries'
  const shortestPathByPair = await oraPromise(
    async (ora) => {
      const shortestPathByPair: Record<string, ShortestPath> = {}
      for (const [_index, stopPair] of stopPairs.entries()) {
        perf?.tick(1)
        ora.text =
          defaultTextPerf({ perf, ora: { text } }) +
          '\t' +
          logLineTag(city, stopPair.routes.route_name)
        await wait(0)
        shortestPathByPair[stopPair.stop_pairs.idx] = findOnePath({
          stops,
          stopPair,
          stopsPositions,
          svgString,
          precision: 20_000_000,
        })
      }
      return shortestPathByPair
    },
    { text, successText: () => successText({ perf, ora: { text } }) },
  )
  perf.stop()
  return stopPairPathsAsset.write(shortestPathByPair)
}

export const buildAllPathfinding = async (city: City[], map?: string) => {
  for (const c of city)
    for (const m of map ? [map] : Object.keys(cities[c].maps))
      await buildPathfindingForMap(c, m)
}
