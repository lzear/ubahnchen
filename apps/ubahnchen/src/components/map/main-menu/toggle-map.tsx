'use client'

import Link from 'next/link'

import { useMapContext } from '../server-context/client'

export const ToggleMap = () => {
  const { mapNames, map, city } = useMapContext()
  const curIndex = mapNames.indexOf(map)
  const nextIndex = (curIndex + 1) % mapNames.length
  const nextMap = mapNames[nextIndex]!
  return <Link href={`/${city}/${nextMap}`}>{map}</Link>
}
