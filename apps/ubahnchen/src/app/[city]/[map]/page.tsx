import { cities, citiesList } from '@ubahnchen/cities'

export const dynamicParams = false
export const dynamic = 'error'

export const generateStaticParams = () =>
  citiesList.flatMap((city) =>
    Object.keys(cities[city].maps).map((map) => ({ city, map })),
  )

export { MapServer as default } from '@/components/map/map-server'
