// eslint-disable-next-line @typescript-eslint/no-explicit-any
export class PerfFunction<F extends (...arguments_: any[]) => any> {
  public executions: number[] = []
  public wrapped: (...args: Parameters<F>) => Promise<ReturnType<F>>

  constructor(private fn: F) {
    this.wrapped = async (
      ...arguments_: Parameters<F>
    ): Promise<ReturnType<F>> => {
      const start = performance.now()
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const result: ReturnType<F> = await this.fn(...arguments_)
      this.executions.push(performance.now() - start)
      // eslint-disable-next-line @typescript-eslint/no-unsafe-return
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
}
