import dynamic from 'next/dynamic'

// PaperCanvas has to be Dynamic, else canvas resizing fails
export const PaperCanvasDynamic = dynamic(() => import('./paper-canvas'), {
  ssr: false,
})
