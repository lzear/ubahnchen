import { revalidatePath } from 'next/cache'

import type { MapAssetName } from '@ubahnchen/cities/node'
import { MapAssets } from '@ubahnchen/cities/node'
import type { Json } from '@ubahnchen/json'

export class ActionCityMapIO<
  N extends MapAssetName,
  T extends Json,
> extends MapAssets<N, T> {
  async write(data: T): Promise<void> {
    await super.write(data)
    revalidatePath(`/dev/${this.city}/${this.map}/${this.name}`)
  }
}
