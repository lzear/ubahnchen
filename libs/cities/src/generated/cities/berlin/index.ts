import { gtfs } from '../../../data/berlin/gtfs'
import { config as s } from '../../../data/berlin/s'
import { config as su } from '../../../data/berlin/su'
import { config as u } from '../../../data/berlin/u'

export const config = {
  name: 'berlin',
  gtfs,
  maps: { s, su, u },
}
