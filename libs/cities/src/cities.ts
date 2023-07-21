import { berlin } from './berlin'

export const cities = {
  berlin,
}

export type City = keyof typeof cities

export const citiesList = Object.keys(cities) as City[]

export const isCity = (city: string): city is City => city in cities

export const getCity = (city: string) => {
  if (!isCity(city)) {
    throw new Error(`City ${city} not found`)
  }
  return cities[city]
}
