import Link from 'next/link'

import { citiesList } from '@ubahnchen/cities'

import { Button } from '../ui/button'

export default function DevLinks() {
  return (
    <div className="flex h-screen content-center items-center justify-center gap-2 align-middle">
      {citiesList.map((city) => (
        <Link key={city} href={`/${city}`}>
          <Button key={city}>{city}</Button>
        </Link>
      ))}
      <Link href="/dev">
        <Button>Dev</Button>
      </Link>
    </div>
  )
}
