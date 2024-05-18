import { addHours } from 'date-fns'

export class TimeGranola {
  public readonly dateStr: string
  public readonly date: Date

  constructor(date: Date | string = new Date()) {
    this.dateStr = TimeGranola.granularize(date)
    this.date = new Date(this.dateStr)
  }

  public static granularize(_date: Date | string) {
    const date = typeof _date === 'string' ? new Date(_date) : _date
    return date.toISOString().replace(/:.*/, ':00:00Z')
  }

  public static now() {
    return new TimeGranola()
  }

  public next() {
    return new TimeGranola(addHours(this.date, 1))
  }

  public previous() {
    return new TimeGranola(addHours(this.date, -1))
  }
}
