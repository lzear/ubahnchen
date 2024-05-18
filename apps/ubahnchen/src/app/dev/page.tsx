'use client'

import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { cities } from '@ubahnchen/cities'

const DevCity = () => {
  return (
    <main className="m-auto flex min-h-screen items-center justify-center p-10 align-middle">
      {Object.entries(cities).map(([city, config]) => (
        <Link href={`/dev/${city}`} key={config.name}>
          <Button className="btn">{config.name}</Button>
        </Link>
      ))}
    </main>
  )
}

export default DevCity
