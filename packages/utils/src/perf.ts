import { humanizeTime } from './humanize-time'
import { prettyNumber } from './log'
import { percent } from './percent'
import { truthy } from './truthy'
import { wait } from './wait'

export class PerfSimple {
  protected start: number | undefined
  protected end: number | undefined
  protected lastMark: number | undefined
  protected marks: {
    text?: string
    time: number
    delta: number
  }[] = []

  public go() {
    if (this.start) return
    this.start = performance.now()
    this.marks = [{ text: 'START', time: this.start, delta: 0 }]
  }

  public stop() {
    this.end = performance.now()
    this.marks.push({ text: 'END', time: this.end, delta: this.getTimeDelta() })
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

  getTimeDelta() {
    const previous = this.lastMark ?? this.start
    const now = performance.now()
    const delta = previous && now - previous
    this.lastMark = now
    return delta ?? -1
  }

  log(message: string) {
    const mark = this.record(message)

    console.log(
      `\n${`${humanizeTime(mark.time)} (+${humanizeTime(mark.delta)})`.padEnd(
        15,
      )} ${message}`,
    )
  }

  record(message: string) {
    const delta = this.getTimeDelta()
    const mark = { text: message, time: performance.now(), delta }
    this.marks.push(mark)
    return mark
  }

  logMarks() {
    console.table(
      this.marks.map((mark) => ({
        ...mark,
        delta: humanizeTime(mark.delta),
        time: humanizeTime(mark.time),
      })),
    )
  }
}

export class Perf extends PerfSimple {
  public readonly sampleDurationMs: number
  public readonly totalCount?: number
  public count = 0

  private buckets = new Map<number, number>()

  constructor(argument?: {
    sampleDurationMs?: number
    totalCount?: number
    go?: boolean
  }) {
    super()
    this.sampleDurationMs = argument?.sampleDurationMs ?? 1000
    this.totalCount = argument?.totalCount
    if (argument?.go) this.go()
  }

  public tick(count: number) {
    const now = performance.now()
    if (!this.start) this.start = now

    const bucketKey = Math.floor(now - this.start / this.sampleDurationMs)

    const v = this.buckets.get(bucketKey) ?? 0
    this.buckets.set(bucketKey, v + count)
    this.count = this.count + count
  }

  public async tickAsync(count: number) {
    this.tick(count)
    await wait(0)
  }

  public tickAbsolute(absoluteCount: number) {
    return this.tick(absoluteCount - this.count)
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

  progressData() {
    const d = this.duration()
    const a = this.averagePerS()
    return {
      timeLeft: this.timeLeft && `~${humanizeTime(this.timeLeft)} left`,
      time: d && humanizeTime(d),
      speed: a && `${prettyNumber(a, { integer: true })}/s`,
      progress: [
        prettyNumber(this.count, { integer: true }),
        this.totalCount &&
          `/${prettyNumber(this.totalCount, { integer: true })} (${percent(
            this.progress,
          )})`,
      ] // eslint-disable-next-line unicorn/no-array-callback-reference
        .filter(truthy)
        .join(''),
    }
  }

  displayProgress() {
    const pdata = this.progressData()
    return [pdata.timeLeft, pdata.time, pdata.speed, pdata.progress].filter(
      // eslint-disable-next-line unicorn/no-array-callback-reference
      truthy,
    )
  }

  displayFinal() {
    const d = this.duration()
    const a = this.averagePerS()
    return [
      d && humanizeTime(d).padStart(7),
      a && `${prettyNumber(a, { integer: true }).padStart(7)}/s`,
      this.count &&
        `${prettyNumber(this.count, { integer: true }).padStart(9)} rows`,
      this.totalCount &&
        this.count !== this.totalCount &&
        `❌ ${prettyNumber(this.count)} / ${prettyNumber(this.totalCount)}`,
      // eslint-disable-next-line unicorn/no-array-callback-reference
    ].filter(truthy)
  }
}
