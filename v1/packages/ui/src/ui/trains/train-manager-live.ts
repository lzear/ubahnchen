import _ from 'lodash'
import { selectPaths } from '../store/maps'
import { useStore } from '../store/store'
import { Singleton0 } from '../../lib/singleton'
import { Keyframe2 } from '../../lib/keyframe'
import { INIT_APPROX_PX, INIT_RATE_MS } from './consts'
import { TrainLive } from './train-live'
import { approximatePath, pathPosition } from './approximate-path'

const getSetFPS = new Singleton0(() => {
  const { setFrameDelta } = useStore.getState()
  return _.throttle(setFrameDelta, 300)
})

export type LiveTrip = {
  routeName: string
  keyframes: Keyframe2[]
  jid: string
  dirTxt: string
}

export class TrainManagerLive {
  public trainMap = new Map<string, TrainLive>()
  public pathApprox = new Map<string, Map<number, [number, number, number]>>()
  public throttle = INIT_RATE_MS
  public pathApproxDelta = INIT_APPROX_PX
  private active = true

  public clearTrains() {
    for (const [, t] of this.trainMap) t.remove()
    this.trainMap.clear()
  }

  private getPathApprox(pathName: string) {
    const computed = this.pathApprox.get(pathName)
    if (computed) return computed

    const path = selectPaths(useStore.getState())?.get(pathName)

    if (!path) throw new Error('paths')
    const newComputed = approximatePath({
      delta: this.pathApproxDelta,
      path,
    })

    this.pathApprox.set(pathName, newComputed)
    return newComputed
  }

  public getPathApproxPosition(pathName: string, offset: number) {
    if (this.pathApproxDelta === 0) {
      const path = selectPaths(useStore.getState())?.get(pathName)
      if (!path) return
      return pathPosition({ path, offset })
    }

    const pathApprox = this.getPathApprox(pathName)
    const approffset = Math.floor(offset / this.pathApproxDelta)
    return pathApprox.get(approffset)
  }

  public addTrips(trips: LiveTrip[]) {
    this.clearTrains()
    const state = useStore.getState()
    const paths = selectPaths(state)
    const { shadow, mapsObjs } = state

    if (!mapsObjs || !paths) return
    for (const trip of trips) {
      const trainKey = trip.jid
      const t = new TrainLive(trip, mapsObjs.gTrains, trainKey, shadow)
      this.trainMap.set(trainKey, t)
    }
  }

  public previousTime: number | undefined = undefined

  public onFrame(
    frameInfo: { count: number; delta: number; time: number },
    tripJid?: string,
  ) {
    if (!this.active) return
    if (
      this.throttle &&
      this.previousTime &&
      (frameInfo.time - this.previousTime) * 1000 < this.throttle
    ) {
      return
    }

    if (this.previousTime) {
      const fps =
        Math.round((1 / (frameInfo.time - this.previousTime)) * 10) / 10
      getSetFPS.exec()(fps)
    }
    const { following } = useStore.getState()
    const virtualTime = +Date.now()
    for (const [, train] of this.trainMap.entries()) {
      train.move(virtualTime, following, tripJid)
    }
    this.previousTime = frameInfo.time
  }
}

export const trainManagerLive = new TrainManagerLive()
