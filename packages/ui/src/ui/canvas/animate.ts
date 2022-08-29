import { MapName } from '../../lib/enums'
import { useStore } from '../store/store'
import { getULines } from './map-elements'

class AnimateMaps {
  private ratio = 0
  private tween?: paper.Tween

  public isAnimating = false

  public immediate() {
    const { setMaps, mapsObjs, displayStations, suWater, mapName } =
      useStore.getState()
    if (!mapsObjs) {
      console.error('MissingmapsObjs')
      return
    }
    const { suMap, uMap, aniMap } = mapsObjs
    this.stop()
    if (!suMap || !uMap || !aniMap) {
      console.error('Missing [suMap, uMap, aniMap]', [suMap, uMap, aniMap])
      return
    }
    aniMap.opacity = 0

    let stations
    if (mapName === MapName.U) {
      uMap.opacity = 1
      // @ts-ignore
      stations = uMap.children[0]?.children?.stations
    } else {
      // @ts-ignore
      const U = suMap.children?.lines?.children?.U
      // @ts-ignore
      stations = suMap.children?.stations
      if (U) U.opacity = 1
    }

    if (stations) stations.opacity = displayStations ? 1 : 0

    if (suWater)
      if (mapName === MapName.SU) suWater.opacity = 1
      else suWater.remove()

    this.isAnimating = false
    setMaps({ animationFinishedAt: +Date.now() })
  }

  public start() {
    this.stop()

    const { mapsObjs, suWater, mapName } = useStore.getState()
    if (!mapsObjs) {
      return
    }
    const { suMap, uMap, aniMap } = mapsObjs
    if (!suMap || !uMap || !aniMap) {
      console.error('Missing [suMap, uMap, aniMap]', [suMap, uMap, aniMap])
      return
    }

    const uBahns = getULines(uMap)
    const suBahns = getULines(suMap)
    const aniBahns = getULines(aniMap)

    const target = mapName === MapName.U ? uBahns : suBahns
    const origin = mapName === MapName.SU ? uBahns : suBahns

    uMap.opacity = 0
    aniMap.opacity = 1

    // @ts-ignore
    const U = suMap.children?.lines?.children?.U
    if (U) U.opacity = 0

    // @ts-ignore
    const stations = suMap.children?.stations
    if (stations) stations.opacity = 0

    const pairs: [paper.Path, paper.Path, paper.Path][] = []
    for (const aniBahn of aniBahns) {
      const l1 = origin.find(
        (l) => aniBahn.name.split(' ')[0] === l.name.split(' ')[0],
      )
      const l2 = target.find(
        (l) => aniBahn.name.split(' ')[0] === l.name.split(' ')[0],
      )
      if (!l2 || !l1) continue

      while (l1.segments.length > l2.segments.length) {
        l2.divideAt(l2.length * Math.random())
        // ub2.add([0, 0], [0, 0])
      }
      while (l2.segments.length > l1.segments.length) {
        l1.divideAt(l1.length * Math.random())
        // ub1.add([0, 0], [0, 0])
      }

      // line.fullySelected = true
      pairs.push([aniBahn, l1, l2])
    }

    const baseF = this.ratio

    const firstPair = pairs[0]

    if (!firstPair) throw new Error('firstPair')

    const tween = firstPair[0].tween({ duration: 2000 * (1 - this.ratio) })
    const b = firstPair[1].strokeWidth
    const a = firstPair[2].strokeWidth - firstPair[1].strokeWidth

    this.isAnimating = true
    // @ts-ignore
    tween.on('update', (event) => {
      const factor = baseF + (1 - baseF) * event.factor
      this.ratio = 1 - factor
      const strokeWidth = b + a * factor

      for (const [line, pathFrom, pathTo] of pairs) {
        line.interpolate(pathFrom, pathTo, factor)
        line.strokeWidth = strokeWidth
      }

      // @ts-ignore
      const S = suMap.children?.lines?.children?.S
      if (S) S.opacity = mapName === MapName.SU ? factor : 1 - factor

      if (suWater)
        suWater.opacity = mapName === MapName.SU ? factor : 1 - factor

      // @ts-ignore
      const stations = suMap.children?.stations
      if (stations)
        // stations.opacity = mapName === MapName.SU ? factor : 1 - factor
        stations.opacity = 0
    })

    this.tween = tween

    return tween.then(() => {
      this.immediate()
    })
  }

  public stop() {
    this.tween?.stop()
  }
}

export const anim = new AnimateMaps()
