'use client'

import type { ReactNode } from 'react'
import { useState } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

export const ReactQuery = ({ children }: { children: ReactNode }) => {
  const [queryClient] = useState(() => new QueryClient())

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  )
}
