import { Box, CloseButton, Link } from '@chakra-ui/react'
import React from 'react'
import Head from 'next/head'
import NextLink from 'next/link'
import { useTranslation } from 'next-i18next'
import { How } from './how'
import { Breadcrumbs } from './breadcrumbs'

export const About: React.FC = () => {
  const { t } = useTranslation('about')
  const title = `Ubähnchen - ${t('about')}`
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      <NextLink href="/" passHref legacyBehavior>
        <Link>
          <CloseButton size="lg" position="fixed" right="10px" top="10px" />
        </Link>
      </NextLink>

      <Box padding="20px" overflow="auto">
        <Breadcrumbs current="/about" />
        <How />
      </Box>
    </>
  )
}
