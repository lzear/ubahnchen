import { Singleton } from '../../lib/singleton'
import { getDatabase } from '../utils/get-database'

const _getRoutes = async () => {
  const database = await getDatabase()

  const query = `SELECT * FROM routes`

  const stmt = database.prepare(query)

  const resp: {
    route_id: string
    route_name: string
  }[] = stmt.all()

  return resp
}

const cache = new Singleton(_getRoutes)

export const getRoutes = () => cache.exec()
