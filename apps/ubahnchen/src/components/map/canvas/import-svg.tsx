export const convertPublicPath = (path: string): string => {
  const keep = path.split('/public/')[1]
  if (!keep)
    throw new Error(
      `convertPublicPath: path "${path}" does not contain "/public/"`,
    )
  return `/${keep}`
}
