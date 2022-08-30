import {
  Code,
  Heading,
  Link,
  ListItem,
  Text,
  UnorderedList,
} from '@chakra-ui/react'
import { ExternalLinkIcon, EmailIcon } from '@chakra-ui/icons'
import headers from 'gtfs-loader/dist/db/headers.json'
import React, { useEffect, useState } from 'react'
import { Trans, useTranslation } from 'next-i18next'
import { monoFont } from '../../lib/chakra'
import { Spacer } from '../../lib/spacer'

const getLastModified = async () => {
  const response = await fetch(`/api/gtfs-last-modified`)
  return response.json()
}

export const How: React.FC = () => {
  const { t, i18n } = useTranslation('about')
  const fileDateInUse = headers['last-modified']
  const [gtfsLastModified, setGtfsLastModified] = useState<string>()
  useEffect(() => {
    getLastModified().then((s) => setGtfsLastModified(s))
  }, [])
  return (
    <>
      <Heading as="h1" size="xl">
        Ubähnchen
      </Heading>
      {i18n.language !== 'de' && (
        <>
          <Spacer y={10} />
          <Text>
            <strong style={{ fontFamily: monoFont }}>U</strong>:{' '}
            {t('explain.underground')},
            <br />
            <strong style={{ fontFamily: monoFont }}>Bahn:</strong>{' '}
            {t('explain.train')},
            <br />
            <strong style={{ fontFamily: monoFont }}>¨-chen</strong>:{' '}
            {t('explain.cuteSuffix')}.
          </Text>
          <Spacer y={10} />
        </>
      )}

      <Text>
        <Trans ns="about" i18nKey="firstDescr">
          <em>Ubähnchen</em> is a dynamic map of the Berlin trains. Its design
          is inspired by the videogame Minimetro.
        </Trans>
      </Text>

      <Spacer y={30} />
      <Heading as="h2" size="lg">
        {t('how.title')}
      </Heading>
      <Spacer y={10} />
      {/*<Text">*/}
      {/*  <Trans ns="about" i18nKey="how.text">*/}
      {/*    The modes can be changed by clicking <em>Live</em> or <em>Planned</em>{' '}*/}
      {/*    on the top right.*/}
      {/*  </Trans>*/}
      {/*</Text>*/}

      <Heading as="h3" size="md">
        {t('planned.title')}
      </Heading>
      <Text>
        <Trans ns="about" i18nKey="planned.text">
          Time table data are extracted from the{' '}
          <Link
            isExternal
            href="https://www.vbb.de/vbb-services/api-open-data/datensaetze/"
          >
            GTFS data of VBB <ExternalLinkIcon mx="2px" />
          </Link>{' '}
          {/* @ts-ignore*/}
          (published on <Code fontStyle="italic">{{ fileDateInUse }}</Code>).
          From it, active trips and their stops <Code>arrival_time</Code> and{' '}
          <Code>departure time</Code> can be computed for any given hour on any
          given day. Trains movement is simulated with a constant speed between
          stations.
        </Trans>
      </Text>

      {fileDateInUse !== gtfsLastModified && (
        <>
          <Spacer y={10} />
          <Text>
            <Trans ns="about" i18nKey="planned.outdate">
              ⚠️ A new GTFS file is available. It was published on{' '}
              {/* @ts-ignore */}
              <Code fontStyle="italic">{{ gtfsLastModified }}</Code>
            </Trans>
          </Text>
        </>
      )}
      <Spacer y={20} />

      <Heading as="h3" size="md">
        {t('live.title')}
      </Heading>
      <Text>{t('live.vbbDisclaimer')}</Text>
      <Text>
        <Trans ns="about" i18nKey="live.text">
          The{' '}
          <Link
            isExternal
            href="https://github.com/public-transport/hafas-client"
          >
            HAFAS API <ExternalLinkIcon mx="2px" />
          </Link>{' '}
          has a &ldquo;radar&rdquo; endpoint which returns the position of all
          trains and <em>animation data</em> containing stops information
          (origin, destination) and a <Code>proc</Code>
          property, which I think means{' '}
          <em>&ldquo;position between 2 stops, in percents&rdquo;</em>.
        </Trans>
      </Text>
      <Spacer y={10} />
      <Text>
        {t('live.unfortunately')}
        {/*Unfortunately, there are a few bugs and trains occasionally disappear or*/}
        {/*sprint very fast on the map.*/}
      </Text>
      <Spacer y={40} />
      <Heading as="h2" size="lg">
        {t('links.title')}
      </Heading>
      <UnorderedList>
        <ListItem>
          {/*Author&apos;s website:{' '}*/}
          {t('links.author')}:{' '}
          <Link isExternal href="https://www.elzear.de/">
            elzear.de <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          {t('links.twitter')}:{' '}
          <Link isExternal href="https://twitter.com/_lzear">
            @_lzear <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          {/*Author&apos;s website:{' '}*/}
          {t('links.email')}:{' '}
          <Link isExternal href="mailto:elzear@elzear.de">
            <EmailIcon mx="2px" /> elzear@elzear.de
          </Link>
        </ListItem>
        <ListItem>
          {t('links.sourceCode')}:{' '}
          <Link isExternal href="https://github.com/lzear/ubahnchen">
            github.com/lzear/ubahnchen <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          {t('fuckCars')}:{' '}
          <Link isExternal href="https://www.reddit.com/r/fuckcars/">
            r/fuckcars <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </UnorderedList>

      <Spacer y={70} />
      <Text fontSize="sm">
        <strong>{t('disclaimer.title')}</strong>:{' '}
        <span>{t('disclaimer.text')}</span>
      </Text>
    </>
  )
}
