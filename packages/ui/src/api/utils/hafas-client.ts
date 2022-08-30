import createClient from 'hafas-client'
import dbProfile from 'hafas-client/p/vbb'

export const hafasClient = createClient(dbProfile, 'ubahnchen.vercel.app')
