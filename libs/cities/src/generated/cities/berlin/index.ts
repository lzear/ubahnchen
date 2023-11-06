import { gtfs } from '../../../data/berlin/gtfs.js'
import { config as s } from '../../../data/berlin/s/index.js'
import { config as su } from '../../../data/berlin/su/index.js'
import { config as u } from '../../../data/berlin/u/index.js'

export const config = {
  name: 'berlin',
  gtfs,
  maps: { s, su, u },
}
