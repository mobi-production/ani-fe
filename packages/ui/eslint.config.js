export default [
  {
    root: true,
    extends: ['@config/es-config/library.js'],
    overrides: [
      {
        files: ['*.ts', '*.tsx'],
        parser: '@typescript-eslint/parser',
        parserOptions: {
          project: true
        }
      }
    ],
    rules: {}
  }
]
