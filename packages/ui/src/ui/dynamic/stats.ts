import dynamic from 'next/dynamic'

export const Stats = dynamic(() => import('../components/main'), {
  ssr: false,
})
