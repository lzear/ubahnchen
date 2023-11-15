import { redirect } from 'next/navigation.js'

import { citiesList, isCity } from '@ubahnchen/cities'

import type { CityMapParam } from '../dev/[city]/[map]/params'

export const generateStaticParams = () =>
  citiesList.map((city) => ({
    city,
  }))

const Page = ({ params }: { params: CityMapParam }) => {
  console.log('🦺 antoinelog params', params)
  const { city } = params

  if (!isCity(city)) throw new Error('Need city and map!')

  return redirect(`/${city}/u`)


}

export default Page
