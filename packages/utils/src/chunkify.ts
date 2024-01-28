export const chunkify = async <T, R>(
  processChunk_: (chunk: T[]) => Promise<unknown> | void,
  run: (pusher: (row: T) => void) => Promise<R> | R,
  chunkSize: number,
) => {
  let pendingChunksCount = 0
  let chunk: T[] = []
  const processChunk = (chunk: T[]) =>
    processChunk_(chunk)?.finally(() => pendingChunksCount--)
  const promises = []
  const pusher = (row: T) => {
    chunk.push(row)
    if (chunk.length === chunkSize) {
      pendingChunksCount++
      promises.push(processChunk([...chunk]))
      chunk = []
    }
  }
  const runResult = await run(pusher)
  if (chunk.length > 0) promises.push(processChunk(chunk))
  await Promise.all(promises)
  return runResult
}
