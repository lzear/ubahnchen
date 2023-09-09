import fs from 'node:fs'

import { revalidatePath } from 'next/cache'

import type { City } from '@ubahnchen/cities'
import { initializeFileIfNotExists } from '@ubahnchen/node-utils'

class ActionIO<T> {
  constructor(private filePath: string) {}

  async read(defaultValue: T): Promise<T> {
    await initializeFileIfNotExists(this.filePath)
    const file = await fs.promises.open(this.filePath, 'a+')
    try {
      const data = await file.readFile('utf8')
      await file.close()
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      return JSON.parse(data) as T
    } catch (error) {
      console.error(error)
      return defaultValue
    }
  }

  async write(data: T) {
    return fs.promises.writeFile(this.filePath, JSON.stringify(data))
  }
}

export class ActionCityMapIO<T> extends ActionIO<T> {
  constructor(
    private city: City,
    private map: string,
    private name: string,
  ) {
    super(`./data/${city}/${map}/${name}.json`)
  }

  async write(data: T): Promise<void> {
    await super.write(data)
    revalidatePath(`/dev/${this.city}/${this.map}/${this.name}`)
  }
}
