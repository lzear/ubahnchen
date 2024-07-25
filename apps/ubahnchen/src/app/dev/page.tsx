'use client'

import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { cities } from '@ubahnchen/cities'

const DevCity = () => {
  return (
    <main className="m-auto flex min-h-screen items-center justify-center gap-2 p-10 align-middle">
      {Object.entries(cities).map(([city, config]) => (
        <Link href={`/dev/${city}`} key={config.name}>
          <Button>{config.name}</Button>
        </Link>
      ))}
      <Link href="/dev/translate-points">
        <Button>Translate Points</Button>
      </Link>
      <Link href="/dev/svg">
        <Button>SVG</Button>
      </Link>
    </main>
  )
}

export default DevCity
