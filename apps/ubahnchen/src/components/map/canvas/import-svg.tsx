export const convertPublicPath = (path: string): string => {
  const keep = path.split('/public/')[1]

  if (!keep)
    throw new Error(
      `convertPublicPath: path "${path}" does not contain "/public/"`,
    )
  return `/${keep}`
}

export const importSvg = (
  svgPath: string,
  g: paper.Item,
  options?: object,
): Promise<paper.Item> =>
  new Promise((resolve) =>
    g.importSVG(svgPath, {
      ...options,
      onLoad: (svgItem: paper.Item) => resolve(svgItem),
    }),
  )
