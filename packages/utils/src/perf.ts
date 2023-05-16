import { humanizeTime } from './humanize-time'
import { percent } from './percent'
import { truthy } from './truthy'

export class PerfSimple {
  protected start: number | undefined
  protected end: number | undefined
  protected lastMark: number | undefined

  public go() {
    if (!this.start) this.start = performance.now()
  }

  public stop() {
    this.end = performance.now()
  }

  duration() {
    if (!this.start) return
    if (this.end) return this.end - this.start
    return performance.now() - this.start
  }

  get durationS() {
    const d = this.duration()
    return d && d / 1000
  }

  get displayDuration() {
    const d = this.duration()
    return d && humanizeTime(d)
  }

  displayDurationDelta() {
    const previous = this.lastMark || this.start
    const now = performance.now()
    const r = previous && now - previous
    this.lastMark = now
    return r
  }

  log(message: string) {
    console.log(
      `${humanizeTime(this.displayDurationDelta() || -1).padStart(
        15,
      )} ${message}`,
    )
  }
}

export class Perf extends PerfSimple {
  public readonly sampleDurationMs: number
  public readonly totalCount?: number
  public count = 0

  private buckets = new Map<number, number>()

  constructor(argument?: { sampleDurationMs?: number; totalCount?: number }) {
    super()
    this.sampleDurationMs = argument?.sampleDurationMs || 1000
    this.totalCount = argument?.totalCount
  }

  public tick(count: number) {
    const now = performance.now()
    if (!this.start) this.start = now

    const bucketKey = Math.floor(now - this.start / this.sampleDurationMs)

    const v = this.buckets.get(bucketKey) || 0
    this.buckets.set(bucketKey, v + count)
    this.count = this.count + count
  }

  public tickIndex(index: number) {
    return this.tick(index - this.count)
  }

  averagePerS() {
    if (!this.start) return
    const duration = this.duration()
    if (!duration) return
    return this.count / (duration / 1000)
  }

  get timeLeftS() {
    return this.timeLeft && Math.round(this.timeLeft / 1000)
  }
  get timeLeft() {
    if (!this.totalCount) return
    const average = this.averagePerS()
    if (!average) return
    return ((this.totalCount - this.count) / average) * 1000
  }

  get progress() {
    if (!this.totalCount) return 0
    return this.count / this.totalCount
  }

  displayProgress() {
    const d = this.duration()
    const a = this.averagePerS()
    return [
      this.timeLeft && `~${humanizeTime(this.timeLeft)} left`,
      d && humanizeTime(d),
      a && `${a.toFixed(0)}/s`,
      [
        this.count,
        this.totalCount && `/${this.totalCount} (${percent(this.progress)})`,
      ] // eslint-disable-next-line unicorn/no-array-callback-reference
        .filter(truthy)
        .join(''), // eslint-disable-next-line unicorn/no-array-callback-reference
    ].filter(truthy)
  }

  displayFinal() {
    const d = this.duration()
    const a = this.averagePerS()
    return [
      d && humanizeTime(d).padStart(9),
      a && `${a.toFixed(0).padStart(6)}/s`,
      this.totalCount && `${this.totalCount} rows`, // eslint-disable-next-line unicorn/no-array-callback-reference
    ].filter(truthy)
  }
}
