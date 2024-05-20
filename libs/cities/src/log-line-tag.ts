import chalk from 'chalk'

import type { City } from './index'
import { cities } from './index'

export const logLineTag = (city: City, name: string) => {
  const colors = cities[city].gtfs.lineColors[name]
  if (!colors) throw new Error(`Missing colors for line ${name}`)
  return chalk.bold.hex(colors.text).bgHex(colors.bg)(`\u00A0${name}\u00A0`)
}
