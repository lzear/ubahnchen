import React from 'react'
import dynamic from 'next/dynamic'

import { ToggleUrlParameter } from '../../../components/server/toggle-checkbox'

// import { TranslatePointsSvg } from './svg'

const TranslatePointsSvg = dynamic(() => import('./svg'), {
  loading: () => <p className="absolute">loading...</p>,
  ssr: false,
})

const TranslatePoints = () => {
  const count = 60
  return (
    <>
      <ToggleUrlParameter
        label="random"
        urlParameter="random"
        defaultValue={false}
      />
      <TranslatePointsSvg key={count} count={count} />
    </>
  )
}

export default TranslatePoints
