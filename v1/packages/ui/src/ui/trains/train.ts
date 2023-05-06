import * as paper from 'paper'
import routes from '../../generated/routes.json'
import { lineColors } from '../../lib/line-colors'
import { Keyframe2, TripNFrames } from '../../lib/keyframe'
import { MapName } from '../../lib/enums'
import { useStore } from '../store/store'
import { setTripIdNav } from '../utils/url-parameters'
import { paperView } from '../canvas/paper-view'
import { trainManager } from './train-manager'
import { BUFFER } from './train-time-buffer'

const p0 = new paper.Point(0, 0)

const routesColors: Record<string, paper.Color | string> = {}

const routeIds = Object.keys(routes)

for (const routeId of routeIds) {
  const routeName = (routes as Record<string, string>)[routeId]
  if (!routeName) throw new Error(`route not found ${routeId}`)

  routesColors[routeId] =
    (lineColors as Record<string, string>)[routeName] || '#000000'
}

export class Train {
  private shape?: paper.SymbolItem | paper.Shape.Rectangle
  private readonly frames: (Keyframe2 & {
    type?: 'BUFFER_START' | 'BUFFER_END'
  })[]
  private offset: number | undefined
  private highlighted = false

  constructor(
    public trip: TripNFrames,
    private key: string,
    private hasFading: boolean,
    private shadow?: number,
  ) {
    this.frames = [...trip.keyframes2]
  }

  private static getPositionBetweenFrames2(
    virtualTimeS: number,
    frame2: Keyframe2,
  ) {
    const ratio = (frame2.time1 - virtualTimeS) / (frame2.time1 - frame2.time2)
    const offset = frame2.offset1 * (1 - ratio) + frame2.offset2 * ratio

    // const opacityBefore = keyFrameBefore.type === 'BUFFER' ? 0 : 1
    // const opacityAfter = keyFrameAfter.type === 'BUFFER' ? 0 : 1

    return { path: frame2.path, offset }
  }

  public getShape() {
    if (this.shape) return this.shape

    const color = routesColors[this.trip.route_id]
    const { mapsObjs } = useStore.getState()

    if (!mapsObjs) throw new Error('sdf')

    this.shape = new paper.Shape.Rectangle({
      point: p0,
      size: useStore.getState().mapName === MapName.U ? [23, 18] : [11, 8],
      parent: mapsObjs.gTrains,
      fillColor: color,
      shadowColor:
        this.shadow === undefined
          ? undefined
          : new paper.Color(this.shadow, this.shadow, this.shadow),
      // Set the shadow blur radius to 12:
      shadowBlur: 12,
      // Offset the shadow by { x: 5, y: 5 }
      shadowOffset: new paper.Point(2, 2),
      onMouseDown: (event: Event) => {
        event.preventDefault()
        event.stopPropagation()
        setTripIdNav(this.trip.trip_id)
      },
      onDoubleClick: () => {
        const { setFollowing } = useStore.getState()
        setFollowing(true)
      },
      data: {
        type: 'train',
        trip_id: this.trip.trip_id,
      },
    })
    return this.shape
  }

  private getOpacity(
    frame2: Keyframe2 & { type?: 'BUFFER_START' | 'BUFFER_END' },
    virtualTimeS: number,
  ) {
    if (!this.hasFading) return 1
    if (frame2.type === 'BUFFER_START')
      return (virtualTimeS - frame2.time1) / (frame2.time2 - frame2.time1)
    if (frame2.type === 'BUFFER_END')
      return (virtualTimeS - frame2.time2) / (frame2.time1 - frame2.time2)
    return 1
  }

  public move(virtualTimeS: number, following: boolean, tripId?: number) {
    if (
      virtualTimeS <= this.trip.start_time - BUFFER ||
      this.trip.end_time + BUFFER <= virtualTimeS
    )
      return this.remove()

    while (
      this.frames.length > 0 &&
      (this.frames[0]?.time2 || 0) <= virtualTimeS
    )
      this.frames.shift()

    const frame = this.frames[0]

    if (!frame) {
      this.remove()
      return
      // throw new Error('sdfsd')
    }
    // const position = this.getPosition(virtualTimeS)

    const shape = this.getShape()
    const position = Train.getPositionBetweenFrames2(virtualTimeS, frame)

    if (this.offset !== position.offset) {
      this.offset = position.offset
      const a = trainManager.getPathApproxPosition(
        position.path,
        position.offset,
      )
      if (!a) {
        return
        throw new Error('!a')
      }
      const [x, y, angle] = a
      shape.position.x = x
      shape.position.y = y
      shape.rotation = angle

      if (this.trip.trip_id === tripId) {
        const view = paperView()
        if (following && view) view.center = shape.position
        if (!this.highlighted) {
          shape.strokeColor = new paper.Color(0, 0, 0)
          shape.strokeWidth = useStore.getState().mapName === MapName.U ? 4 : 2
          this.highlighted = true
        }
      } else if (this.highlighted) {
        // eslint-disable-next-line unicorn/no-null
        shape.strokeColor = null
        // eslint-disable-next-line unicorn/no-null
        shape.strokeWidth = 0
        this.highlighted = false
      }
    }
    if (this.hasFading)
      shape.opacity =
        frame?.type === 'BUFFER_START' || frame?.type === 'BUFFER_END'
          ? this.getOpacity(frame, virtualTimeS)
          : 1
    // if (
    //   this.hasFading &&
    //   position.opacity !== undefined &&
    //   position.opacity !== shape.opacity
    // )
    //   shape.opacity = position.opacity
  }

  public remove() {
    try {
      this.shape?.remove()
    } catch {
      // do nothing
    }
    trainManager.trainMap.delete(this.key)
  }
}
