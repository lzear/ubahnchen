'use client'

import React, { createContext, useEffect, useState } from 'react'

export const SourceContext = createContext<{
  code: string
  files: null | { abs: string; rel: string }[]
  file?: string
  setCode: (code: string) => void
}>({
  code: '',
  files: null,
  file: undefined,
  setCode: (_code: string) => null,
})

export const SourceContextProvider = (props: {
  code: string
  files: null | { abs: string; rel: string }[]
  file?: string
  children: React.ReactNode
}) => {
  const [code, setCode] = useState(props.code)
  useEffect(() => setCode(props.code), [props.code])
  return (
    <SourceContext.Provider
      value={{
        code,
        files: props.files,
        file: props.file,
        setCode,
      }}
    >
      {props.children}
    </SourceContext.Provider>
  )
}
