import { Link, Text } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import React from 'react'

export const Thanks = () => {
  return (
    <>
      <Text>
        <strong>Thanks to:</strong>
      </Text>
      <ul>
        <li>Minimetro for the inspiration.</li>
        <li>VBB for providing the GTFS data.</li>
        <li>
          <Link isExternal href="https://github.com/derhuerst">
            github.com/derhuerst <ExternalLinkIcon mx="2px" />
          </Link>{' '}
          for all the open-source contribution that this website relies on.
        </li>
        <li>
          Next.js and Vercel for providing free tools and hosting, allowing this
          website to exist.
        </li>
        <li>
          BVG/VBB people for making the trains from the map move in real life.
        </li>
        <li>You for visiting and reading this!</li>
      </ul>
    </>
  )
}
