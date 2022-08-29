import createClient from 'hafas-client'
import dbProfile from 'hafas-client/p/vbb'

const client = createClient(dbProfile, 'my-awesome-program')

export const findHafasTrip = async (jid: string, routeName: string) =>
  client?.trip?.(jid, routeName, {})
