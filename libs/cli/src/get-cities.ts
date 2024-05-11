import { citiesList, isCity } from '@ubahnchen/cities'

export const getCities = (city: string | undefined) => {
  if (!city) return [...citiesList]
  if (isCity(city)) return [city]
  throw new Error(`City ${city} is not supported`)
}
