import {
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Text,
  Tooltip,
} from '@chakra-ui/react'
import React from 'react'
import { useTranslation } from 'next-i18next'
import { useStore } from '../store/store'
import { useSetSpeed } from '../utils/url-parameters'

export const Speed = () => {
  const speed = useStore(({ speed }) => speed)
  const setSpeed = useStore((s) => s.setSpeed)
  const setSpeedUrl = useSetSpeed()

  const [showTooltip, setShowTooltip] = React.useState(false)

  const { t } = useTranslation()

  return (
    <>
      <label htmlFor="speed">
        <Text fontSize="xs" style={{ marginBottom: -5 }}>
          {t('speed')}: x{speed}
        </Text>
        <Slider
          pointerEvents="auto"
          id="speed"
          aria-label="speed"
          value={speed}
          onChangeEnd={(v) => setSpeedUrl(v)}
          onChange={(vv) => setSpeed(vv)}
          min={1}
          max={500}
          size="md"
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
        >
          <SliderTrack pointerEvents="auto">
            <SliderFilledTrack pointerEvents="auto" />
          </SliderTrack>
          <Tooltip
            pointerEvents="auto"
            hasArrow
            // bg="teal.500"
            // placement="top"
            isOpen={showTooltip}
            label={`x${speed}`}
          >
            <SliderThumb pointerEvents="auto" />
          </Tooltip>
        </Slider>
      </label>
    </>
  )
}
