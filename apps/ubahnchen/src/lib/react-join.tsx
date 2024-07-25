import type { ReactNode } from 'react'

export const reactJoin = (
  nodes: ReactNode[],
  joiner: (index: string | number) => ReactNode,
) =>
  nodes.flatMap((node, index) =>
    index === nodes.length - 1 ? node : [node, joiner(index)],
  )
