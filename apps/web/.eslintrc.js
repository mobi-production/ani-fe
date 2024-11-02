/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: ['../../config/es-config/next'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: ['./tsconfig.json'],
        tsconfigRootDir: __dirname
      }
    }
  ],
  rules: {}
}
