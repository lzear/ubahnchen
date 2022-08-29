import {
  Button,
  ButtonGroup,
  Checkbox,
  IconButton,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Switch,
  Text,
  Tooltip,
  useDisclosure,
} from '@chakra-ui/react'
import React, { useMemo, useState } from 'react'
import shallow from 'zustand/shallow'
import _ from 'lodash'
import { SettingsIcon } from '@chakra-ui/icons'
import { useTranslation } from 'next-i18next'
import Link from 'next/link'
import { useStore } from '../store/store'
import { MapName } from '../../lib/enums'
import { trainManager } from '../trains/train-manager'
import { Spacer } from '../../lib/spacer'

const OFFSET_DELTA_MAX = 4
const THROTTLE_MAX = 1000

const langs = [
  {
    code: 'fr',
    emoj: '🇫🇷',
  },
  {
    code: 'en',
    emoj: '🇬🇧',
  },
  {
    code: 'de',
    emoj: '🇩🇪',
  },
] as const

const SettingsBody = () => {
  const { t, i18n } = useTranslation(undefined, { keyPrefix: 'settings' })
  const {
    mapName,
    hidpi,
    mapsObjs,
    shadow,
    pathOffsetDelta,
    opacityFade,
    frameRateThrottle,
    settingsSetter,
    devInfo,
    displayStations,
    showWater,
    displayStationNames,
  } = useStore(
    ({
      mapName,
      mapsObjs,
      shadow,
      hidpi,
      pathOffsetDelta,
      opacityFade,
      frameRateThrottle,
      settingsSetter,
      devInfo,
      displayStations,
      displayStationNames,
      showWater,
    }) => ({
      mapName,
      showWater,
      hidpi,
      mapsObjs,
      shadow,
      pathOffsetDelta,
      opacityFade,
      frameRateThrottle,
      settingsSetter,
      devInfo,
      displayStations,
      displayStationNames,
    }),
    shallow,
  )

  const [temporaryDelta, setTemporaryDelta] = useState(pathOffsetDelta)
  const [temporaryShadow, setTemporaryShadow] = useState(shadow)
  const [temporaryThrottle, setTemporaryThrottle] = useState(frameRateThrottle)

  const setInStore = useMemo(
    () => _.debounce(settingsSetter, 200),
    [settingsSetter],
  )

  return (
    <>
      <ModalBody pb={6}>
        <div className="field">
          <Switch
            size="sm"
            style={{ pointerEvents: 'auto' }}
            isChecked={hidpi}
            onChange={(event) =>
              settingsSetter({ hidpi: event.target.checked })
            }
          />
          <Text>{t('highRes')}</Text>
        </div>

        <div className="field">
          <Switch
            size="sm"
            style={{ pointerEvents: 'auto' }}
            isChecked={opacityFade}
            onChange={(event) => {
              trainManager.clearTrains()
              settingsSetter({ opacityFade: event.target.checked })
            }}
          />
          <Text>{t('fadeInOut')}</Text>
        </div>

        <div className="field">
          <Switch
            size="sm"
            pointerEvents="auto"
            isChecked={displayStations}
            onChange={(event) => {
              const display = event.target.checked
              if (mapName === MapName.U) {
                // @ts-ignore
                const stations = mapsObjs?.uMap.children[0]?.children?.stations
                if (stations) stations.opacity = display ? 1 : 0
              } else {
                // @ts-ignore
                const stations = mapsObjs?.suMap.children?.stations
                if (stations) stations.opacity = display ? 1 : 0
              }
              settingsSetter({ displayStations: display })
            }}
          />
          <Text>{t('displayStations')}</Text>
        </div>

        <div className="field">
          <Switch
            size="sm"
            pointerEvents="auto"
            isChecked={displayStationNames}
            onChange={(event) => {
              settingsSetter({ displayStationNames: event.target.checked })
            }}
          />
          <Text>{t('displayStationNames')}</Text>
        </div>
        <div className="field">
          <Switch
            size="sm"
            pointerEvents="auto"
            isChecked={showWater}
            onChange={(event) => {
              settingsSetter({ showWater: event.target.checked })
            }}
          />
          <Text>{t('showWater')}</Text>
        </div>

        <div className="field" style={{ display: 'inline-flex', gap: 10 }}>
          <Text>{t('language')}</Text>
          <ButtonGroup variant="outline" spacing="2" size="xs">
            {langs.map((l) => (
              <Link key={l.code} href="/" locale={l.code} replace passHref>
                <Button
                  isActive={l.code === i18n.language}
                  onClick={() => {
                    // @ts-ignore
                    window['__localeId__'] = l.code
                  }}
                >
                  {l.emoj}
                </Button>
              </Link>
            ))}
          </ButtonGroup>
        </div>
        <Spacer y={10} />
        <div className="field">
          <Switch
            size="sm"
            pointerEvents="auto"
            isChecked={devInfo}
            onChange={(event) =>
              settingsSetter({ devInfo: event.target.checked })
            }
          />
          <Text>{t('extraDevInfo')}</Text>
        </div>

        {devInfo ? (
          <>
            <div className="field">
              <label htmlFor="precision">
                <Text fontSize="sm" marginBottom={-2}>
                  {t('precision')}
                </Text>
                <Slider
                  size="sm"
                  id="precision"
                  pointerEvents="auto"
                  aria-label={t('ariaPrecision')}
                  // defaultValue={30}
                  step={0.5}
                  min={-OFFSET_DELTA_MAX}
                  max={0}
                  value={-temporaryDelta}
                  onChange={(v) => {
                    setTemporaryDelta(-v)
                    setInStore({ pathOffsetDelta: -v })
                  }}
                >
                  <SliderTrack pointerEvents="auto">
                    <SliderFilledTrack />
                  </SliderTrack>
                  <Tooltip
                    color="white"
                    hasArrow
                    placement="top"
                    isOpen={true}
                    label={`${Math.round(temporaryDelta * 10) / 10}px`}
                  >
                    <SliderThumb pointerEvents="auto" />
                  </Tooltip>
                </Slider>
              </label>
            </div>

            <div className="field">
              <label htmlFor="shadow">
                <Checkbox
                  marginBottom={-500}
                  isChecked={temporaryShadow !== undefined}
                  onChange={(event) => {
                    setTemporaryShadow(event.target.checked ? 0.3 : undefined)
                    setInStore({
                      shadow: event.target.checked ? 0.3 : undefined,
                    })
                  }}
                  size="sm"
                >
                  {t('shadowBrightness')}
                </Checkbox>
                <Slider
                  size="sm"
                  isDisabled={temporaryShadow === undefined}
                  id="shadow"
                  pointerEvents="auto"
                  aria-label={t('ariaShadowBrightness')}
                  // defaultValue={30}
                  step={0.05}
                  min={0}
                  max={1}
                  value={temporaryShadow}
                  onChange={(v) => {
                    setTemporaryShadow(v)
                    setInStore({ shadow: v })
                  }}
                >
                  <SliderTrack pointerEvents="auto">
                    <SliderFilledTrack />
                  </SliderTrack>
                  <Tooltip
                    color="white"
                    hasArrow
                    placement="top"
                    isOpen={true}
                    label={temporaryShadow}
                  >
                    <SliderThumb pointerEvents="auto" />
                  </Tooltip>
                </Slider>
              </label>
            </div>

            <div className="field">
              <label htmlFor="throttle-fps">
                <Text fontSize="sm" marginBottom={-2}>
                  {t('fps')}
                </Text>
                <Slider
                  size="sm"
                  id="throttle-fps"
                  pointerEvents="auto"
                  aria-label={t('ariaFps')}
                  // defaultValue={30}
                  step={0.1}
                  min={-THROTTLE_MAX}
                  max={0}
                  value={-temporaryThrottle}
                  onChange={(v) => {
                    setTemporaryThrottle(-v)
                    setInStore({ frameRateThrottle: -v })
                  }}
                >
                  <SliderTrack pointerEvents="auto">
                    <SliderFilledTrack />
                  </SliderTrack>

                  <Tooltip
                    hasArrow
                    color="white"
                    placement="top"
                    isOpen={true}
                    label={
                      temporaryThrottle > 100 ? (
                        <>{Math.round(100_000 / temporaryThrottle) / 100}</>
                      ) : (
                        <>{t('max')}</>
                      )
                    }
                  >
                    <SliderThumb pointerEvents="auto" />
                  </Tooltip>
                </Slider>
              </label>
            </div>
          </>
        ) : // eslint-disable-next-line unicorn/no-null
        null}
      </ModalBody>
      <style jsx>{`
        .field {
          margin: 10px 0;
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 10px;
        }
      `}</style>
    </>
  )
}

export const Settings: React.ComponentType = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { t } = useTranslation()
  return (
    <>
      <Tooltip
        label={t('settings.name')}
        hasArrow
        placement="left"
        openDelay={800}
      >
        <IconButton
          aria-label={t('settings.name')}
          size="sm"
          onClick={onOpen}
          pointerEvents="auto"
          variant="ghost"
          icon={<SettingsIcon />}
        />
      </Tooltip>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{t('settings.name')}</ModalHeader>
          <ModalCloseButton />
          <SettingsBody />
          <ModalFooter>
            <Button onClick={onClose} aria-label={t('ok')}>
              {t('ok')}
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
