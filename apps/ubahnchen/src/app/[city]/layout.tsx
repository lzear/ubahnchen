import type { ReactNode } from 'react'

import { ThemeProvider } from '@/components/providers/theme-provider'
import { cities, isCity } from '@ubahnchen/cities'

type Props = {
  children: ReactNode
  params: { city?: string }
}

const CityLayout = ({ children, params }: Props) => {
  const city = params.city

  if (!city || !isCity(city)) {
    throw new Error('Need city!')
  }

  const cityConfig = cities[city]

  return (
    <ThemeProvider
      attribute="class"
      // defaultTheme="system"
      // enableSystem
      // disableTransitionOnChange
      // forcedTheme={city}
    >
      <div className={cityConfig.gtfs.font.className}>{children}</div>
    </ThemeProvider>
  )
}

export default CityLayout
