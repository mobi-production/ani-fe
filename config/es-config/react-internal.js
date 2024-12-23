const { resolve } = require('node:path')

const project = resolve(process.cwd(), 'tsconfig.json')

/*
 * This is a custom ESLint configuration for use with
 * internal (bundled by their consumer) libraries
 * that utilize React.
 */

/** @type {import("eslint").Linter.Config} */
module.exports = {
  plugins: ['react'],
  extends: ['eslint:recommended', 'prettier', 'eslint-config-turbo', 'plugin:react/recommended'],
  globals: {
    React: true,
    JSX: true
  },
  env: {
    browser: true
  },
  settings: {
    'import/resolver': {
      typescript: {
        project
      }
    },
    react: {
      version: 'detect'
    }
  },
  ignorePatterns: ['.*.js', 'node_modules/', 'dist/'],
  overrides: [
    {
      files: ['*.js?(x)', '*.ts?(x)'],
      rules: {
        'react/jsx-curly-brace-presence': ['error', { props: 'never', children: 'never' }]
      }
    }
  ]
}
