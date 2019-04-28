module.exports = {
  parserOptions: {
    sourceType: 'module'
  },
  parser: 'babel-eslint',
  env: {
    node: true
  },
  extends: ['airbnb', 'prettier'],
  plugins: ['prettier'],
  rules: {
    // 'promise/catch-or-return': 'error',
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        semi: false
      }
    ],
    'no-underscore-dangle': 'off',
    'func-names': 'off'
  }
}
