import Paper, * as paper from 'paper'
import { useStore } from '../store/store'
import { selectPaths, selectStations } from '../store/maps'
import { Junction } from '../sections'
import { MapName } from '../../lib/enums'
import type { SectionWithAbs } from '../../lib/intineraries'
import { makeSections } from './make-sections'
import { getBestJunctions } from './junctions'

type LinePath = {
  route_name: string
  paths: string[]
  hardcode?: { stop_name: string; stop_id: string; path: string }[]
}

const DELTA = {
  [MapName.SU]: 11.09,
  [MapName.U]: 12.1,
}

let gdots: paper.Item | undefined

export const _getPathsForStops = (
  stops: { stop_id: string; stop_name: string; path?: string }[],
  linePath: LinePath,
  mapName: MapName,
): SectionWithAbs[] => {
  if (!gdots) {
    const activeLayer = Paper?.project?.activeLayer

    if (!activeLayer) throw new Error('No active layer')

    gdots = activeLayer.addChild(new paper.Group())
    gdots.name = 'dots2309'
  }
  // gdots.removeChildren()

  const s = useStore.getState()
  const stations = selectStations(s)
  const paths = selectPaths(s)

  if (!paths || !stations) throw new Error('Missing stations/paths')

  const goodPaths = linePath.paths.map((name) => {
    const p = paths.get(name)
    if (!p) throw new Error(`??? PATH ${name}`)
    return p
  })

  const stationPaths: { station: paper.Item; path: paper.Path }[] = stops.map(
    (stpoo) => {
      const { stop_id, path } = stpoo
      const hardcoded:
        | { stop_id: string; stop_name: string; path: string }
        | undefined = path
        ? { ...stpoo, path }
        : linePath.hardcode?.find((h) => h.stop_id === stop_id)

      const station = stations.get(stop_id)
      if (!station) throw new Error('fsdf234')

      if (hardcoded) {
        const path = paths.get(hardcoded.path)
        if (!path) throw new Error('fsdf234 hardcoded')
        return { ...hardcoded, path, station }
      }

      let bestDistance = Number.POSITIVE_INFINITY
      let bestPath: paper.Path | undefined

      for (const goodPath of goodPaths) {
        const nearest = goodPath.getNearestPoint(station.position)
        const distance = nearest.getDistance(station.position)

        if (distance < bestDistance) {
          bestDistance = distance
          bestPath = goodPath
        }

        if (distance > DELTA[s.mapName]) continue

        return {
          path: goodPath,
          bestDistance,
          station,
          stop_id,
        }
      }

      throw new Error(
        `${stop_id}: Couldnt find nearby path. Nearest:${bestPath} (${bestDistance})`,
      )
    },
  )

  const junctions: Junction[] = []
  if (mapName === MapName.SU) {
    const s41 = paths.get('S41')
    const s42 = paths.get('S42')
    if (!s41 || !s42) throw new Error('sdf')
    junctions.push(
      [
        {
          stop_id: 'de:11000:900024102',
          pathName: 'S41',
          path: s41,
          point: s41.getPointAt(0),
          offset: 0,
        },
        {
          stop_id: 'de:11000:900024106',
          pathName: 'S41',
          path: s41,
          point: s41.getPointAt(s41.length),
          offset: s41.length,
        },
      ],
      [
        {
          stop_id: 'de:11000:900024102',
          pathName: 'S42',
          path: s42,
          point: s42.getPointAt(0),
          offset: 0,
        },
        {
          stop_id: 'de:11000:900024106',
          pathName: 'S42',
          path: s42,
          point: s42.getPointAt(s42.length),
          offset: s42.length,
        },
      ],
    )
  }
  for (const [index, stationPath] of stationPaths.entries()) {
    if (gdots) {
      gdots.addChild(
        new paper.Shape.Circle({
          center: stationPath.path.getNearestPoint(
            stationPath.station.position,
          ),
          radius: 3,
          strokeWidth: 2,
          fillColor: stationPath.path.strokeColor,
          strokeColor: 'gray',
          opacity: 0.9,
        }),
      )
    }

    const next = stationPaths[index + 1]

    if (next && stationPath.path.name !== next.path.name) {
      const [primary, secondary] = [stationPath, next].sort((a, b) => {
        return (
          linePath.paths.indexOf(a.path.name as unknown as string) -
          linePath.paths.indexOf(b.path.name as unknown as string)
        )
      })

      if (!primary || !secondary) throw new Error('FJKH')

      const bestJunctions = getBestJunctions(primary, secondary)
      const [best1, best2] = bestJunctions[0]?.points || []
      if (!best1 || !best2) throw new Error('FJKH')

      junctions.push([
        {
          stop_id: primary.station.name,
          pathName: primary.path.name,
          path: primary.path,
          point: best1,
          offset: primary.path.getNearestLocation(best1).offset,
        },
        {
          stop_id: secondary.station.name,
          pathName: secondary.path.name,
          path: secondary.path,
          point: best2,
          offset: secondary.path.getNearestLocation(best2).offset,
        },
      ])
      gdots.addChild(
        new paper.Shape.Circle({
          opacity: 0.6,
          center: primary.station.position,
          radius: 20,
          strokeWidth: 5,
          strokeColor: primary.path.strokeColor,
        }),
      )
      gdots.addChild(
        new paper.Shape.Circle({
          opacity: 0.6,
          center: secondary.station.position,
          radius: 26,
          strokeWidth: 5,
          strokeColor: secondary.path.strokeColor,
        }),
      )
      gdots.addChild(
        new paper.Path({
          segments: [primary.station.position, best1],
          strokeWidth: 2,
          strokeColor: 'black',
        }),
      )
      gdots.addChild(
        new paper.Path({
          segments: [secondary.station.position, best2],
          strokeWidth: 2,
          strokeColor: 'black',
        }),
      )
      gdots.addChild(
        new paper.Path({
          segments: [best1, best2],
          strokeWidth: 20,
          strokeColor: 'black',
        }),
      )
    }
  }

  return makeSections({
    route_name: linePath.route_name,
    junctions,
    stations: stationPaths,
  })
}
