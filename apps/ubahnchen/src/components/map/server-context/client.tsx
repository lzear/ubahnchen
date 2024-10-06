'use client'

import { createContext, useContext, useMemo } from 'react'

import type { ServerContextProps, ServerContextProviderProps } from './type'

export const ServerContext = createContext<ServerContextProps | null>(null)

export const ServerContextProviderClient = ({
  value,
  children,
}: ServerContextProviderProps) => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const memValue = useMemo(() => value, [value.city, value.map])
  return (
    <ServerContext.Provider value={memValue}>{children}</ServerContext.Provider>
  )
}

export const useMapContext = () => {
  const context = useContext(ServerContext)
  if (!context)
    throw new Error('useMapContext must be used within a ServerContextProvider')
  return context
}
