const eslintrc = require('./.eslintrc.js')
eslintrc.parser = '@typescript-eslint/parser'
eslintrc.plugins = ['@typescript-eslint']
eslintrc.extends = [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
]
module.exports = eslintrc
