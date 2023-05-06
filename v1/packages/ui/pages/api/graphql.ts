/* eslint-disable unicorn/prefer-node-protocol */
import 'reflect-metadata'

import type { IncomingMessage } from 'http'
import Cors from 'micro-cors'
import { ApolloServer } from 'apollo-server-micro'
import * as prismaC from '@prisma/client'
// import { NextApiRequest, NextApiResponse } from 'next'
import { buildSchema } from 'type-graphql'
import type { NextApiResponse } from 'next'
import type { RequestHandler } from 'micro'
import * as sdkfj from '../../src/generated/client'
import { setCachingHeader } from '../../src/api/utils/cache'

const { PrismaClient } = prismaC

const prisma = new PrismaClient()

const { resolvers } = sdkfj

const cors: (handler: RequestHandler) => RequestHandler = Cors()
// const PORT = process.env.PORT || 4000

// @ts-ignore
const grhapqlApi: ReturnType<typeof cors> = cors(async function handler(
  request: IncomingMessage,
  response: NextApiResponse,
) {
  if (request.method === 'OPTIONS') {
    response.end()
    return false
  }

  const schema = await buildSchema({
    resolvers,
    validate: false,
  })

  // Create the GraphQL server
  const apolloServer = new ApolloServer({
    schema,
    context: () => ({ prisma }),
    introspection: true,

    // plugins: [ApolloServerPluginLandingPageGraphQLPlayground({})],

    // tracing: process.env.NODE_ENV === 'development',
  })

  await apolloServer.start()
  // await apolloServer.createGraphQLServerOptions(req, res)

  // Start the server
  // const { url } = await server.listen(PORT)
  // console.log(`Server is running, GraphQL Playground available at ${url}`)

  setCachingHeader(response)
  return apolloServer.createHandler({
    path: '/api/graphql',
  })(request, response)
})

export const config = {
  api: { bodyParser: false },
}

export default grhapqlApi
