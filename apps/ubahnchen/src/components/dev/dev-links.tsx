import Link from 'next/link'

import { citiesList } from '@ubahnchen/cities'

import { Button } from '../ui/button'

export default function DevLinks() {
  return (
    <div className="center flex h-screen content-center items-center justify-center gap-2 align-middle">
      {citiesList.map((city) => (
        <Link key={city} href={`/${city}`}>
          <Button key={city} className="btn">
            {city}
          </Button>
        </Link>
      ))}
      <Link href="/dev">
        <Button className="btn">Dev</Button>
      </Link>
    </div>
  )
}
