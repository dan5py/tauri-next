/**
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
  extends: ['next/core-web-vitals', 'plugin:@typescript-eslint/recommended'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'prettier'],
  root: true,
  rules: {
    '@typescript-eslint/no-unused-vars': 'warn',
    'prettier/prettier': 'error',
  },
  ignorePatterns: ['node_modules', '.next', 'out', 'src-tauri'],
};
