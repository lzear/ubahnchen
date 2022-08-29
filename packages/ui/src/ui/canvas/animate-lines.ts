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
