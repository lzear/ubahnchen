import * as cheerio from 'cheerio'

export const mergeSvgs = (svgs: string[]) => {
  const [backgroundSvg, ...foregroundSvgs] = svgs
  if (!backgroundSvg) throw new Error('Background SVG is required')
  const $bg = cheerio.load(backgroundSvg, { xml: true })
  for (const foregroundSvg of foregroundSvgs)
    $bg('svg').append(
      cheerio.load(foregroundSvg, { xml: true })('svg').children(),
    )
  return $bg.xml()
}
