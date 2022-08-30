import { hafasClient } from './utils/hafas-client'

export const findHafasTrip = async (jid: string, routeName: string) =>
  hafasClient?.trip?.(jid, routeName, {})
