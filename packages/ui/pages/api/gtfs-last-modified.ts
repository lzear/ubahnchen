import { NextApiRequest, NextApiResponse } from 'next'
import { setCachingHeader } from '../../src/api/utils/cache'

const BERLIN_GTFS_URL =
  'https://www.vbb.de/fileadmin/user_upload/VBB/Dokumente/API-Datensaetze/gtfs-mastscharf/GTFS.zip'
const FIVE_MINUTES = 60 * 5

const gtfsLastModified = async (
  _request: NextApiRequest,
  response: NextApiResponse,
) => {
  const { headers } = await fetch(BERLIN_GTFS_URL, { method: 'HEAD' })
  setCachingHeader(response, FIVE_MINUTES)
  return response.status(200).json(headers.get('last-modified'))
}

export default gtfsLastModified
