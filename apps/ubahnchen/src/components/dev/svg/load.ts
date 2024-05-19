import type { MutableRefObject } from 'react'
import { useEffect } from 'react'
import type { UseQueryResult } from '@tanstack/react-query'
import { useQuery } from '@tanstack/react-query'

const queryFn = async ({
  queryKey,
}: {
  queryKey: ['load-svg', string]
}): Promise<string> => {
  const path = queryKey[1]
  const res = await fetch(path)
  return await res.text()
}

export const useLoadSvg = (
  path: string,
  ref: MutableRefObject<HTMLDivElement | null>,
): UseQueryResult<string> => {
  const q = useQuery({ queryKey: ['load-svg', path] as const, queryFn })
  useEffect(() => {
    if (q.data && ref.current) ref.current.innerHTML = q.data
  }, [q.data, ref])
  return q
}
