import { format } from 'date-fns'
import { format as formatTz } from 'date-fns-tz'
import { de, enGB, fr } from 'date-fns/locale'

type Locals = 'en' | 'fr' | 'de'
const locals = ['en', 'fr', 'de'] as const

const locales: Record<Locals, Locale> = { en: enGB, fr, de }

const isHandledLocale = (loc: string): loc is Locals => {
  return (locals as readonly string[]).includes(loc)
}

export const formatInLocale: typeof format = (date, formatString, options) => {
  const localeId =
    typeof window !== 'undefined'
      ? (window as any)['__localeId__']
      : (global as any)['__localeId__']

  const locale = isHandledLocale(localeId) ? locales[localeId] : de
  return format(date, formatString, { locale, ...options })
}

export const formatTzInLocale: typeof formatTz = (
  date,
  formatString,
  options,
) => {
  const localeId =
    typeof window !== 'undefined'
      ? (window as any)['__localeId__']
      : (global as any)['__localeId__']

  const locale = isHandledLocale(localeId) ? locales[localeId] : de
  return formatTz(date, formatString, { locale, ...options })
}
