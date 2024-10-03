/* eslint-disable unicorn/no-array-callback-reference */
import absolutize from 'abs-svg-path'
// @ts-expect-error
import normalizeSvgPath from 'normalize-svg-path'
// @ts-expect-error
import parse from 'parse-svg-path'

// @ts-expect-error
// eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-return
export const normalize = (d: string): string => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-assignment
  const n: ReturnType<typeof absolutize> = normalizeSvgPath(
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-argument
    absolutize(parse(d)),
  )

  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access,@typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-return
  const strs = n.flatMap((v) => v.join(' '))
  return strs.join(' ')
}
