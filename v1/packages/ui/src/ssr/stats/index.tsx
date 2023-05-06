import React from 'react'
import _ from 'lodash'
import { Box, CloseButton, Heading, Link, Text } from '@chakra-ui/react'
import { useTranslation } from 'next-i18next'
import Head from 'next/head'
import NextLink from 'next/link'
import stats from '../../generated/stats.json'
import routes from '../../generated/routes.json'
import { gtfsToIso } from '../../lib/lib/utils'
import { Breadcrumbs } from '../about/breadcrumbs'
import { NivoStations, NivoBar } from '../../ui/dynamic/nivo'

const typedStats: {
  dayCount: number
  start: string
  end: string
  stats: Record<
    string,
    {
      count: number
      minutes: Record<number, number>
      stops: Record<string, number>
    }
  >
} = stats

const flattenMinutes = Object.keys(typedStats.stats).flatMap((routeName) => {
  const value = typedStats.stats[routeName]
  if (!value) throw new Error('!value')
  const minutes = Object.keys(value.minutes).map(Number)

  return minutes.map((minute) => {
    const count = value.minutes[minute]
    if (count === undefined) throw new Error('f92')
    return {
      routeName,
      minute,
      count: count / typedStats.dayCount,
    }
  })
})

const flattenStops = Object.keys(typedStats.stats).flatMap((routeName) => {
  const value = typedStats.stats[routeName]
  if (!value) throw new Error('!value')
  const stopIds = Object.keys(value.stops)

  return stopIds.map((stopId) => {
    const count = value.stops[stopId]
    if (count === undefined) throw new Error('f92')
    return {
      stopId,
      routeName,
      count: count / typedStats.dayCount,
    }
  })
})

const groupedByMinutes = _.groupBy(flattenMinutes, 'minute')
const groupedByStops = _.groupBy(flattenStops, 'stopId')

const histogramStops = Object.keys(groupedByStops).map((stopId) => {
  const v = groupedByStops[stopId]
  if (!v) throw new Error('!v')
  // @ts-ignore
  const r: { [routeName: string]: number } & {
    stopId: string
  } = {
    stopId,
  }

  // for (const routeName of _.uniq(Object.values(routes))) r[routeName] = 0
  for (const vv of v) r[vv.routeName] = vv.count
  return r
})

const histogramStopsOrdered = _.orderBy(histogramStops, (s) => {
  const { stopId, ...values } = s
  return _.sum(Object.values(values))
})

const histogramRoutes = Object.keys(groupedByMinutes).map((minute) => {
  // @ts-ignore
  const r: { [routeName: string]: number } & {
    minute: number
    time: string
  } = {
    minute: Number(minute),
    time: `${String(Math.floor(Number(minute) / 60) % 24).padStart(
      2,
      '0',
    )}:${String(Number(minute) % 60).padStart(2, '0')}`,
  }
  const v = groupedByMinutes[minute]

  if (!v) throw new Error('!v')

  for (const routeName of _.uniq(Object.values(routes))) r[routeName] = 0
  for (const vv of v) r[vv.routeName] = vv.count
  return r
})

const StatsGraphs: React.FC = () => {
  const { t } = useTranslation('stats')
  return (
    <>
      <Text marginBottom="90px">
        {t('info', {
          date1: gtfsToIso(typedStats.start),
          date2: gtfsToIso(typedStats.end),
          dayCount: typedStats.dayCount,
        })}
        {/*The following data is computed from the planned data between{' '}*/}
        {/*{gtfsToIso(typedStats.start)} and {gtfsToIso(typedStats.end)} (*/}
        {/*{typedStats.dayCount} days).*/}
      </Text>
      <Heading>{t('trainHistogram.title')}</Heading>
      <NivoBar
        data={histogramRoutes}
        routeNames={_.uniq(Object.values(routes)).sort((a, b) =>
          b.localeCompare(a),
        )}
      />
      <Heading marginTop={150}>{t('stationHistogram.title')}</Heading>
      <NivoStations
        data={histogramStopsOrdered}
        routeNames={_.uniq(Object.values(routes)).sort((a, b) =>
          a.localeCompare(b),
        )}
      />
    </>
  )
}

export const Stats: React.FC = () => {
  const { t } = useTranslation('about')
  const title = `Ubähnchen - ${t('stats')}`
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

      <Box padding="20px">
        <Breadcrumbs current="/stats" />
        <StatsGraphs />
      </Box>
    </>
  )
}
