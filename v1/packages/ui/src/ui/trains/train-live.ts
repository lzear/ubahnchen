import * as paper from 'paper'
import routes from '../../generated/routes.json'
import { lineColors } from '../../lib/line-colors'
import { Keyframe2 } from '../../lib/keyframe'
import { MapName } from '../../lib/enums'
import { useStore } from '../store/store'
import { setJidNav } from '../utils/url-parameters'
import { paperView } from '../canvas/paper-view'
import { LiveTrip, trainManagerLive } from './train-manager-live'

const p0 = new paper.Point(0, 0)

const routesColors: Record<string, paper.Color | string> = {}

const routeIds = Object.keys(routes)

for (const routeId of routeIds) {
  const routeName = (routes as Record<string, string>)[routeId]
  if (!routeName) throw new Error(`route not found ${routeId}`)

  const color = (lineColors as Record<string, string>)[routeName] || '#000000'
  routesColors[routeId] = color
  routesColors[routeName] = color
}

export class TrainLive {
  private shape?: paper.SymbolItem | paper.Shape.Rectangle
  private offset: number | undefined
  private highlighted = false

  constructor(
    public trip: LiveTrip,
    private gTrains: paper.Item,
    private key: string,
    private shadow?: number,
  ) {}

  private static getPositionBetweenFrames2(
    virtualTime: number,
    frame2: Keyframe2,
  ) {
    const ratio = (frame2.time1 - virtualTime) / (frame2.time1 - frame2.time2)
    const offset = frame2.offset1 * (1 - ratio) + frame2.offset2 * ratio

    // const opacityBefore = keyFrameBefore.type === 'BUFFER' ? 0 : 1
    // const opacityAfter = keyFrameAfter.type === 'BUFFER' ? 0 : 1

    return { path: frame2.path, offset }
  }

  public getShape() {
    if (this.shape) return this.shape

    const color = routesColors[this.trip.routeName]
    this.shape = new paper.Shape.Rectangle({
      point: p0,
      size: useStore.getState().mapName === MapName.U ? [23, 18] : [11, 8],
      parent: this.gTrains,
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
        setJidNav(this.trip.jid)
      },
      onDoubleClick: () => {
        const { setFollowing } = useStore.getState()
        setFollowing(true)
      },
      data: {
        type: 'train',
        jid: this.trip.jid,
      },
    })
    return this.shape
  }

  public move(virtualTime: number, following: boolean, tripJid?: string) {
    while (
      this.trip.keyframes.length > 0 &&
      (this.trip.keyframes[0]?.time2 || 0) <= virtualTime
    ) {
      this.trip.keyframes.shift()
    }

    const frame = this.trip.keyframes[0]

    if (!frame) {
      this.remove()
      return
      // throw new Error('sdfsd')
    }
    // const position = this.getPosition(virtualTimeS)
    const shape = this.getShape()
    const position = TrainLive.getPositionBetweenFrames2(virtualTime, frame)

    if (this.offset !== position.offset) {
      this.offset = position.offset
      const a = trainManagerLive.getPathApproxPosition(
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

      if (this.trip.jid === tripJid) {
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
  }

  public remove() {
    try {
      this.shape?.remove()
    } catch {
      // do nothing
    }
    trainManagerLive.trainMap.delete(this.key)
  }
}
