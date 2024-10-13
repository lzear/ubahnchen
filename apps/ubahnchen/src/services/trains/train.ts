import type { TripByHour } from '@/pages/api/_keyframes'
import type { DrizzleTypes, StopPairsSvgPaths } from '@ubahnchen/database'
import type { Segment } from '@ubahnchen/gtfs'

import { lineColors } from '../colors/line-colors'

import type { Renderer } from './renderer/renderer-interface'

export class Train {
  constructor(
    public trip: TripByHour,
    private renderer: Renderer,
    private route: DrizzleTypes['routes'],
  ) {}

  private findSegment(
    virtualTimeMs: number,
    pairs: DrizzleTypes['stopPairs'][],
    pairSvgs: Map<number, StopPairsSvgPaths>,
  ) {
    const virtualTimeS = virtualTimeMs / 1000
    const nextIdx = this.trip.stops.findIndex(
      (s) => s.departure_time > virtualTimeS,
    )
    if (nextIdx === -1 || nextIdx === 0) return

    const nextStop = this.trip.stops[nextIdx]
    const prevStop = this.trip.stops[nextIdx - 1]
    if (!nextStop || !prevStop) return

    const pair = pairs.find(
      (p) =>
        p.route_id === this.trip.route_id &&
        p.stop_id_1 === prevStop.stop_id &&
        p.stop_id_2 === nextStop.stop_id,
    )
    if (!pair) throw new Error('Pair not found')

    const ratio =
      (virtualTimeS - prevStop.departure_time) /
      (nextStop.departure_time - prevStop.departure_time)

    if (ratio < 0 || ratio > 1) throw new Error('Ratio out of bounds')

    const pairSvg = pairSvgs.get(pair.idx)
    if (!pairSvg) throw new Error('PairSvg not found')

    return this.findSegmentByDistance(pairSvg.segments, pairSvg.length * ratio)
  }

  private findSegmentByDistance(segments: Segment[], distance: number) {
    let distanceRemaining = distance
    for (const segment of segments) {
      const sLength = Math.abs(segment.lengths[1] - segment.lengths[0])
      if (sLength >= distanceRemaining)
        return {
          segment,
          pos:
            segment.lengths[0] +
            Math.sign(segment.lengths[1] - segment.lengths[0]) *
              distanceRemaining,
        }
      distanceRemaining -= sLength
    }
    throw new Error('Segment not found')
  }

  public move(
    virtualTimeMs: number,
    pairs: DrizzleTypes['stopPairs'][],
    pairSvgs: Map<number, StopPairsSvgPaths>,
  ) {
    const segment = this.findSegment(virtualTimeMs, pairs, pairSvgs)

    if (!segment) return

    // @ts-ignore
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const color: string = lineColors[this.route.route_name] ?? 'black'
    this.renderer.drawTrain(segment.segment, segment.pos, color)
  }
}
