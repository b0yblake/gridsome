module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    'plugin:vue/recommended',
    'plugin:import/errors',
    'plugin:import/warnings'
  ],
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module',
    allowImportExportEverywhere: true
  },
  env: {
    node: true
  },
  rules: {
    'quotes': ['error', 'single', { allowTemplateLiterals: true }],
    'comma-dangle': ['error', 'never'],
    'semi': ['error', 'never'],
    'no-console': 'off',
    // Allow unresolved imports
    'import/no-unresolved': 'off',
    'vue/no-multiple-template-root': 'off',
    'vue/valid-template-root': 'off'
  }
}
