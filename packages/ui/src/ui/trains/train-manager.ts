import _ from 'lodash'
import { selectPaths } from '../store/maps'
import { useStore } from '../store/store'
import {
  computeVirtualTime,
  getVirtualTimeObject,
} from '../utils/time-conversion'
import { fetchTripsHourAndNext } from '../query/use-trips-hour'
import { Singleton0 } from '../../lib/singleton'
import { anim } from '../canvas/animate'
import { BUFFER } from './train-time-buffer'
import { approximatePath, pathPosition } from './approximate-path'
import { INIT_APPROX_PX, INIT_RATE_MS } from './consts'
import { Train } from './train'

const getSetFPS = new Singleton0(() => {
  const { setFrameDelta } = useStore.getState()
  return _.throttle(setFrameDelta, 300)
})

export class TrainManager {
  public trainMap = new Map<string, Train>()
  public pathApprox = new Map<string, Map<number, [number, number, number]>>()
  public throttle = INIT_RATE_MS
  public pathApproxDelta = INIT_APPROX_PX

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

  public onInterval() {
    const state = useStore.getState()
    const paths = selectPaths(state)
    const { shadow, virtualTimeZero, setAt, speed, mapsObjs, opacityFade } =
      state
    const o = getVirtualTimeObject({
      virtualTimeZero,
      setAt,
      speed,
    })

    if (!mapsObjs || !paths) return

    const trips = [
      ...fetchTripsHourAndNext.fetch(
        o.virtualDate,
        opacityFade,
        useStore.getState().mapName,
      ),
    ]

    if (paths) {
      while (trips.length > 0) {
        const firstTrip = trips.shift()
        if (!firstTrip) break

        if (o.virtualTimeS <= firstTrip.start_time - BUFFER) break

        const trainKey = `${firstTrip.day}-${firstTrip.trip_id}`

        const t = this.trainMap.get(trainKey)

        if (t && t.trip.end_time + BUFFER <= o.virtualTimeS) {
          t.remove()
          continue
        }
        if (!t) {
          const t = new Train(firstTrip, trainKey, opacityFade, shadow)
          this.trainMap.set(trainKey, t)
        }
      }
    }
  }

  public previousTime: number | undefined = undefined

  public onFrame(
    frameInfo: { count: number; delta: number; time: number },
    tripId?: number,
  ) {
    if (anim.isAnimating) return
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
    const { virtualTimeZero, setAt, speed, following } = useStore.getState()
    const virtualTime = +computeVirtualTime({
      virtualTimeZero,
      setAt,
      speed,
    })
    const virtualTimeS = virtualTime / 1000
    try {
      for (const [, train] of this.trainMap.entries()) {
        train.move(virtualTimeS, following, tripId)
      }
    } catch (error) {
      console.error(error)
    }
    this.previousTime = frameInfo.time
  }
}

export const trainManager = new TrainManager()
