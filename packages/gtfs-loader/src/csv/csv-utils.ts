export const LINE_LENGTH = 40
export const log2cols = (
  left: string,
  right: string,
  lineLength: number = LINE_LENGTH,
) => console.log(left + right.padStart(lineLength - left.length))
