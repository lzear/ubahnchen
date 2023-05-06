import _ from 'lodash'

export type SettingsLocalStorage = {
  displayStations: boolean
  displayStationNames: boolean
  showWater: boolean
}

export const KEY_SETTINGS = 'settings'

export const setLocalStorage = _.debounce(
  (s: SettingsLocalStorage) =>
    localStorage.setItem(KEY_SETTINGS, JSON.stringify(s)),
  2000,
)

const getLocalStorage = (): Partial<SettingsLocalStorage> | undefined => {
  try {
    const item = localStorage.getItem(KEY_SETTINGS)
    if (!item) return undefined
    return JSON.parse(item)
  } catch {
    return undefined
  }
}

export const fromStorage = getLocalStorage()
