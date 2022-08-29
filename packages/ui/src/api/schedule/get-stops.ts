import { Singleton } from '../../lib/singleton'
import { getDatabase } from '../utils/get-database'

const _getStops = async () => {
  const database = await getDatabase()

  const query = `SELECT * FROM stops`

  const stmt = database.prepare(query)

  const resp: {
    stop_idx: number
    stop_id: string
    stop_name: string
  }[] = stmt.all()

  return resp
}

const cache = new Singleton(_getStops)

export const getStops = () => cache.exec()
