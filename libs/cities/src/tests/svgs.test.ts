import fs from 'node:fs'

import { cities, citiesList } from '../index'
import { P, SVG } from '../paths'

describe.each(citiesList)('%s', (city) => {
  describe.todo.each(Object.keys(cities[city].maps))('%s', (map) => {
    it.each([
      SVG.STEP_00_ORIGINAL,
      SVG.STEP_10_SIMPLIFIED,
      SVG.STEP_20_ANNOTATED,
      SVG.STEP_30_JUST_LINES_N_STATIONS,
      SVG.STEP_31_JUST_LINES,
      SVG.STEP_32_JUST_STATIONS,
    ])('%s', (svg) =>
      expect(fs.existsSync(P(city, map).SRC.SVG[svg])).toBeTruthy(),
    )

    it.each([
      SVG.STEP_00_ORIGINAL,
      SVG.STEP_10_SIMPLIFIED,
      SVG.STEP_20_ANNOTATED,
      SVG.STEP_30_JUST_LINES_N_STATIONS,
      SVG.STEP_31_JUST_LINES,
      SVG.STEP_32_JUST_STATIONS,
    ])('%s', (svg) =>
      expect(fs.existsSync(P(city, map).PUBLIC.SVG[svg])).toBeTruthy(),
    )
  })
})
