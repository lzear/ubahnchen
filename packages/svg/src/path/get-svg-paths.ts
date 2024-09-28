import * as cheerio from 'cheerio'

type R<S extends boolean> = S extends true
  ? { id: string; d: string; color: string }
  : { id?: string; d?: string; color?: string }

export function extractSVGPaths<S extends boolean = true>(
  svgString: string,
  strict: S = true as S,
): R<S>[] {
  const $ = cheerio.load(svgString, { xml: true })

  return $('path')
    .map((_, element) => {
      // console.log(`antoinelog element`, element)

      const $element = $(element)
      // return {
      //   id: $element.attr('id'),
      //   d: $element.attr('d'),
      //   color: $element.attr('stroke'),
      // }

      const id = $element.attr('id')
      const d = $element.attr('d')
      const color = $element.attr('stroke')
      if (!strict) return { id, d, color } as R<S>
      if (!id || !d || !color) throw new Error('Missing attributes')
      return { id, d, color }
    })
    .get()
}
