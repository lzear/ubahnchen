import type { City } from '@ubahnchen/cities'
import { cities } from '@ubahnchen/cities'

import { DevCity } from './dev-city'

const Dev = (props: { params: { city: City } }) => {
  const { city } = props.params
  const config = cities[city]
  return (
    <article className="prose md:prose-lg lg:prose-xl m-auto p-10">
      <DevCity city={city} cityConfig={config} />
    </article>
  )
}

export default Dev
