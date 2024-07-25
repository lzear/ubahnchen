import type { ReactNode } from 'react'
import localFont from 'next/font/local'

import { ThemeProvider } from '@/components/providers/theme-provider'
import { isCity } from '@ubahnchen/cities'

type Props = {
  children: ReactNode
  params: { city?: string }
}

const berlin = localFont({
  src: [
    {
      path: './_font/BerlinTypeWeb-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './_font/BerlinTypeWeb-Regular.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
})

const fonts = {
  berlin,
}

const CityLayout = ({ children, params }: Props) => {
  const city = params.city

  if (!city || !isCity(city)) {
    throw new Error('Need city!')
  }

  return (
    <ThemeProvider
      attribute="class"
      // defaultTheme="system"
      // enableSystem
      // disableTransitionOnChange
      // forcedTheme={city}
    >
      <div className={fonts[city]?.className}>{children}</div>
    </ThemeProvider>
  )
}

export default CityLayout
