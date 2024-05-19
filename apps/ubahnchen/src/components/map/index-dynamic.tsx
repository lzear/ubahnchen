import dynamic from 'next/dynamic'

// PaperCanvas has to be Dynamic, else canvas resizing fails
export const IndexDynamic = dynamic(() => import('./index'), {
  ssr: false,
})
