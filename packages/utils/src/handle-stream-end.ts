import { type Duplex, type Writable } from 'node:stream'

export const endWritableStream = (stream: Writable) =>
  new Promise<void>((resolve, reject) => {
    stream.on('finish', () => resolve())
    // stream.on('end', () => resolve())
    stream.on('error', reject)
    stream.end?.()
  })

export const endReadableStream = (stream: Duplex) => {
  // return wait(1000)
  return new Promise<void>((resolve) => {
    stream.end(resolve)
    // stream.on('finish', () => resolve())
    // stream.on('finish', () => {
    //   console.log('🦺 antoinelog 234234', 234_234)
    //
    // })
    // stream.on('error', () => {
    //   console.log('🦺 antoinelog error', 234_234)
    //
    //   resolve()
    //   reject()
    // })
    // stream.end?.()
    // resolve()
  })
}
