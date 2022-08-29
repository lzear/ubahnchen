import dynamic from 'next/dynamic'

export const Main = dynamic(() => import('../components/main'), {
  ssr: false,
})
