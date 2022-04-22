const eslintrc = require('./.eslintrc.js')

eslintrc.root = true
eslintrc.parserOptions.project = 'tsconfig.json'
eslintrc.parserOptions.tsconfigRootDir = __dirname
eslintrc.parser = '@typescript-eslint/parser'
eslintrc.plugins = ['@typescript-eslint']
eslintrc.extends = [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
]
module.exports = eslintrc
