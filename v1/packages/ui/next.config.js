/* eslint-disable @typescript-eslint/no-var-requires,unicorn/prefer-module */
// const { withSentryConfig } = require('@sentry/nextjs')
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})
const { i18n } = require('./next-i18next.config')

// const sentryWebpackPluginOptions = {
//   // Additional config options for the Sentry Webpack plugin. Keep in mind that
//   // the following options are set automatically, and overriding them is not
//   // recommended:
//   //   release, url, org, project, authToken, configFile, stripPrefix,
//   //   urlPrefix, include, ignore
//
//   silent: false, // Suppresses all logs
//   // For all available options, see:
//   // https://github.com/getsentry/sentry-webpack-plugin#options.
// }

module.exports =
  // withSentryConfig(
  withBundleAnalyzer({
    i18n,
    reactStrictMode: true,
    experimental: { esmExternals: true },
  })
//   sentryWebpackPluginOptions,
// )
