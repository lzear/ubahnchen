import * as paper from 'paper'

import { gTrains, upaths } from '@/components/map/canvas/import-svg'
import type { TripByHour } from '@/pages/api/_keyframes'
import type { Pair } from '@/pages/api/pairs'
import type { RoutesDao } from '@/pages/api/routes-dao'

import json from '../../../../../build/berlin/maps/u/pairs-paths.json' assert { type: 'json' }
import { lineColors } from '../colors/line-colors'
import { tripKey } from '../trips/trips'

// @ts-ignore
const pairWays = json as Record<string, Way>

export interface Way {
  distance: number
  edges: WayEdge[]
}

export interface WayEdge {
  distance: number
  distanceEnd: number
  distanceStart: number
  from: WayPoint
  to: WayPoint
  pathIndex?: string
}

export interface WayPoint {
  index: number
  isBase?: boolean
  point: [number, number]
  pathIndex?: string
  pathLength?: number
}

const getPath = (pathIndex: string) => {
  return upaths?.find((p) => p.name === `id-${pathIndex}`)
}

export const pathPosition = ({
  offset,
  path,
}: {
  offset: number
  path: paper.Path
}): [number, number, number] | undefined => {
  const tang = path.getTangentAt(offset > path.length ? path.length : offset)
  const point = path.getPointAt(offset)
  if (!point) return
  return [point.x, point.y, tang.angle]
}

const p0 = new paper.Point(0, 0)
export class Train {
  private tripKey: string
  private shape?: paper.SymbolItem | paper.Shape.Rectangle

  constructor(public trip: TripByHour) {
    this.tripKey = tripKey(trip)
  }

  public remove() {
    this.shape?.remove()
  }

  private createShape(routes: RoutesDao[]) {
    const route = routes.find((r) => r.route_id === this.trip.route_id)
    if (!route) throw new Error('route not found')

    const routeName = route.route_name

    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const fillColor: string =
      // @ts-ignore
      lineColors[routeName] ?? '#000000'

    if (!fillColor) throw new Error('fillColor not found for ' + routeName)
    return new paper.Shape.Rectangle({
      point: p0,
      size: [23, 18],
      parent: gTrains,
      fillColor,
      data: {
        type: 'train',
        trip_id: this.trip.trip_id,
      },
    })
  }

  public move(virtualTime: number, pairs: Pair[], routes: RoutesDao[]) {
    const virtualTimeS = virtualTime / 1000

    const nextIdx = this.trip.stops.findIndex(
      (s) => s.departure_time > virtualTimeS,
    )

    if (nextIdx === -1 || nextIdx === 0) {
      this.remove()
      return
    }

    const nextStop = this.trip.stops[nextIdx]
    const prevStop = this.trip.stops[nextIdx - 1]

    if (!nextStop || !prevStop) {
      this.remove()
      return
    }

    const ratio =
      (virtualTimeS - prevStop.departure_time) /
      (nextStop.departure_time - prevStop.departure_time)

    if (ratio < 0 || ratio > 1) return

    const pair = pairs.find(
      (p) =>
        p.route_id === this.trip.route_id &&
        p.stop_id_1 === prevStop.stop_id &&
        p.stop_id_2 === nextStop.stop_id,
    )

    if (!pair) return
    const way = pairWays[pair.idx]

    if (!way) return

    const d = way.distance * ratio

    const edge = way.edges.find(
      (e) => e.distanceStart <= d && d <= e.distanceEnd,
    )

    if (!edge) return

    if (edge.pathIndex) {
      const edgeOffset = d - edge.distanceStart
      const offset =
        edge.from.pathLength! +
        Math.sign(edge.to.pathLength! - edge.from.pathLength!) * edgeOffset
      this.shape = this.shape ?? this.createShape(routes)
      const path = getPath(edge.pathIndex)
      if (!path) return
      const pos = pathPosition({ offset, path })
      if (!pos) return
      const [x, y, angle] = pos
      this.shape.position.x = x
      this.shape.position.y = y
      this.shape.rotation = angle
    } else {
      const edgeRatio = (d - edge.distanceStart) / edge.distance
      this.shape = this.shape ?? this.createShape(routes)
      if (!edge.from || !edge.to) return
      const x =
        edge.from.point[0] + (edge.to.point[0] - edge.from.point[0]) * edgeRatio
      const y =
        edge.from.point[1] + (edge.to.point[1] - edge.from.point[1]) * edgeRatio
      const angle =
        (Math.atan2(
          edge.to.point[1] - edge.from.point[1],
          edge.to.point[0] - edge.from.point[0],
        ) *
          180) /
        Math.PI

      this.shape.position.x = x
      this.shape.position.y = y
      this.shape.rotation = angle
    }
  }
}
