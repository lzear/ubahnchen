import React from 'react'
import Head from 'next/head'
import PlausibleProvider from 'next-plausible'
import type { AppContext, AppProps } from 'next/app'
import App from 'next/app'
import { Hydrate, QueryClientProvider } from '@tanstack/react-query'
import { appWithTranslation } from 'next-i18next'
import { queryClient } from '../src/lib/client'
import '../src/lib/main.css'
import { Chakra } from '../src/lib/chakra'

const MyApp = ({ Component, pageProps }: AppProps<Record<string, unknown>>) => {
  return (
    <>
      <Head>
        <title>Ubähnchen</title>
      </Head>
      <PlausibleProvider domain="ubahnchen.vercel.app">
        <QueryClientProvider client={queryClient}>
          <Hydrate state={pageProps.dehydratedState}>
            <Chakra>
              {/* @ts-ignore*/}
              <Component {...pageProps} />
            </Chakra>
          </Hydrate>
        </QueryClientProvider>
      </PlausibleProvider>
    </>
  )
}

export const getInitialProps = async (appContext: AppContext) => {
  const { router } = appContext
  const locale = router.locale // 'ko' or 'en'
  const appProps = await App.getInitialProps(appContext)
  // @ts-ignore
  global['__localeId__'] = locale
  return { ...appProps }
}

// MyApp.getInitialProps = async (appContext: AppContext) => {
//   const { router } = appContext
//   const locale = router.locale // 'ko' or 'en'
//   const appProps = await App.getInitialProps(appContext)
//   // @ts-ignore
//   global['__localeId__'] = locale
//   return { ...appProps }
// }

const Appp: ReturnType<typeof appWithTranslation> = appWithTranslation(MyApp)

export default Appp
