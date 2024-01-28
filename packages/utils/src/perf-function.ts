import { humanizeTime } from './humanize-time.js'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export class PerfFunction<F extends (...arguments_: any[]) => any> {
  public executions: number[] = []
  public wrapped: (...args: Parameters<F>) => Promise<ReturnType<F>>

  constructor(private fn: F) {
    // @ts-ignore
    this.wrapped = async (...arguments_: Parameters<F>): Promise<ReturnType<F>> => {
      const start = performance.now()
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const result: ReturnType<F> = await this.fn(...arguments_)
      this.executions.push(performance.now() - start)
      return result
    }
  }

  public get calls() {
    return this.executions.length
  }

  public get time() {
    return this.executions.reduce((a, b) => a + b, 0)
  }
  public get average() {
    return this.time / this.calls
  }

  public get averageMs() {
    return this.average
  }

  public get averageS() {
    return this.average / 1000
  }

  public get averagePerS() {
    return 1 / this.averageS
  }

  public displayHuman() {
    console.log(
      `${this.fn.name} : ${this.calls} calls, ${humanizeTime(this.time)} total, ${humanizeTime(this.average)} average`,
    )
  }

  public display() {
    console.log(
      `${this.fn.name} : ${this.calls} calls, ${this.time} total, ${this.average} average`,
    )
  }
}
