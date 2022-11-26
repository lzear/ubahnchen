import { Breadcrumb, BreadcrumbItem, Link } from '@chakra-ui/react'
import React from 'react'
import { useTranslation } from 'next-i18next'
import NextLink from 'next/link'

export const Breadcrumbs: React.FC<{ current: string }> = ({ current }) => {
  const { t } = useTranslation()
  const links = [
    { name: 'about', href: '/about' },
    { name: 'stats', href: '/stats' },
  ]
  return (
    <Breadcrumb
      separator=" | "
      display="flex"
      justifyContent="center"
      marginBottom={100}
    >
      {links.map((l) => {
        const isCurrentPage = l.href === current
        return (
          <BreadcrumbItem key={l.href} isCurrentPage={isCurrentPage}>
            <NextLink href={l.href} legacyBehavior passHref>
              <Link
                margin="0 40px"
                fontWeight={isCurrentPage ? 'bold' : undefined}
                _hover={{ textDecoration: 'underline' }}
              >
                {t(l.name)}
              </Link>
            </NextLink>
          </BreadcrumbItem>
        )
      })}
    </Breadcrumb>
  )
}
