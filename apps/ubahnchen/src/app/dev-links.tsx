import Link from 'next/link'

import { citiesList } from '@ubahnchen/cities'

export default function DevLinks() {
  return (
    <div className="center flex h-screen content-center items-center justify-center gap-2 align-middle">
      {citiesList.map((city) => (
        <Link key={city} href={`/${city}`}>
          <button key={city} className="btn">
            {city}
          </button>
        </Link>
      ))}
      <Link href="/dev">
        <button className="btn">Dev</button>
      </Link>
    </div>
  )
}
