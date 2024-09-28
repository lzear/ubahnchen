import SVGPathCommander from 'svg-path-commander'

export const parsePathString = (pathString: string) =>
  SVGPathCommander.normalizePath(SVGPathCommander.parsePathString(pathString))
