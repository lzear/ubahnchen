'use client'

import React, { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import DOMPurify from 'dompurify'

import type { ComparisonMethod } from '@/components/svgomfg/comparison'
import { useComparisonMethod } from '@/components/svgomfg/comparison'

import { Pinch } from '../pinch'

const sanitizeSvg = (svg: string) =>
  DOMPurify.sanitize(svg, {
    USE_PROFILES: { svg: true, svgFilters: true },
  })

const styles = {
  animate: `
@keyframes fade-out-in {
  0%, 100% { opacity: 1; visibility: visible; }
  50% { opacity: 0; visibility: hidden; }
}
@keyframes fade-in-out {
  0%, 100% { opacity: 0; visibility: hidden; }
  50% { opacity: 1; visibility: visible; }
}
.svg1 { animation: fade-out-in 2s infinite; }
.svg2 { animation: fade-in-out 2s infinite; }
`,
  'mix-blend': `
html, body { background: black; }
.svg2 { mix-blend-mode: difference; }
`,
  'webkit-filter': `
html, body { background: rgb(127.5, 127.5, 127.5); }
.svg2 { -webkit-filter: invert(100%) opacity(50%); }
`,
  opacity:
    "html, body { background: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 2 2'%3E%3Cpath d='M1 2V0h1v1H0v1z' fill-opacity='.05'/%3E%3C/svg%3E\") 0 0/16px 16px #f2f2f2; }",
} satisfies {
  [K in ComparisonMethod]: string
}

const updateStyle = (
  styleEl: HTMLStyleElement,
  comparisonMethod: { comparison: ComparisonMethod; opacity: number },
) => {
  styleEl.textContent = `
    html, body {
      margin: 0;
      padding: 0;
      overflow: hidden;
      width: 100%;
      height: 100%;
    }
    
    .svg2 {
      position: absolute;
      top: 0;
    }
  `
  styleEl.textContent += styles[comparisonMethod.comparison]
}

const SafeSVGPreview = ({
  svgContent,
  svgContent2,
}: {
  svgContent: string | null
  svgContent2: string | null
}) => {
  const iframeRef = useRef<HTMLIFrameElement | null>(null)
  const styleRef = useRef<HTMLStyleElement | null>(null)
  const [iframeLoaded, setIframeLoaded] = useState(false)
  const [comparison] = useComparisonMethod()
  useEffect(() => {
    const iframe = iframeRef.current
    if (!iframe) return
    const handleLoad = () => {
      setIframeLoaded(true)
      const iframeDoc = iframe.contentDocument
      if (iframeDoc) {
        const style = iframeDoc.createElement('style')
        styleRef.current = style
        iframeDoc.head.append(style)
      }
    }
    iframe.addEventListener('load', handleLoad)
    if (iframe.contentDocument?.readyState === 'complete') handleLoad()
    return () => iframe.removeEventListener('load', handleLoad)
  }, [])

  useEffect(() => {
    const style = styleRef.current
    if (!style) return
    updateStyle(style, comparison)
  }, [comparison])

  const renderPortalContent = () => {
    const mountNode = iframeRef.current?.contentDocument?.body
    if (!mountNode) {
      return null
    }
    return createPortal(
      <Pinch>
        {!!svgContent && (
          <div
            className="svg1"
            style={{
              opacity:
                comparison.comparison === 'opacity'
                  ? (100 - comparison.opacity) / 100
                  : undefined,
            }}
            dangerouslySetInnerHTML={{ __html: sanitizeSvg(svgContent) }}
          />
        )}
        {!!svgContent2 && (
          <div
            className="svg2"
            style={{
              opacity:
                comparison.comparison === 'opacity'
                  ? comparison.opacity / 100
                  : undefined,
            }}
            dangerouslySetInnerHTML={{ __html: sanitizeSvg(svgContent2) }}
          />
        )}
      </Pinch>,
      mountNode,
    )
  }

  return (
    <>
      <iframe ref={iframeRef} className="size-full border-0" scrolling="no">
        {iframeLoaded && renderPortalContent()}
      </iframe>
    </>
  )
}

export default SafeSVGPreview
