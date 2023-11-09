import type { City } from '@ubahnchen/cities'
import { cities } from '@ubahnchen/cities'

import { DevCity } from './dev-city.js'

const Dev = (props: { params: { city: City } }) => {
  const { city } = props.params
  const config = cities[city]
  return (
    <article className="prose m-auto p-10 md:prose-lg lg:prose-xl">
      <DevCity city={city} cityConfig={config} />
    </article>
  )
}

export default Dev