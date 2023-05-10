import type { Options } from 'humanize-duration'
import humanizeDuration from 'humanize-duration'

export const humanizeTime = (ms: number, options?: Options) =>
  humanizeDuration.humanizer({
    maxDecimalPoints: 1,
    language: 'shortEn',
    delimiter: ' ',
    spacer: '',
    units: ['y', 'mo', 'w', 'd', 'h', 'm', 's', ms < 1000 && 'ms'].filter(
      Boolean,
    ) as Options['units'],
    largest: 2,
    round: true,
    languages: {
      shortEn: {
        y: () => 'y',
        mo: () => 'mo',
        w: () => 'w',
        d: () => 'd',
        h: () => 'h',
        m: () => 'm',
        s: () => 's',
        ms: () => 'ms',
      },
    },
  })(ms, options)
