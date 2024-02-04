import { revalidatePath } from 'next/cache'

import type { MapAssetName } from '@ubahnchen/cities/node'
import { MapAssets } from '@ubahnchen/cities/node'

export class ActionCityMapIO<N extends MapAssetName, T> extends MapAssets<
  N,
  T
> {
  async write(data: T): Promise<void> {
    await super.write(data)
    revalidatePath(`/dev/${this.city}/${this.map}/${this.name}`)
  }
}
