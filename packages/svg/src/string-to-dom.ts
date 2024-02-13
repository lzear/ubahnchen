import { JSDOM } from 'jsdom'

export const stringToDom = (input: string) => {
  return new JSDOM(input, { contentType: 'image/svg+xml' })
}
