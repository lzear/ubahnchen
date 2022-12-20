import React from 'react'
import { ColorModeScript, theme } from '@chakra-ui/react'
import NextDocument, { Html, Head, Main, NextScript } from 'next/document'

const loadWindowProperty = (locale: string) => (
  <script
    dangerouslySetInnerHTML={{
      __html: `window.__localeId__ = "${locale}"`,
    }}
  />
)

const vurl = process.env['NEXT_PUBLIC_VERCEL_URL'] || process.env['VERCEL_URL']

const description = 'Animated live map of the Berlin city trains'
const https = `https://${vurl}`
const image = `https://${vurl}/berlin/preview.png`

export default class Document extends NextDocument {
  override render() {
    const { locale } = this.props
    return (
      <Html>
        <Head>
          <link rel="manifest" href="/manifest.json" />
          <meta name="theme-color" content="#E0B31C" />
          <meta name="description" content={description} />
          <meta property="og:url" content={https} />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Ubähnchen" />
          <meta property="og:description" content={description} />
          <meta property="og:image" content={image} />
          <meta name="twitter:card" content={image} />
          <meta property="twitter:domain" content={vurl} />
          <meta property="twitter:url" content={https} />
          <meta name="twitter:title" content="Ubähnchen" />
          <meta name="twitter:description" content={description} />
          <meta name="twitter:image" content={image} />
          <link rel="me" href="https://functional.cafe/@lzear" />
        </Head>
        <body>
          {typeof locale === 'string' && loadWindowProperty(locale)}
          {/*👇 Here's the script */}
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
