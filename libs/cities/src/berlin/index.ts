import type { CityConfig } from '../types'

import { gtfs } from './gtfs'
import { maps } from './maps'

export { type Map } from './maps'

export const berlin = {
  gtfs,
  maps,
} satisfies CityConfig
