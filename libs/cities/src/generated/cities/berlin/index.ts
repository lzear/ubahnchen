import { gtfs } from '../../../data/berlin/gtfs'
import { config as s } from '../../../data/berlin/s/index'
import { config as su } from '../../../data/berlin/su/index'
import { config as u } from '../../../data/berlin/u/index'

export const config = {
  name: 'berlin',
  gtfs,
  maps: { s, su, u },
}
