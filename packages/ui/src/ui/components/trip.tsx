import React from 'react'
import { useRouter } from 'next/router'
import {
  IconButton,
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverHeader,
  Spinner,
  Tag,
} from '@chakra-ui/react'
import { CloseIcon, LockIcon, UnlockIcon } from '@chakra-ui/icons'
import shallow from 'zustand/shallow'
import { useStore } from '../store/store'
import { useFindFirstTripQuery } from '../../generated/components'
import { lineColors, lineTextColors } from '../../lib/line-colors'
import { TogglingIconButton } from './toggling-icon-button'
import { useTrip } from './use-trip'

export const useTripIdParameter = () => {
  const { query } = useRouter()
  const { trip, jid } = query
  return {
    tripId: typeof trip === 'string' ? Number(trip) : undefined,
    jid: typeof jid === 'string' ? jid.replaceAll('-', '|') : undefined,
  }
}

export const useTripId = () => useStore((s) => s.tripId)

export const useTripGtfs = () => {
  const tripId = useTripId()
  const { data, ...rest } = useFindFirstTripQuery(
    { where: { trip_id: tripId ? { equals: tripId } : undefined } },
    { enabled: !!tripId },
  )

  const newData = data?.findFirstTrips
    ? {
        routeName: data.findFirstTrips.routes.route_name,
        stops: data.findFirstTrips.stop_times?.map((s) => {
          const gtfsTime = s.departure_time ?? s.arrival_time
          return {
            name: s.stops.stop_name?.replaceAll('(Berlin)', '').trim(),
            time: gtfsTime ? gtfsTimeToString(gtfsTime) : undefined,
          }
        }),
      }
    : undefined
  return { data: newData, ...rest }
}

const gtfsTimeToString = (gtfsTime: number) => {
  const hours = Math.floor(gtfsTime / 3600) % 24
  const minutes = Math.floor(gtfsTime / 60) % 60
  const seconds = gtfsTime % 60
  return [hours, minutes, seconds]
    .map((n) => (n < 10 ? '0' + n : n.toString()))
    .join(':')
}

export const Trip: React.FC = () => {
  const { data, isFetching } = useTrip()

  const { replace, query } = useRouter()

  const { following, setFollowing, setTripId } = useStore(
    (s) => ({
      following: s.following,
      setFollowing: s.setFollowing,
      setTripId: s.setTripId,
    }),
    shallow,
  )
  if (isFetching) return <Spinner />

  if (!data?.stops) return <></>
  return (
    // eslint-disable-next-line jsx-a11y/no-autofocus
    <Popover isOpen autoFocus={false}>
      <PopoverContent
        maxWidth="220px"
        borderWidth="1px"
        borderRadius="lg"
        // overflow="hidden"
        // position="relative"
        padding="8px 2px 2px 8px"
        // background="#8882"
        maxHeight="100vh"
        flex="0 1 auto"
        display="flex"
        flexDirection="column"
        backdropFilter="blur(2px)"
        whiteSpace="nowrap"
      >
        <PopoverHeader
          padding="0 10px 5px"
          display="flex"
          justifyContent="space-between"
        >
          <TogglingIconButton
            size="sm"
            aria-label="lock view on this train"
            child1={<LockIcon />}
            child2={<UnlockIcon />}
            isChild1On={following}
            toggle={() => setFollowing(!following)}
            pointerEvents="auto"
          />
          {data.routeName ? (
            <Tag
              fontWeight="bold"
              color={
                (lineTextColors as Record<string, string>)[data.routeName] ||
                '#fff'
              }
              background={
                (lineColors as Record<string, string>)[data.routeName] || '#888'
              }
              margin="0 4px 0 0"
              padding="0 10px"
            >
              {data.routeName}
            </Tag>
          ) : // eslint-disable-next-line unicorn/no-null
          null}
          <IconButton
            variant="ghost"
            size="sm"
            aria-label="Close"
            icon={<CloseIcon />}
            pointerEvents="auto"
            onClick={() => {
              const { trip, jid, ...restQuery } = query
              setTripId()
              void replace({ query: restQuery }, undefined, {
                shallow: true,
              })
            }}
          />
        </PopoverHeader>
        <PopoverBody
          overflow="auto"
          pointerEvents="auto"
          fontSize="10px"
          padding={0}
        >
          <div className="stops">
            {data.stops.map((stop) => (
              <div key={`${stop.name}-${stop.time}`}>
                {stop.time}{' '}
                {'delay' in stop && stop.delay ? `(+${stop.delay}s) ` : ''}
                <strong>{stop.name}</strong>
              </div>
            ))}
          </div>
          <style jsx>{`
            .stops {
              //margin-top: 4px;
              //pointer-events: auto;
              //overflow: auto;
              //font-size: 10px;
              //padding-right: 10px;
              font-family: 'JetBrains Mono', Consolas, 'Liberation Mono',
                Courier, monospace;
            }
          `}</style>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  )
}
