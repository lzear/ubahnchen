import type { ButtonProps } from '@chakra-ui/react'
import { Button, forwardRef, Tooltip } from '@chakra-ui/react'
import React, { useEffect, useRef } from 'react'
import shallow from 'zustand/shallow'
import { useTranslation } from 'next-i18next'
// import Link from 'next/link'
import Link from 'next/link'
import { useStore } from '../store/store'
import { MapName } from '../../lib/enums'
import { useMapUrl } from '../utils/url-parameters'
import { useUrlParameterMap } from '../store/use-url-parameters'

const BButtton: React.FC = forwardRef(
  (
    { onMouseEnter, onMouseLeave, onClick, ...props }: ButtonProps,
    reference,
  ) => {
    const mapName = useStore(({ mapName }) => mapName, shallow)
    const curen = mapName === MapName.U ? 'U' : 'S+U'
    const other = mapName === MapName.U ? 'S+U' : 'U'
    const { t } = useTranslation()
    const usuReference = useRef<HTMLSpanElement>(null)
    useEffect(() => {
      if (usuReference.current) usuReference.current.textContent = curen
    }, [curen])

    return (
      <>
        <Tooltip
          label={t(other === 'U' ? 'switchToU' : 'switchToSU')}
          hasArrow
          placement="left"
          openDelay={800}
        >
          <Button
            ref={reference}
            size="sm"
            onMouseEnter={(event) => {
              if (usuReference.current) usuReference.current.textContent = other
              onMouseEnter?.(event)
            }}
            onMouseLeave={(event) => {
              if (usuReference.current) usuReference.current.textContent = curen
              onMouseLeave?.(event)
            }}
            className="usu-toggle"
            variant="ghost"
            aria-label={t(other === 'U' ? 'switchToU' : 'switchToSU')}
            style={{ pointerEvents: 'auto' }}
            onClick={(event) => {
              if (usuReference.current) usuReference.current.textContent = other
              onClick?.(event)
              // setMap(mapName === MapName.U ? MapName.SU : MapName.U)
              // setMapNameNav(mapName === MapName.U ? MapName.SU : MapName.U)
            }}
            {...props}
          >
            <div className="container">
              <span className="visible" ref={usuReference}>
                {curen}
              </span>
              <span className="hidden">S+U</span>
            </div>
          </Button>
        </Tooltip>
        <style jsx>{`
          .container {
            position: relative;
          }
          .hidden {
            visibility: hidden;
          }
          .visible {
            position: absolute;
            width: 100%;
            text-align: center;
          }
        `}</style>
      </>
    )
  },
)
// BButtton
export const ToggleUsu = () => {
  // return BButtton
  const map = useUrlParameterMap()
  const query = useMapUrl(map === MapName.U ? MapName.SU : MapName.U)
  return (
    <Link href={{ query }} replace passHref style={{ pointerEvents: 'auto' }}>
      <BButtton />
    </Link>
  )
}

/*
 .visible {
          position: absolute;
          right: 0;
        }
 */
