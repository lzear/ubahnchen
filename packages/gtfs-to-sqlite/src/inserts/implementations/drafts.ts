import fs from 'node:fs'
import readline from 'node:readline'

export const fastRead = (path: string) =>
  new Promise((resolve) => {
    const fileStream = fs.createReadStream(path)

    // Create a readline interface to process the file line by line
    const rl = readline.createInterface({
      input: fileStream,
      // crlfDelay: Number.POSITIVE_INFINITY,
    })
    let iii = 0
    const start = Date.now()
    // Set up a listener for the 'line' event
    rl.on('line', (_row) => {
      iii++

      if (iii % 10_000 === 0) {
        console.log((iii / (Date.now() - start)) * 1000)
      }
    })

    rl.on('close', resolve)
  })
