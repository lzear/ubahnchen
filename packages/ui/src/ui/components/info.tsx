import { InfoIcon } from '@chakra-ui/icons'
import { IconButton, Link, Tooltip } from '@chakra-ui/react'
import React from 'react'
import NextLink from 'next/link'
import { useTranslation } from 'next-i18next'

export const Info: React.FC = () => {
  const { t } = useTranslation()
  return (
    <NextLink href="/about" passHref>
      <Link color="inherit" tabIndex={-1}>
        <Tooltip
          label={t('learnMore')}
          hasArrow
          placement="left"
          openDelay={800}
        >
          <IconButton
            aria-label="info"
            size="sm"
            pointerEvents="auto"
            variant="ghost"
            icon={<InfoIcon />}
          />
        </Tooltip>
      </Link>
    </NextLink>
  )
}
