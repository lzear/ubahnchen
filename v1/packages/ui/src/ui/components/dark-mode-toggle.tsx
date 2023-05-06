import { IconButton, Tooltip, useColorMode } from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import React, { useState } from 'react'
import { useTranslation } from 'next-i18next'

export const DarkModeToggle = () => {
  const { toggleColorMode, colorMode } = useColorMode()
  const [hovered, setHovered] = useState(false)
  const { t } = useTranslation()
  return (
    <>
      <Tooltip
        label={t(colorMode === 'light' ? 'switchToDark' : 'switchToLight')}
        hasArrow
        placement="left"
        openDelay={800}
      >
        <IconButton
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          size="sm"
          className="dark-mode-button-toggle"
          variant="ghost"
          icon={
            hovered === (colorMode === 'light') ? <MoonIcon /> : <SunIcon />
          }
          aria-label={
            t(colorMode === 'light' ? 'switchToDark' : 'switchToLight') ||
            'switch color mode'
          }
          pointerEvents="auto"
          onClick={() => {
            toggleColorMode()
            setHovered(false)
          }}
        />
      </Tooltip>
      <style jsx>{`
        :global(.dark-mode-button-toggle):hover .child1 {
          display: none;
        }
        :global(.dark-mode-button-toggle):not(:hover) .child2 {
          display: none;
        }
      `}</style>
    </>
  )
}
