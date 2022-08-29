import {
  Box,
  Button,
  Popover,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Text,
  type ToastId,
  Tooltip,
  useToast,
} from '@chakra-ui/react'
import React, { useEffect, useRef } from 'react'
import shallow from 'zustand/shallow'
import { CopyIcon } from '@chakra-ui/icons'
import { utcToZonedTime } from 'date-fns-tz'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'
import { useStore } from '../store/store'
import { computeVirtualTime } from '../utils/time-conversion'
import { formatTzInLocale } from '../../lib/date-format'
import { useSetDateUrl } from '../utils/url-parameters'
import { Spacer } from '../../lib/spacer'
import { TimeButtonGroup } from './time-button-group'
import { Calendar } from './calendar'

const CopyLink = () => {
  const { replace } = useRouter()
  const toast = useToast()
  const { t } = useTranslation()
  const dateUrl = useSetDateUrl()
  const toastIdReference = React.useRef<ToastId>()
  return (
    <Button
      size="xs"
      leftIcon={<CopyIcon />}
      onClick={async () => {
        const { virtualTimeZero, setAt, speed } = useStore.getState()
        const virtualTime = computeVirtualTime({
          virtualTimeZero,
          setAt,
          speed,
        })

        const zonedDate = utcToZonedTime(virtualTime, timeZone)
        // const iso = virtualTime.toISOString()
        const iso = formatTzInLocale(zonedDate, "yyyy-MM-dd'T'HHmmssXXXX", {
          timeZone,
        })
        const query = dateUrl(iso)
        void replace({ query }, undefined, {
          shallow: true,
        })
        const urlSearchParameters = new URLSearchParams(query)
        await navigator.clipboard.writeText(
          `${window.location.origin}?${urlSearchParameters.toString()}`,
        )
        if (toastIdReference.current) toast.close(toastIdReference.current)
        toastIdReference.current = toast({
          size: 'xs',
          position: 'bottom-right',
          title: t('urlCopied'),
          description: `${t('forDate')}: ${formatTzInLocale(
            zonedDate,
            'PPPP pppp',
            { timeZone },
          )}`,
          status: 'success',
          duration: 3000,
          isClosable: true,
        })
      }}
    >
      {t('copyLink')}
    </Button>
  )
}
const timeZone = 'Europe/Berlin'

const WW: React.FC<{ children: JSX.Element }> = ({ children }) => {
  const { t } = useTranslation()
  return (
    <Tooltip
      label={t('changeDateTime')}
      hasArrow
      placement="left"
      openDelay={800}
    >
      {children}
    </Tooltip>
  )
}

const Clock: React.ComponentType = () => {
  const liveMode = useStore(({ liveMode }) => liveMode)

  const { t } = useTranslation()
  const W: React.FC<{ children: JSX.Element }> = liveMode
    ? ({ children }) => children
    : WW

  return (
    <div className="top-right">
      <Popover closeOnBlur={false} placement="auto">
        <W>
          <Box display="inline-block">
            <PopoverTrigger>
              <Button
                // disabled={liveMode}
                // paddingTop={5}
                // paddingBottom={5}
                size="sm"
                // pointerEvents={liveMode ? undefined : 'auto'}
                pointerEvents="auto"
              >
                <TimeV />
              </Button>
            </PopoverTrigger>
          </Box>
        </W>
        <PopoverContent
          pointerEvents="auto"
          // background={colorMode === 'light' ? '#eeeeeecc' : '#222222cc'}
          // background="#8885"
          // backdropFilter="blur(8px)"
        >
          <PopoverCloseButton />
          <PopoverHeader>{t('timeControl')}</PopoverHeader>
          <PopoverBody>
            <TimeButtonGroup />
            <Spacer y={15} />
            <Calendar />
            {/*<Speed />*/}
            <Spacer y={15} />
            <CopyLink />
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </div>
  )
}

const useTimePlanned = (timeReference: React.RefObject<HTMLSpanElement>) => {
  const setDay = useStore((s) => s.setDay)
  useEffect(() => {
    let handle: NodeJS.Timer
    const cancel = useStore.subscribe(
      ({ virtualTimeZero, setAt, speed, day }) => ({
        virtualTimeZero,
        setAt,
        speed,
        day,
      }),
      ({ virtualTimeZero, setAt, speed, day }) => {
        const updateTime = () => {
          if (timeReference.current) {
            const virtualTime = computeVirtualTime({
              virtualTimeZero,
              setAt,
              speed,
            })
            const zonedDate = utcToZonedTime(virtualTime, timeZone)
            const newday = formatTzInLocale(zonedDate, 'yyyy-MM-dd', {
              timeZone: 'Europe/Berlin',
            })
            if (newday !== day) setDay(newday)
            timeReference.current.textContent = formatTzInLocale(
              zonedDate,
              'HH:mm',
            )
          }
        }
        updateTime()
        if (handle) clearInterval(handle)
        handle = setInterval(updateTime, Math.min(60_000 / speed, 1000))
      },
      { equalityFn: shallow, fireImmediately: true },
    )
    return () => {
      if (handle) clearInterval(handle)
      cancel()
    }
  }, [setDay, timeReference])
}
const useTimeLive = (timeReference: React.RefObject<HTMLSpanElement>) => {
  const setDay = useStore((s) => s.setDay)
  useEffect(() => {
    let handle: NodeJS.Timer
    const cancel = useStore.subscribe(
      ({ day }) => ({
        day,
      }),
      ({ day }) => {
        const updateTime = () => {
          if (timeReference.current) {
            const virtualTime = Date.now()
            const zonedDate = utcToZonedTime(virtualTime, timeZone)
            const newday = formatTzInLocale(zonedDate, 'yyyy-MM-dd', {
              timeZone: 'Europe/Berlin',
            })
            if (newday !== day) setDay(newday)
            timeReference.current.textContent = formatTzInLocale(
              zonedDate,
              'HH:mm',
            )
          }
        }
        updateTime()
        if (handle) clearInterval(handle)
        handle = setInterval(() => updateTime(), 1000)
      },
      { equalityFn: shallow, fireImmediately: true },
    )
    return () => {
      if (handle) clearInterval(handle)
      cancel()
    }
  }, [setDay, timeReference])
}

const TimePlanned: React.FC<{
  timeReference: React.RefObject<HTMLSpanElement>
}> = ({ timeReference }) => {
  useTimePlanned(timeReference)
  // eslint-disable-next-line unicorn/no-null
  return null
}
const TimeLive: React.FC<{
  timeReference: React.RefObject<HTMLSpanElement>
}> = ({ timeReference }) => {
  useTimeLive(timeReference)
  // eslint-disable-next-line unicorn/no-null
  return null
}

const TimeV: React.FC = () => {
  const day = useStore((s) => s.day)
  const liveMode = useStore((s) => s.liveMode)

  const timeReference = useRef<HTMLSpanElement>(null)

  const weekday = formatTzInLocale(new Date(day), 'EEE', {
    timeZone: 'Europe/Berlin',
  })
  return (
    <span className="mono">
      {liveMode ? (
        <TimeLive timeReference={timeReference} />
      ) : (
        <TimePlanned timeReference={timeReference} />
      )}
      <Text fontSize="xs">
        {weekday}, {day}
      </Text>
      <Text fontSize="lg">
        <span ref={timeReference} />
      </Text>

      <style jsx>{`
        .mono {
          font-family: 'JetBrains Mono', SFMono-Regular, Consolas,
            'Liberation Mono', Menlo, Courier, monospace;
        }
      `}</style>
    </span>
  )
}

export default Clock
