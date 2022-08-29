import { NextApiResponse } from 'next'

const ONE_WEEK = 86_400 * 7

export const setCachingHeader = (
  response: NextApiResponse,
  maxAge = ONE_WEEK,
) =>
  response.setHeader(
    'Cache-Control',
    `public, max-age=${maxAge}, s-maxage=${maxAge}`,
  )
