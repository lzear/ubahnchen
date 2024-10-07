import React, { Suspense } from 'react'
import dynamic from 'next/dynamic'

import { ToggleUrlParameter } from '@/components/dev/server/toggle-checkbox'

const TranslatePointsSvg = dynamic(() => import('./svg'), {
  loading: () => <p className="absolute">loading...</p>,
  ssr: false,
})

const TranslatePoints = () => {
  const count = 60
  return (
    <Suspense>
      <ToggleUrlParameter
        label="random"
        urlParameter="random"
        defaultValue={false}
      />
      <TranslatePointsSvg key={count} count={count} />
    </Suspense>
  )
}

export default TranslatePoints
