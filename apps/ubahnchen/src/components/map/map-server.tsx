import dynamic from 'next/dynamic'

import type { City } from '@ubahnchen/cities'

import { ServerContextProvider } from './server-context'

const MapClient = dynamic(() => import('./map-client'), {
  ssr: false,
  loading: () => <p>Loading...</p>,
})

type Props = {
  params: {
    city: City
    map: string
  }
}

export const MapServer = ({ params: { city, map } }: Props) => {
  return (
    <ServerContextProvider city={city} map={map}>
      <MapClient />
    </ServerContextProvider>
  )
}
