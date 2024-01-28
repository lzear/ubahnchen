import fs from 'node:fs'
import path from 'node:path'

import * as tmp from 'tmp'

export class Temporary {
  private temporaryDirectory?: tmp.DirResult

  directory(): string {
    if (!this.temporaryDirectory) {
      this.temporaryDirectory = tmp.dirSync()
    }
    return this.temporaryDirectory.name
  }

  file(name = 'temp.csv'): string {
    return path.join(this.directory(), name)
  }

  randomFile(): string {
    return tmp.tmpNameSync()
  }

  async cleanup(): Promise<void> {
    if (this.temporaryDirectory) {
      return fs.promises.rm(this.temporaryDirectory.name, {
        recursive: true,
        force: true,
      })
    }
  }
}
