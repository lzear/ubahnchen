'use client'

import { atom, useAtom } from 'jotai'
import { atomWithStorage } from 'jotai/utils'
import _ from 'lodash'

const LOCAL_STORAGE_KEY_1 = 'persistentSVG1'
const LOCAL_STORAGE_KEY_2 = 'persistentSVG2'
const DEBOUNCE_DELAY = 300 // milliseconds

const isValidSVG = (svgString: string) => {
  const parser = new DOMParser()
  const doc = parser.parseFromString(svgString, 'image/svg+xml')
  return doc.documentElement.tagName.toLowerCase() === 'svg'
}

const createPersistentSVGAtoms = (key: string) => {
  const baseAtom = atomWithStorage<string | null>(key, null, undefined, {
    getOnInit: true,
  })
  const isValidAtom = atom(true)
  const isStaleAtom = atom(false)

  const derivedAtom = atom(
    (get) => ({
      svg: get(baseAtom),
      isValid: get(isValidAtom),
      isStale: get(isStaleAtom),
    }),
    (get, set, newSvg: string) => {
      set(isStaleAtom, true)
      const debouncedValidation = _.debounce((s: string) => {
        const valid = isValidSVG(s)
        set(isValidAtom, valid)
        set(isStaleAtom, false)
        if (valid) void set(baseAtom, s)
      }, DEBOUNCE_DELAY)
      debouncedValidation(newSvg)
    },
  )

  return derivedAtom
}

const persistentSVGAtom1 = createPersistentSVGAtoms(LOCAL_STORAGE_KEY_1)
const persistentSVGAtom2 = createPersistentSVGAtoms(LOCAL_STORAGE_KEY_2)

export const usePersistentSVG1 = () => {
  const [{ svg, isValid, isStale }, updateSVG] = useAtom(persistentSVGAtom1)
  return { svg, isValid, isStale, updateSVG }
}

export const usePersistentSVG2 = () => {
  const [{ svg, isValid, isStale }, updateSVG] = useAtom(persistentSVGAtom2)
  return { svg, isValid, isStale, updateSVG }
}
