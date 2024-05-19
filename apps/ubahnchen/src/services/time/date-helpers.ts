import type { Locale } from 'date-fns'
import { format } from 'date-fns'
import { de, enGB, fr } from 'date-fns/locale'
import { format as formatTz } from 'date-fns-tz'

type Locals = 'en' | 'fr' | 'de'
const locals = ['en', 'fr', 'de'] as const

const locales: Record<Locals, Locale> = { en: enGB, fr, de }

const isHandledLocale = (loc: string): loc is Locals => {
  return (locals as readonly string[]).includes(loc)
}

export const formatInLocale: typeof format = (date, formatString, options) => {
  const localeId = (
    typeof window === 'undefined'
      ? // eslint-disable-next-line @typescript-eslint/no-explicit-any,@typescript-eslint/no-unsafe-member-access
        (global as any).__localeId__
      : // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access,@typescript-eslint/no-explicit-any
        (window as any).__localeId__
  ) as string

  const locale = isHandledLocale(localeId) ? locales[localeId] : de
  return format(date, formatString, { locale, ...options })
}

export const formatTzInLocale: typeof formatTz = (
  date,
  formatString,
  options,
) => {
  const localeId = (
    typeof window === 'undefined'
      ? // eslint-disable-next-line @typescript-eslint/no-explicit-any,@typescript-eslint/no-unsafe-member-access
        (global as any).__localeId__
      : // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access,@typescript-eslint/no-explicit-any
        (window as any).__localeId__
  ) as string

  const locale = isHandledLocale(localeId) ? locales[localeId] : de
  return formatTz(date, formatString, { locale, ...options })
}
