// eslint-enable sort-keys

const eslintConfig = {
  plugins: [
    'jsonc',
    'simple-import-sort',
    '@tanstack/query',
    '@ubahnchen',
    'vitest',
  ],
  extends: [
    'next/core-web-vitals',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:@typescript-eslint/strict',
    'plugin:@typescript-eslint/stylistic-type-checked',
    'plugin:@tanstack/eslint-plugin-query/recommended',
    'plugin:vitest/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:jsonc/recommended-with-jsonc',
    'plugin:markdown/recommended',
    'plugin:tailwindcss/recommended',
    'plugin:unicorn/recommended',
    'plugin:prettier/recommended',
  ],
  /* eslint-enable sort-keys */
  rules: {
    '@next/next/no-html-link-for-pages': 0,
    '@typescript-eslint/ban-ts-comment': 0,
    '@typescript-eslint/consistent-type-definitions': 0, // idc about type vs interface
    '@typescript-eslint/consistent-type-imports': 2,
    '@typescript-eslint/no-non-null-assertion': 0,
    '@typescript-eslint/prefer-nullish-coalescing': [
      2,
      { ignoreMixedLogicalExpressions: true },
    ],
    '@typescript-eslint/no-floating-promises': 2,
    '@typescript-eslint/no-unused-vars': [
      2,
      {
        ignoreRestSiblings: true,
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: `^_`,
      },
    ],
    'import/first': 2,
    'import/newline-after-import': 2,
    'import/no-duplicates': 2,
    'import/no-extraneous-dependencies': [
      2,
      {
        devDependencies: [
          '**/*.test.*',
          '**/*.config.*',
          '*.config.*',
          'tsup.config.ts',
          '**/vitest.config.ts',
          '**/vitest.config.js',
        ],
      },
    ],
    'import/order': 0,
    'jsx-quotes': 2,
    'jsonc/sort-keys': [
      2,
      // For example, a definition for package.json
      {
        pathPattern: '^$', // Hits the root properties
        order: [
          'name',
          'version',
          'bin',
          'scripts',
          'dependencies',
          'devDependencies',
          'publishConfig',
          'private',
        ],
      },
      {
        pathPattern: '^(?:dev|peer|optional|bundled)?[Dd]ependencies$',
        order: { type: 'asc' },
      },
      // ...
    ],
    'no-html-link-for-pages': 0,
    'object-shorthand': 2,
    'react/jsx-closing-tag-location': 2,
    'react/jsx-curly-brace-presence': [2, 'never'],
    'react/prop-types': 0,
    '@typescript-eslint/no-duplicate-enum-values': 0,
    'react/self-closing-comp': 2,
    'vitest/valid-title': 0, // until versions is updated
    'simple-import-sort/imports': [
      2,
      {
        groups: [
          // Node.js builtins. You could also generate this regex if you use a `.js` config.
          // For example: `^(${require("module").builtinModules.join("|")})(/|$)`
          // Note that if you use the `node:` prefix for Node.js builtins,
          // you can avoid this complexity: You can simply use "^node:".
          ['^node:'],
          [
            '^(assert|buffer|child_process|cluster|console|constants|crypto|dgram|dns|domain|events|fs|http|https|module|net|os|path|punycode|querystring|readline|repl|stream|string_decoder|sys|timers|tls|tty|url|util|vm|zlib|freelist|v8|process|async_hooks|http2|perf_hooks)(/.*|$)',
          ],
          // Packages. `react` related packages come first.
          ['^react', String.raw`^@?\w`],
          // Internal packages.
          [String.raw`^(@|@ubahnchen)(\/.*|$)`],
          // Side effect imports.
          [String.raw`^\u0000`],
          // Parent imports. Put `..` last.
          [String.raw`^\.\.(?!/?$)`, String.raw`^\.\./?$`],
          // Other relative imports. Put same-folder imports and `.` last.
          [
            String.raw`^\./(?=.*/)(?!/?$)`,
            String.raw`^\.(?!/?$)`,
            String.raw`^\./?$`,
          ],
          // Style imports.
          [String.raw`^.+\.s?css$`],
        ],
      },
    ],
    'simple-import-sort/exports': 2,
    'unicorn/no-abusive-eslint-disable': 0,
    'unicorn/no-null': 0,
    'unicorn/prevent-abbreviations': 0, // annoying

    '@ubahnchen/prefer-relative-imports': 2,
  },
  overrides: [
    {
      files: ['*.json', '*.json5', '*.jsonc'],
      parser: 'jsonc-eslint-parser',
      rules: {
        'unicorn/numeric-separators-style': 0,
      },
    },
  ],

  // parser: "@babel/eslint-parser",
  settings: {
    'import/resolver': {
      typescript: true,
      node: {
        extensions: [
          '.js',
          '.jsx',
          '.ts',
          '.tsx',
          '.json',
          '.md',
          '.cjs',
          '.mjs',
          '.sh',
        ],
      },
    },
    react: {
      version: 'detect',
    },
  },
  // parserOptions: {
  //   // Required for certain syntax usages
  //   ecmaVersion: 2020,
  // },

  parser: '@typescript-eslint/parser',
  parserOptions: {
    // project: true,
    // tsconfigRootDir: __dirname,
    project: [
      './tsconfig.json',
      './*/*/tsconfig.json',
      './packages/*/tsconfig.json',
      './libs/*/tsconfig.json',
    ],
    // extraFileExtensions: ['.json', '.md'],
  },

  env: {
    // ... your other environments
    'vitest/env': true,
  },
}

// eslint-disable-next-line unicorn/prefer-module
module.exports = eslintConfig
