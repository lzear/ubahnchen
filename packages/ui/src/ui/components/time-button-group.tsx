import { Button, ButtonGroup, IconButton, Tooltip } from '@chakra-ui/react'
import { RepeatClockIcon } from '@chakra-ui/icons'
import React from 'react'
import shallow from 'zustand/shallow'
import { useTranslation } from 'next-i18next'
import { useStore } from '../store/store'
import { computeVirtualTime } from '../utils/time-conversion'

export const TimeButtonGroup = () => {
  const { virtualTimeZero, setAt, speed, setVirtualTimeZero } = useStore(
    ({ virtualTimeZero, setAt, speed, setVirtualTimeZero }) => ({
      speed,
      virtualTimeZero,
      setAt,
      setVirtualTimeZero,
    }),
    shallow,
  )
  const { t } = useTranslation()
  return (
    <div style={{ margin: 'auto', textAlign: 'center' }}>
      <ButtonGroup size="sm" isAttached variant="outline">
        <Button
          onClick={() => {
            const virtualTime = computeVirtualTime({
              virtualTimeZero,
              setAt,
              speed,
            })
            setVirtualTimeZero(+virtualTime - 86_400_000)
          }}
          pointerEvents="auto"
        >
          -1{t('time.shortDay')}
        </Button>
        <Button
          onClick={() => {
            const virtualTime = computeVirtualTime({
              virtualTimeZero,
              setAt,
              speed,
            })
            setVirtualTimeZero(+virtualTime - 3_600_000)
          }}
          pointerEvents="auto"
        >
          -1{t('time.shortHour')}
        </Button>
        <Tooltip label={t('time.now')} hasArrow placement="top" openDelay={800}>
          <IconButton
            icon={<RepeatClockIcon />}
            size="sm"
            onClick={() => setVirtualTimeZero()}
            pointerEvents="auto"
            aria-label={t('time.nowLabel')}
          />
        </Tooltip>
        <Button
          size="sm"
          onClick={() => {
            const virtualTime = computeVirtualTime({
              virtualTimeZero,
              setAt,
              speed,
            })
            setVirtualTimeZero(+virtualTime + 3_600_000)
          }}
          pointerEvents="auto"
        >
          +1{t('time.shortHour')}
        </Button>
        <Button
          size="sm"
          onClick={() => {
            const virtualTime = computeVirtualTime({
              virtualTimeZero,
              setAt,
              speed,
            })
            setVirtualTimeZero(+virtualTime + 86_400_000)
          }}
          pointerEvents="auto"
        >
          +1{t('time.shortDay')}
        </Button>
      </ButtonGroup>
    </div>
  )
}
