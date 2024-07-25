import jsdomGlobal from 'jsdom-global'

export const nodeSvg = () => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  jsdomGlobal()

  global.DOMParser = window.DOMParser
}
