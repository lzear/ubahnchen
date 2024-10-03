import * as cheerio from 'cheerio'

const checkDuplicatedAnnotations = (input: string, attribute: string) => {
  const $ = cheerio.load(input, { xml: true })
  const elements = $(`*[${attribute}]`)
  const read = new Set<string>()
  elements.each((_, element) => {
    const value = $(element).attr(attribute)
    if (!value) throw new Error('Invalid attribute')
    if (read.has(value)) throw new Error(`Duplicated annotation: ${value}`)
    read.add(value)
  })
  return read
}

export const annotate = (input: string, attribute: string): string => {
  const $ = cheerio.load(input, { xml: true })
  const elements = $('*')
  const existing = checkDuplicatedAnnotations(input, attribute)
  let i = 1
  elements.each((_, element) => {
    if ($(element).attr(attribute)) return
    while (existing.has(i.toString())) i++
    $(element).attr(attribute, String(i))
    i++
  })
  return $.xml()
}
