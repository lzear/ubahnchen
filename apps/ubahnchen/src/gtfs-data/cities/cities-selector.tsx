import Link from 'next/link'

import { cities } from '@ubahnchen/paths'

export const CitiesSelector = async () => {
  const c = await cities()
  return (
    <div>
      {c.map((city) => (
        <p key={city}>
          <Link href={`/build/${city}`}>{city}</Link>
        </p>
      ))}
    </div>
  )
}
