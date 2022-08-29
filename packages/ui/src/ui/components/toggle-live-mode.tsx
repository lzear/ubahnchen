import React from 'react'
import shallow from 'zustand/shallow'
import { Box, Tooltip } from '@chakra-ui/react'
import { useTranslation } from 'next-i18next'
import Link from 'next/link'
import { useStore } from '../store/store'
import { useSetLiveUrl } from '../utils/url-parameters'
import { TogglingButtonWithReference } from './toggling-button'

export const ToggleLiveMode = () => {
  const liveMode = useStore(({ liveMode }) => liveMode, shallow)
  const query = useSetLiveUrl(!liveMode)

  const { t } = useTranslation()
  return (
    <Box>
      <Tooltip
        openDelay={800}
        hasArrow
        placement="left"
        label={
          // liveMode ? 'switch to accelerated planned train schedule' : 'switch to  live data'
          t(liveMode ? 'switchToPlanned' : 'switchToLive')
        }
      >
        <Box display="block">
          <Link
            href={{ query }}
            replace
            passHref
            style={{ pointerEvents: 'auto' }}
          >
            <TogglingButtonWithReference
              // as="a"
              size="xs"
              width="100%"
              aria-label={t(liveMode ? 'switchToPlanned' : 'switchToLive')} // toggle live mode and planned mode
              isChild1On={liveMode}
              child2={<>{t('planned')}</>}
              child1={
                <>
                  {t('liveMode')}
                  <span className="buggy">{t('buggyBeta')}</span>
                  <style jsx>{`
                    .beta,
                    .buggy {
                      color: white;
                      background-color: darkgreen;
                      font-size: 8px;
                      position: absolute;
                      padding: 1px 2px;
                      opacity: 0.8;
                    }
                    .buggy {
                      right: -38px;
                      top: -9px;
                    }
                  `}</style>
                </>
              }
            />
          </Link>
        </Box>
      </Tooltip>
    </Box>
  )
}

/*
 .visible {
          position: absolute;
          right: 0;
        }
 */
