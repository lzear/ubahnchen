import { cityStats, logCityStats } from '@ubahnchen/cities/node'

import { getCities } from './get-cities'

export const getStatus = async (city?: string) => {
  const cities = getCities(city)
  const stats = await Promise.all(cities.map((city) => cityStats(city)))
  for (const stat of stats) {
    console.log()
    logCityStats(stat)
  }
  console.log()

  const notOkay = stats
    .filter((stat) => !stat.isOkay)
    .map((stat) => ({
      city: stat.city,
      notOkay: (['zip', 'csv', 'db', 'maps'] as const).filter(
        (k) => !stat[k].isOkay,
      ),
    }))
  if (notOkay.length > 0) {
    console.error('❌ Some cities are not ready')
    console.table(notOkay)
    return 1
  }
  console.log('✅ All cities are okay')
  return 0
}
