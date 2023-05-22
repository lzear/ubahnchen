/* eslint-disable unicorn/prefer-module */
const typedocConfig = {
  entryPoints: ['../../packages/*'],
  name: 'Packages Example',
  entryPointStrategy: 'packages',
  includeVersion: true,

  plugin: [
    // 'typedoc-plugin-markdown',
    'typedoc-plugin-coverage',
    'typedoc-theme-hierarchy',
    'typedoc-plugin-keywords',
  ],
  keywords: ['ubahnchen', 'subway', 'gtfs', 'metro'],
  // Potentially useful for debugging
  // "logLevel": "Verbose"
}

module.exports = typedocConfig
