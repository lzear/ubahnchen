const eslintConfig = {
  plugins: ['jsonc', 'prettier', 'simple-import-sort'],

  // parser: "@babel/eslint-parser",
  extends: [
    'plugin:jsonc/recommended-with-jsonc',
    'next',
    'next/core-web-vitals',
    // 'turbo',
    'plugin:markdown/recommended',
    'eslint:recommended',
    'plugin:import/recommended',
    'plugin:import/errors',
    'plugin:import/typescript',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:unicorn/recommended',
    'plugin:jsonc/recommended-with-jsonc',
    // 'plugin:package-json/recommended',
    'prettier',
  ],
  rules: {
    '@typescript-eslint/ban-ts-comment': 0,
    '@typescript-eslint/consistent-type-imports': 2,
    // '@typescript-eslint/no-floating-promises': 2,
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
        ],
      },
    ],
    'import/order': 0,
    'jsx-quotes': 2,
    'object-shorthand': 2,
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
    'prettier/prettier': 2,
    'react/jsx-curly-brace-presence': [2, 'never'],
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
          ['^react', '^@?\\w'],
          // Internal packages.
          ['^(@|@ubahnchen)(\\/.*|$)'],
          // Side effect imports.
          ['^\\u0000'],
          // Parent imports. Put `..` last.
          ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
          // Other relative imports. Put same-folder imports and `.` last.
          ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
          // Style imports.
          ['^.+\\.s?css$'],
        ],
      },
    ],
    'simple-import-sort/exports': 2,
    'unicorn/prevent-abbreviations': [
      2,
      {
        allowList: {
          dev: true,
          dist: true,
          env: true,
          props: true,
          Props: true,
        },
      },
    ],
    'unicorn/no-null': 0,
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.js', '*.jsx'],
      rules: {
        'react/react-in-jsx-scope': 0,
        'react/no-unknown-property': [
          2,
          {
            ignore: ['jsx'],
          },
        ],
      },
    },
    {
      files: ['*.ts', '*.tsx'],
      rules: {},
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        // "tsconfigRootDir": __dirname,
        // project: ['./tsconfig.json'], // Specify it only for TypeScript files
      },
    },
    {
      files: ['*.json', '*.json5', '*.jsonc'],
      parser: 'jsonc-eslint-parser',

      parserOptions: {
        jsonSyntax: 'JSON5',
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
  parserOptions: {
    // Required for certain syntax usages
    ecmaVersion: 2020,
  },
}

// eslint-disable-next-line unicorn/prefer-module
module.exports = eslintConfig
