import dynamic from 'next/dynamic'

export const NivoBar = dynamic(() => import('../components/nivo-bar'), {
  ssr: false,
})

export const NivoStations = dynamic(
  () => import('../components/nivo-stations'),
  {
    ssr: false,
  },
)
