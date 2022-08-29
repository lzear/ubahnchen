import shallow from 'zustand/shallow'
import { useColorMode, useToast } from '@chakra-ui/react'
import type { ToastId } from '@chakra-ui/react'
import { useEffect, useRef } from 'react'
import { useTranslation } from 'next-i18next'
import { MapName } from '../../lib/enums'
import { useStore } from '../store/store'
import { useUrlParametersSync } from '../store/use-url-parameters'
import { insertWater } from '../paper/insert-maps'
import { useIsMobile } from '../utils/is-mobile'
import { fromStorage } from '../store/local-storage'
import { useGestures } from './gestures'

const useWater = () => {
  const { mapsObjs, showWater, mapName, suWater } = useStore(
    (s) => ({
      mapsObjs: s.mapsObjs,
      showWater: s.showWater,
      mapName: s.mapName,
      suWater: s.suWater,
    }),
    shallow,
  )
  const { colorMode } = useColorMode()
  const shouldShow = showWater && mapName === MapName.SU && mapsObjs
  const gMap = mapsObjs?.gMap
  useEffect(() => {
    // @ts-ignore
    const water = suWater?.children['water']
    // @ts-ignore
    const buildinds1 = suWater?.children['buildings-1']
    // @ts-ignore
    const buildinds2 = suWater?.children['buildings-2']
    // @ts-ignore
    const border = suWater?.children['border']

    // const buildingsColor = colorMode === 'light' ? '#F5E9DD' : '#4A5568'
    const buildingsColor = colorMode === 'light' ? '#faf6f2' : '#202837'
    const waterColor = colorMode === 'light' ? '#d2eaf7' : '#0b2e41' // 0f3e57
    const borderColor = colorMode === 'light' ? '#dfc3db' : '#42243e'
    if (buildinds1) buildinds1.fillColor = buildingsColor
    if (buildinds2) {
      buildinds2.strokeColor = buildingsColor
      buildinds2.fillColor = buildingsColor
    }
    if (water) water.fillColor = waterColor
    if (border) border.fillColor = borderColor
  }, [colorMode, suWater])
  useEffect(() => {
    if (!gMap) return
    if (shouldShow) {
      if (suWater) suWater.insertBelow(gMap)
      else void insertWater(gMap)
    } else if (!showWater) suWater?.remove()
  }, [gMap, shouldShow, showWater, suWater])
}

const useMobileWarning = () => {
  const toast = useToast()
  const toastIdReference = useRef<ToastId>()
  const isMobile = useIsMobile()
  const settingsSetter = useStore((s) => s.settingsSetter, shallow)
  const { t } = useTranslation()
  useEffect(() => {
    if (isMobile && !fromStorage) {
      settingsSetter({
        showWater: false,
        displayStations: false,
        displayStationNames: false,
      })
      toastIdReference.current = toast({
        id: 'mobile-warning',
        title: t('mobileWarning.title'),
        description: t('mobileWarning.description'),
        duration: 6000,
        status: 'warning',
        isClosable: true,
      })
    }
  }, [isMobile, settingsSetter, t, toast])
}

export const Hooks = () => {
  useUrlParametersSync()
  useGestures()
  useWater()
  useMobileWarning()

  // eslint-disable-next-line unicorn/no-null
  return null
}
